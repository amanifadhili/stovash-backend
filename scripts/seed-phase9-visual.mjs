/**
 * Phase 9 visual seed — fills treasury, loans, expenses, and journals
 * on the real Kanyuka tenant shops (kacyiru / ndera / Kanyuka).
 *
 * Inventory and sales already exist on kacyiru; this does not recreate them.
 *
 * Usage (from electronic-shop-api):
 *   node scripts/seed-phase9-visual.mjs
 *
 * Log in as sincereabayo@gmail.com and select shop **kacyiru**.
 * Demo role logins (same tenant): staff|manager|accountant@kanyuka.local / admin123
 */
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import bcrypt from "bcryptjs";

const API = process.env.API_URL || "http://localhost:3001/api";
const TENANT_ID = "86c4753f-6990-4508-b59a-a953a2bd0c88";
const DEMO_PASSWORD = "admin123";
const MARK = "seed:phase9";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const DEMO_USERS = [
  { email: "seed-laptop-admin@sinc.local", firstName: "Seed", lastName: "Admin", role: "ADMIN" },
  { email: "staff@kanyuka.local", firstName: "Claudine", lastName: "Staff", role: "STAFF" },
  { email: "manager@kanyuka.local", firstName: "Eric", lastName: "Manager", role: "MANAGER" },
  { email: "accountant@kanyuka.local", firstName: "Aline", lastName: "Accountant", role: "ACCOUNTANT" },
];

async function cmd(command, payload, ctx = {}) {
  const headers = { "Content-Type": "application/json" };
  if (ctx.token) headers.Authorization = `Bearer ${ctx.token}`;
  if (ctx.shopId) headers["X-Shop-ID"] = ctx.shopId;
  if (ctx.tenantId) headers["X-Tenant-ID"] = ctx.tenantId;
  const res = await fetch(API, {
    method: "POST",
    headers,
    body: JSON.stringify({ command, payload: payload ?? {} }),
  });
  const json = await res.json().catch(() => ({ status: "error", message: `HTTP ${res.status}` }));
  if (json.status !== "success") {
    throw new Error(`${command}: ${json.message || JSON.stringify(json)}`);
  }
  return json.data;
}

function psql(db, sql) {
  const file = `/tmp/phase9-${db}.sql`;
  writeFileSync(file, sql);
  execSync(`psql -h localhost -U postgres -d ${db} -v ON_ERROR_STOP=1 -f ${file}`, {
    env: { ...process.env, PGPASSWORD: "postgres" },
    stdio: "inherit",
  });
}

function pickMethod(methods, name) {
  const matches = (methods || []).filter((m) => m.name === name && m.isActive !== false);
  return matches.sort((a, b) => Number(b.balance) - Number(a.balance))[0];
}

async function ensureUsers() {
  const hash = await bcrypt.hash(DEMO_PASSWORD, 10);
  for (const u of DEMO_USERS) {
    const id = `seed-${u.role.toLowerCase()}-${u.email.split("@")[0]}`.slice(0, 36);
    psql(
      "identity_db",
      `INSERT INTO users (id, "tenantId", email, password, "firstName", "lastName", role, status, "createdAt", "updatedAt")
       VALUES ('${id}', '${TENANT_ID}', '${u.email}', '${hash}', '${u.firstName}', '${u.lastName}', '${u.role}', 'ACTIVE', NOW(), NOW())
       ON CONFLICT (email) DO UPDATE SET password = EXCLUDED.password, role = EXCLUDED.role, status = 'ACTIVE', "updatedAt" = NOW();`,
    );
  }
}

function dedupePaymentMethods() {
  psql(
    "treasury_db",
    `DELETE FROM payment_methods
     WHERE id IN (
       SELECT id FROM (
         SELECT id, ROW_NUMBER() OVER (PARTITION BY "shopId", name ORDER BY balance DESC, "createdAt" ASC) AS rn
         FROM payment_methods
       ) t WHERE rn > 1 AND NOT EXISTS (SELECT 1 FROM transfers x WHERE x."fromMethodId" = t.id OR x."toMethodId" = t.id)
         AND NOT EXISTS (SELECT 1 FROM operational_deposits d WHERE d."methodId" = t.id)
         AND NOT EXISTS (SELECT 1 FROM treasury_loans l WHERE l."methodId" = t.id)
     );`,
  );
}

