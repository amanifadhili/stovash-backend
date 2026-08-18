/**
 * Stable demo IDs for idempotent seeding across all service databases.
 * Prefix: STOVASH-DEMO — safe to re-run without wiping.
 */

export const DEMO_PASSWORD = 'admin123';

export const DEMO = {
  tenantId: 'a1000000-0000-4000-8000-000000000001',
  tenantName: 'STOVASH Demo Electronics',

  shops: {
    main: {
      id: 'a1000000-0000-4000-8000-000000000011',
      name: 'Kigali Main',
      location: 'Kigali, Rwanda',
    },
    branch: {
      id: 'a1000000-0000-4000-8000-000000000012',
      name: 'Ndera Branch',
      location: 'Ndera, Kigali',
    },
  },

  users: {
    admin: {
      id: 'a1000000-0000-4000-8000-000000000101',
      email: 'admin@stovash.local',
      firstName: 'Ada',
      lastName: 'Admin',
      role: 'ADMIN',
    },
    manager: {
      id: 'a1000000-0000-4000-8000-000000000102',
      email: 'manager@stovash.local',
      firstName: 'Eric',
      lastName: 'Manager',
      role: 'MANAGER',
    },
    staff: {
      id: 'a1000000-0000-4000-8000-000000000103',
      email: 'staff@stovash.local',
      firstName: 'Claudine',
      lastName: 'Staff',
      role: 'STAFF',
    },
    accountant: {
      id: 'a1000000-0000-4000-8000-000000000104',
      email: 'accountant@stovash.local',
      firstName: 'Aline',
      lastName: 'Accountant',
      role: 'ACCOUNTANT',
    },
  },

  staff: {
    admin: 'a1000000-0000-4000-8000-000000000201',
    manager: 'a1000000-0000-4000-8000-000000000202',
    staff: 'a1000000-0000-4000-8000-000000000203',
    accountant: 'a1000000-0000-4000-8000-000000000204',
  },

  subscriptionId: 'a1000000-0000-4000-8000-000000000301',

  workPeriods: {
    mainTenant: 'a1000000-0000-4000-8000-000000000311',
    branchTenant: 'a1000000-0000-4000-8000-000000000312',
    mainAccounting: 'a1000000-0000-4000-8000-000000000321',
    branchAccounting: 'a1000000-0000-4000-8000-000000000322',
  },

  suppliers: [
    {
      id: 'a1000000-0000-4000-8000-000000000401',
      name: 'Global Tech Distributor Ltd',
      email: 'orders@globaltech.example',
      phone: '+250788000001',
      address: 'Kigali Industrial Park',
    },
    {
      id: 'a1000000-0000-4000-8000-000000000402',
      name: 'East Africa Phones Hub',
      email: 'sales@eaphones.example',
      phone: '+250788000002',
      address: 'Nyabugogo, Kigali',
    },
    {
      id: 'a1000000-0000-4000-8000-000000000403',
      name: 'Lake Region Accessories',
      email: 'hello@lakeregion.example',
      phone: '+250788000003',
      address: 'Rubavu',
    },
    {
      id: 'a1000000-0000-4000-8000-000000000404',
      name: 'Prime Laptop Importers',
      email: 'import@primelaptops.example',
      phone: '+250788000004',
      address: 'Gikondo',
    },
  ],

  brands: [
    { id: 'a1000000-0000-4000-8000-000000000501', name: 'Apple' },
    { id: 'a1000000-0000-4000-8000-000000000502', name: 'Dell' },
    { id: 'a1000000-0000-4000-8000-000000000503', name: 'HP' },
    { id: 'a1000000-0000-4000-8000-000000000504', name: 'Lenovo' },
    { id: 'a1000000-0000-4000-8000-000000000505', name: 'Samsung' },
  ],

  categories: [
    { id: 'a1000000-0000-4000-8000-000000000511', name: 'Laptops' },
    { id: 'a1000000-0000-4000-8000-000000000512', name: 'Phones' },
    { id: 'a1000000-0000-4000-8000-000000000513', name: 'Accessories' },
  ],
} as const;

/** Serials engine history must never sell — Kigali Main status gallery. */
export const DEMO_MAIN_GALLERY_SERIAL_PREFIX = 'STOVASH-DEMO-MAIN-G-';

export type DemoUserKey = keyof typeof DEMO.users;