async function seedShop(ctx, { name, deposits, transfers, loans, expenses, confirms }) {
  console.log(`\n--- ${name} (${ctx.shopId}) ---`);
  await cmd("GetChartOfAccounts", {}, ctx);
  let methods = (await cmd("GetPaymentMethods", {}, ctx)).methods || [];
  const activity = await cmd("GetTreasuryActivity", {}, ctx);
  const already = (activity.transfers || []).some((t) => String(t.reference || "").startsWith(MARK));
  if (already) {
    console.log("  already seeded (found", MARK, "transfer). Skipping money moves.");
    return;
  }

  for (const d of deposits) {
    const m = pickMethod(methods, d.method);
    if (!m) throw new Error(`Missing method ${d.method}`);
    await cmd("RecordOperationalDeposit", { methodId: m.id, amount: d.amount, notes: `${MARK}:${d.note}` }, ctx);
    console.log(`  deposit ${d.method} ${d.amount}`);
    await sleep(700);
  }

  methods = (await cmd("GetPaymentMethods", {}, ctx)).methods || [];
  for (const t of transfers) {
    const from = pickMethod(methods, t.from);
    const to = pickMethod(methods, t.to);
    await cmd(
      "CreateTransfer",
      { fromMethodId: from.id, toMethodId: to.id, amount: t.amount, reference: `${MARK}:${t.ref}` },
      ctx,
    );
    console.log(`  transfer ${t.from} → ${t.to} ${t.amount}`);
    await sleep(700);
  }

  methods = (await cmd("GetPaymentMethods", {}, ctx)).methods || [];
  for (const loan of loans) {
    const m = pickMethod(methods, loan.method);
    const created = await cmd(
      "RecordTreasuryLoan",
      {
        direction: loan.direction,
        counterparty: loan.counterparty,
        methodId: m.id,
        amount: loan.amount,
        notes: `${MARK}:${loan.note || loan.counterparty}`,
      },
      ctx,
    );
    console.log(`  loan ${loan.direction} ${loan.counterparty} ${loan.amount}`);
    await sleep(700);
    if (loan.repay) {
      methods = (await cmd("GetPaymentMethods", {}, ctx)).methods || [];
      const payWith = pickMethod(methods, loan.repayMethod || loan.method);
      await cmd(
        "RecordLoanRepayment",
        { loanId: created.id, methodId: payWith.id, amount: loan.repay, notes: `${MARK}:repay` },
        ctx,
      );
      console.log(`  repay ${loan.repay}`);
      await sleep(700);
    }
  }

  for (const e of expenses) {
    await cmd(
      "RecordExpense",
      {
        category: e.category,
        amount: e.amount,
        paymentMethod: e.paymentMethod,
        paidTo: e.paidTo,
        notes: `${MARK}:${e.category}`,
      },
      ctx,
    );
    console.log(`  expense ${e.category} ${e.amount} ${e.paymentMethod}`);
  }

  methods = (await cmd("GetPaymentMethods", {}, ctx)).methods || [];
  for (const c of confirms) {
    const m = pickMethod(methods, c.method);
    const counted = Number(m.balance) + (c.diff || 0);
    await cmd("CreatePhysicalConfirmation", { methodId: m.id, amount: counted, notes: `${MARK}:count` }, ctx);
    await cmd(
      "ReconcilePaymentMethod",
      { methodId: m.id, physicalBalance: counted, notes: `${MARK}:recon` },
      ctx,
    );
    console.log(`  count/recon ${c.method} counted=${counted} (books ${m.balance})`);
  }

  methods = (await cmd("GetPaymentMethods", {}, ctx)).methods || [];
  const total = methods.reduce((s, m) => s + Number(m.balance || 0), 0);
  console.log(`  till total RWF ${total.toLocaleString()}`);
}

async function main() {
  console.log("Phase 9 visual seed");
  await ensureUsers();
  dedupePaymentMethods();

  const auth = await cmd("LoginUser", { email: "seed-laptop-admin@sinc.local", password: DEMO_PASSWORD });
  const token = auth.accessToken;
  const tenantId = auth.user.tenantId;
  const base = { token, tenantId };

  const shopsRaw = await cmd("GetTenantShops", { tenantId }, base);
  const shops = Array.isArray(shopsRaw) ? shopsRaw : shopsRaw.shops || [];
  const byName = (n) => shops.find((s) => String(s.name).toLowerCase() === n);
  const kacyiru = byName("kacyiru");
  const ndera = byName("ndera");
  const kanyuka = byName("kanyuka");
  if (!kacyiru) throw new Error("kacyiru shop not found for Kanyuka tenant");

  await seedShop(
    { ...base, shopId: kacyiru.id },
    {
      name: "kacyiru",
      deposits: [
        { method: "Cash", amount: 450000, note: "opening-cash" },
        { method: "MoMo", amount: 180000, note: "opening-momo" },
        { method: "Bank", amount: 1200000, note: "opening-bank" },
      ],
      transfers: [
        { from: "Cash", to: "Bank", amount: 120000, ref: "cash-to-bank" },
        { from: "MoMo", to: "Bank", amount: 60000, ref: "momo-to-bank" },
      ],
      loans: [
        {
          direction: "BORROWED",
          counterparty: "Bank of Kigali",
          method: "Bank",
          amount: 500000,
          repay: 150000,
          note: "bk-facility",
        },
        {
          direction: "LENT",
          counterparty: "Alice Uwase",
          method: "Cash",
          amount: 80000,
          note: "staff-advance",
        },
      ],
      expenses: [
        { category: "RENT", amount: 200000, paymentMethod: "BANK", paidTo: "Landlord — Kacyiru" },
        { category: "ISUKU", amount: 15000, paymentMethod: "CASH", paidTo: "Cleaner" },
        { category: "ELECTRICITY", amount: 45000, paymentMethod: "MOMO", paidTo: "REG" },
        { category: "INTERNET", amount: 25000, paymentMethod: "MOMO", paidTo: "MTN" },
        { category: "SALARIES", amount: 350000, paymentMethod: "BANK", paidTo: "August payroll" },
        { category: "TAXES", amount: 30000, paymentMethod: "BANK", paidTo: "RRA" },
        { category: "FIELD", amount: 12000, paymentMethod: "CASH", paidTo: "Transport" },
      ],
      confirms: [
        { method: "Cash", diff: 0 },
        { method: "MoMo", diff: -5000 },
        { method: "Bank", diff: 0 },
      ],
    },
  );

  if (ndera) {
    await seedShop(
      { ...base, shopId: ndera.id },
      {
        name: "ndera",
        deposits: [
          { method: "Cash", amount: 80000, note: "ndera-float" },
          { method: "MoMo", amount: 40000, note: "ndera-momo" },
        ],
        transfers: [{ from: "Cash", to: "Bank", amount: 20000, ref: "ndera-bank-drop" }],
        loans: [],
        expenses: [{ category: "RENT", amount: 40000, paymentMethod: "CASH", paidTo: "Ndera kiosk rent" }],
        confirms: [{ method: "Cash", diff: 0 }],
      },
    );
  }

  if (kanyuka) {
    await seedShop(
      { ...base, shopId: kanyuka.id },
      {
        name: "Kanyuka",
        deposits: [{ method: "Bank", amount: 100000, note: "kanyuka-bank" }],
        transfers: [],
        loans: [],
        expenses: [{ category: "INTERNET", amount: 15000, paymentMethod: "BANK", paidTo: "Kanyuka wifi" }],
        confirms: [{ method: "Bank", diff: 0 }],
      },
    );
  }

  console.log(`
Done. Visual testing:

  1. Log in as sincereabayo@gmail.com (your account) — same tenant as this seed.
  2. Select shop **kacyiru** (has stock, sales, now till + books + expenses).
  3. Walk Treasury (Balances / Transfers / Confirm / Loans), Expenses, Reports.

  Expected kacyiru till after seed:
    Cash  250,000   (450k in − 120k to bank − 80k lent)
    MoMo  120,000   (180k in − 60k to bank)
    Bank  1,730,000 (1.2m in + 180k transfers + 500k borrowed − 150k repaid)

  MoMo count is 5,000 short on purpose (reconcile shows a difference).
  Expenses hit the books, not the till cards (known split).

  Role logins (password ${DEMO_PASSWORD}):
    staff@kanyuka.local
    manager@kanyuka.local
    accountant@kanyuka.local
`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
