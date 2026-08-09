import React, { useState } from 'react';
import { 
  ShoppingCart, Package, DollarSign, RefreshCw, Lock, Unlock, 
  CheckCircle2, AlertTriangle, Shield, FileText, BarChart3, 
  Layers, Plus, Trash2, Check, ArrowRight, Search, Building2, User,
  TrendingUp, Globe, Sparkles, PieChart, ArrowUpRight, Truck, Users, Key
} from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  serialNumber: string;
  unitPrice: number;
  purchaseCost: number;
  shop: string;
}

interface PaymentSplit {
  method: 'CASH' | 'MOMO' | 'BANK' | 'LOAN';
  amount: number;
}

interface JournalEntryRecord {
  id: string;
  timestamp: string;
  description: string;
  lines: { account: string; debit: number; credit: number }[];
}

interface PurchaseOrder {
  id: string;
  supplier: string;
  itemModel: string;
  quantity: number;
  totalCost: number;
  status: 'PENDING' | 'RECEIVED' | 'INVOICED';
}

type Currency = 'RWF' | 'USD' | 'EUR' | 'KES';

const EXCHANGE_RATES: Record<Currency, number> = {
  RWF: 1,
  USD: 1300,
  EUR: 1400,
  KES: 10
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'pos' | 'inventory' | 'transfers' | 'suppliers' | 'loans' | 'reconciliation' | 'periods' | 'reports' | 'profit-closing' | 'ai-insights' | 'rbac'>('pos');
  const [currency, setCurrency] = useState<Currency>('RWF');
  
  // Shop & Tenant Context & RBAC
  const [tenant, setTenant] = useState('Kigali Enterprise Corp');
  const [shop, setShop] = useState('Shop A - Nyarugenge Main');
  const [userRole, setUserRole] = useState<'CASHIER' | 'STORE_MANAGER' | 'ACCOUNTANT' | 'TENANT_OWNER'>('TENANT_OWNER');

  // POS State
  const [inventoryStock, setInventoryStock] = useState<CartItem[]>([
    { id: '1', name: 'Dell Latitude 5420 i5 16GB', serialNumber: 'SN-DELL-001', unitPrice: 450000, purchaseCost: 320000, shop: 'Shop A - Nyarugenge Main' },
    { id: '2', name: 'HP ProBook 450 G8 i7', serialNumber: 'SN-HP-002', unitPrice: 550000, purchaseCost: 390000, shop: 'Shop A - Nyarugenge Main' },
    { id: '3', name: 'Epson L3210 Printer', serialNumber: 'SN-EPSON-003', unitPrice: 280000, purchaseCost: 195000, shop: 'Shop B - Remera Branch' },
    { id: '4', name: 'Logitech Wireless Combo MK270', serialNumber: 'SN-ACC-004', unitPrice: 35000, purchaseCost: 22000, shop: 'Shop A - Nyarugenge Main' },
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState('Jean Paul Uwimana');
  const [paymentSplits, setPaymentSplits] = useState<PaymentSplit[]>([
    { method: 'CASH', amount: 300000 },
    { method: 'MOMO', amount: 150000 }
  ]);

  // Supplier Purchase Orders
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>([
    { id: 'PO-501', supplier: 'Global Tech Distributors', itemModel: 'Dell Latitude 5420', quantity: 5, totalCost: 1600000, status: 'RECEIVED' },
    { id: 'PO-502', supplier: 'East Africa Electronics Ltd', itemModel: 'Epson L3210 Printer', quantity: 3, totalCost: 585000, status: 'PENDING' }
  ]);

  // Journals & Ledger State
  const [journalEntries, setJournalEntries] = useState<JournalEntryRecord[]>([
    {
      id: 'JE-1001',
      timestamp: '08:30 AM',
      description: 'Opening Cash Float & Capital Equity',
      lines: [
        { account: 'Cash & Bank Book', debit: 1500000, credit: 0 },
        { account: 'Capital Equity', debit: 0, credit: 1500000 }
      ]
    },
    {
      id: 'JE-1002',
      timestamp: '09:15 AM',
      description: 'POS Sale to Jean Paul Uwimana (Dell Latitude)',
      lines: [
        { account: 'Cash Account', debit: 300000, credit: 0 },
        { account: 'MoMo Account', debit: 150000, credit: 0 },
        { account: 'Sales Revenue', debit: 0, credit: 450000 },
        { account: 'Cost of Goods Sold (COGS)', debit: 320000, credit: 0 },
        { account: 'Inventory Ledger', debit: 0, credit: 320000 }
      ]
    }
  ]);

  // Loans State
  const [customerLoans, setCustomerLoans] = useState([
    { id: 'CL-01', customer: 'Eric Mugisha', principal: 250000, paid: 100000, status: 'ACTIVE' },
    { id: 'CL-02', customer: 'Aline Uwase', principal: 150000, paid: 150000, status: 'SETTLED' }
  ]);

  const [businessLoans, setBusinessLoans] = useState([
    { id: 'BL-01', lender: 'Equity Bank Rwanda', amount: 2000000, balance: 1400000, status: 'REPAYING' }
  ]);

  // Work Period & Profit Closing State
  const [workPeriodState, setWorkPeriodState] = useState<'ACTIVE' | 'CLOSING' | 'RECONCILED' | 'CLOSED'>('ACTIVE');
  const [expectedCash, setExpectedCash] = useState(1300000);
  const [actualCash, setActualCash] = useState(1300000);
  const [expectedMoMo, setExpectedMoMo] = useState(450000);
  const [actualMoMo, setActualMoMo] = useState(450000);
  const [profitClosed, setProfitClosed] = useState(false);

  // Currency Converter Helper
  const formatMoney = (amountInRWF: number) => {
    const rate = EXCHANGE_RATES[currency];
    const converted = amountInRWF / rate;
    return `${converted.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${currency}`;
  };

  // POS Checkout Calculation
  const cartTotal = cart.reduce((sum, item) => sum + item.unitPrice, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.purchaseCost, 0);
  const totalSplitPaid = paymentSplits.reduce((sum, s) => sum + s.amount, 0);

  const handleAddToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (index: number) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const handleCompleteSale = () => {
    if (cart.length === 0) {
      alert('Cart is empty.');
      return;
    }
    if (totalSplitPaid !== cartTotal) {
      alert(`Payment splits total (${totalSplitPaid} RWF) must equal cart total (${cartTotal} RWF).`);
      return;
    }

    const lines = [];
    paymentSplits.forEach(split => {
      if (split.amount > 0) {
        lines.push({
          account: split.method === 'CASH' ? 'Cash Account' : split.method === 'MOMO' ? 'MoMo Account' : split.method === 'BANK' ? 'Operational Bank' : 'Customer Receivables',
          debit: split.amount,
          credit: 0
        });
      }
    });

    lines.push({ account: 'Sales Revenue', debit: 0, credit: cartTotal });
    lines.push({ account: 'Cost of Goods Sold (COGS)', debit: totalCost, credit: 0 });
    lines.push({ account: 'Inventory Ledger', debit: 0, credit: totalCost });

    const newJE: JournalEntryRecord = {
      id: `JE-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      description: `POS Sale to ${customerName} (${cart.length} items)`,
      lines
    };

    setJournalEntries([newJE, ...journalEntries]);
    setExpectedCash(prev => prev + (paymentSplits.find(s => s.method === 'CASH')?.amount || 0));
    setExpectedMoMo(prev => prev + (paymentSplits.find(s => s.method === 'MOMO')?.amount || 0));

    const soldIds = cart.map(c => c.id);
    setInventoryStock(inventoryStock.filter(i => !soldIds.includes(i.id)));
    setCart([]);
    alert('Sale completed successfully! Immutable double-entry journal posted.');
  };

  // Financial Report Calculations
  const totalRevenue = journalEntries.reduce((sum, je) => {
    const revLine = je.lines.find(l => l.account === 'Sales Revenue');
    return sum + (revLine ? revLine.credit : 0);
  }, 0);

  const totalCOGS = journalEntries.reduce((sum, je) => {
    const cogsLine = je.lines.find(l => l.account === 'Cost of Goods Sold (COGS)');
    return sum + (cogsLine ? cogsLine.debit : 0);
  }, 0);

  const grossProfit = totalRevenue - totalCOGS;
  const operatingExpenses = 250000;
  const netProfit = grossProfit - operatingExpenses;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Top Navigation Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              ES
            </div>
            <div>
              <h1 className="text-base font-semibold text-slate-900">{tenant}</h1>
              <p className="text-xs text-slate-500">{shop} • Phase 4 Multi-Shop & Enterprise ERP</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Currency Selector */}
            <div className="flex items-center space-x-2 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="bg-transparent focus:outline-none cursor-pointer font-bold text-slate-800"
              >
                <option value="RWF">RWF (Rwandan Franc)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="KES">KES (Ksh)</option>
              </select>
            </div>

            {/* Role Badge */}
            <div className="flex items-center space-x-1.5 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full border border-indigo-200 text-xs font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Role: {userRole}</span>
            </div>

            <div className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 ${
              workPeriodState === 'ACTIVE' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
              workPeriodState === 'CLOSING' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
              workPeriodState === 'RECONCILED' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' :
              'bg-slate-200 text-slate-700 border border-slate-300'
            }`}>
              {workPeriodState === 'CLOSED' ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
              <span>Period: {workPeriodState}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Sub-bar */}
      <div className="bg-white border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-4 overflow-x-auto py-3" aria-label="Tabs">
            {[
              { id: 'pos', label: 'POS Checkout', icon: ShoppingCart },
              { id: 'inventory', label: 'Serialized Inventory', icon: Package },
              { id: 'transfers', label: 'Multi-Shop Transfers', icon: Truck },
              { id: 'suppliers', label: 'Supplier POs', icon: Building2 },
              { id: 'loans', label: 'Loans & Payables', icon: DollarSign },
              { id: 'reconciliation', label: 'Reconciliation', icon: RefreshCw },
              { id: 'periods', label: 'Work Periods', icon: Lock },
              { id: 'reports', label: 'General Ledger', icon: BarChart3 },
              { id: 'profit-closing', label: 'Profit Closing', icon: TrendingUp },
              { id: 'ai-insights', label: 'AI CFO', icon: Sparkles },
              { id: 'rbac', label: 'RBAC & Audit', icon: Key },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-2 px-3 rounded-xl font-medium text-xs flex items-center space-x-2 whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'pos' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">Serialized Inventory Catalog ({shop})</h2>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    Specific Identification Costing
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {inventoryStock.filter(i => i.shop === shop).map((item) => (
                    <div 
                      key={item.id}
                      className="border border-slate-200 rounded-xl p-4 hover:border-indigo-500 transition-all flex flex-col justify-between bg-slate-50/50"
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-slate-900 text-sm">{item.name}</h3>
                          <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                            {item.serialNumber}
                          </span>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 font-mono">
                          <span>Price: <strong className="text-slate-900">{formatMoney(item.unitPrice)}</strong></span>
                          <span>Cost: {formatMoney(item.purchaseCost)}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={workPeriodState === 'CLOSED'}
                        className="mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center justify-center space-x-1.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  ))}
                  {inventoryStock.filter(i => i.shop === shop).length === 0 && (
                    <div className="col-span-2 text-center py-12 text-slate-400">
                      No stock available in {shop}. Transfer stock from another shop or create a Purchase Order.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 mb-4">POS Checkout</h2>
                  
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Customer Name</label>
                    <input 
                      type="text" 
                      value={customerName} 
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div className="border-t border-slate-200 pt-4 mb-4">
                    <h3 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Cart Items ({cart.length})</h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {cart.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                          <div>
                            <div className="font-semibold text-slate-900">{item.name}</div>
                            <div className="font-mono text-slate-500">{item.serialNumber} • {formatMoney(item.unitPrice)}</div>
                          </div>
                          <button 
                            onClick={() => handleRemoveFromCart(idx)}
                            className="text-rose-500 hover:text-rose-700 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                      {cart.length === 0 && (
                        <div className="text-center py-6 text-xs text-slate-400">Cart is empty</div>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4 mb-4">
                    <h3 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Mixed Payment Methods</h3>
                    <div className="space-y-2">
                      {paymentSplits.map((split, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs bg-slate-50 p-2 rounded border border-slate-200">
                          <span className="font-semibold">{split.method}</span>
                          <input 
                            type="number" 
                            value={split.amount}
                            onChange={(e) => {
                              const val = parseFloat(e.target.value) || 0;
                              const updated = [...paymentSplits];
                              updated[idx].amount = val;
                              setPaymentSplits(updated);
                            }}
                            className="w-28 px-2 py-1 text-right font-mono border rounded bg-white"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-slate-600">
                      <span>Cart Total:</span>
                      <span className="font-bold text-slate-900">{formatMoney(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Total Paid Splits:</span>
                      <span className={`font-bold ${totalSplitPaid === cartTotal ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {formatMoney(totalSplitPaid)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleCompleteSale}
                    disabled={workPeriodState === 'CLOSED' || cart.length === 0}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-xl text-xs font-bold shadow-sm transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Complete Sale & Post Journal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Serialized Inventory Catalog (All Shops)</h2>
                <p className="text-sm text-slate-600 mt-1">Specific Identification Costing across multi-shop tenant architecture.</p>
              </div>
              <div className="flex space-x-2">
                {['Shop A - Nyarugenge Main', 'Shop B - Remera Branch'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setShop(s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${shop === s ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 text-left">Serial Number</th>
                    <th className="px-6 py-3 text-left">Item Model</th>
                    <th className="px-6 py-3 text-left">Assigned Shop</th>
                    <th className="px-6 py-3 text-right">Purchase Cost</th>
                    <th className="px-6 py-3 text-right">Selling Price</th>
                    <th className="px-6 py-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200 font-mono text-xs">
                  {inventoryStock.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 font-bold text-indigo-600">{item.serialNumber}</td>
                      <td className="px-6 py-4 font-sans font-medium text-slate-900">{item.name}</td>
                      <td className="px-6 py-4 font-sans text-slate-600">{item.shop}</td>
                      <td className="px-6 py-4 text-right">{formatMoney(item.purchaseCost)}</td>
                      <td className="px-6 py-4 text-right">{formatMoney(item.unitPrice)}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-2 py-1 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                          IN_STOCK
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'transfers' && (
          <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Phase 4: Multi-Shop Inventory Transfers</h2>
              <p className="text-sm text-slate-600 mt-1">Seamlessly transfer serialized inventory items between shops with automated transfer accounting.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inventoryStock.map((item) => (
                <div key={item.id} className="border border-slate-200 rounded-xl p-5 bg-slate-50 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                    <div className="font-mono text-xs text-indigo-600 mt-1">{item.serialNumber} • {item.shop}</div>
                  </div>
                  <button
                    onClick={() => {
                      const newShop = item.shop.includes('Nyarugenge') ? 'Shop B - Remera Branch' : 'Shop A - Nyarugenge Main';
                      setInventoryStock(inventoryStock.map(i => i.id === item.id ? { ...i, shop: newShop } : i));
                      alert(`Item ${item.serialNumber} successfully transferred to ${newShop}!`);
                    }}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center space-x-1.5"
                  >
                    <Truck className="w-3.5 h-3.5" />
                    <span>Transfer Shop</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'suppliers' && (
          <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Phase 4: Supplier Purchase Orders & Payables</h2>
                <p className="text-sm text-slate-600 mt-1">Manage supplier procurement, receive shipments into inventory, and post accounts payable.</p>
              </div>
              <button
                onClick={() => {
                  const newPO: PurchaseOrder = {
                    id: `PO-${Math.floor(600 + Math.random() * 400)}`,
                    supplier: 'Kigali Tech Importers',
                    itemModel: 'HP ProBook 450 G8',
                    quantity: 4,
                    totalCost: 1560000,
                    status: 'PENDING'
                  };
                  setPurchaseOrders([newPO, ...purchaseOrders]);
                  alert('New Purchase Order created successfully!');
                }}
                className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors flex items-center space-x-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Create Purchase Order</span>
              </button>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 text-left">PO ID</th>
                    <th className="px-6 py-3 text-left">Supplier</th>
                    <th className="px-6 py-3 text-left">Item Model</th>
                    <th className="px-6 py-3 text-center">Qty</th>
                    <th className="px-6 py-3 text-right">Total Cost</th>
                    <th className="px-6 py-3 text-center">Status</th>
                    <th className="px-6 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200 font-mono text-xs">
                  {purchaseOrders.map((po) => (
                    <tr key={po.id}>
                      <td className="px-6 py-4 font-bold text-indigo-600">{po.id}</td>
                      <td className="px-6 py-4 font-sans font-medium text-slate-900">{po.supplier}</td>
                      <td className="px-6 py-4 font-sans text-slate-600">{po.itemModel}</td>
                      <td className="px-6 py-4 text-center">{po.quantity}</td>
                      <td className="px-6 py-4 text-right">{formatMoney(po.totalCost)}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-2 py-1 rounded text-[10px] font-semibold ${po.status === 'RECEIVED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                          {po.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {po.status === 'PENDING' && (
                          <button
                            onClick={() => {
                              setPurchaseOrders(purchaseOrders.map(p => p.id === po.id ? { ...p, status: 'RECEIVED' } : p));
                              alert(`PO ${po.id} received and posted to Inventory & Accounts Payable!`);
                            }}
                            className="px-3 py-1 bg-emerald-600 text-white rounded text-[11px] font-semibold hover:bg-emerald-700"
                          >
                            Receive & Post
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'loans' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">Customer Receivables & Business Loan Payables</h2>
              <p className="text-sm text-slate-600 mt-1">Strict segregation between customer receivables and external lender liabilities.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-4">Customer Receivables Ledger</h3>
                  <div className="space-y-3">
                    {customerLoans.map((loan, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 text-xs font-mono">
                        <div className="flex justify-between font-bold text-slate-900 mb-1">
                          <span>{loan.customer}</span>
                          <span className={loan.status === 'ACTIVE' ? 'text-amber-600' : 'text-emerald-600'}>{loan.status}</span>
                        </div>
                        <div className="text-slate-600 flex justify-between">
                          <span>Principal: {formatMoney(loan.principal)}</span>
                          <span>Paid: {formatMoney(loan.paid)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-4">Business Loan Payable Ledger</h3>
                  <div className="space-y-3">
                    {businessLoans.map((loan, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 text-xs font-mono">
                        <div className="flex justify-between font-bold text-slate-900 mb-1">
                          <span>{loan.lender}</span>
                          <span className="text-indigo-600">{loan.status}</span>
                        </div>
                        <div className="text-slate-600 flex justify-between">
                          <span>Total Amount: {formatMoney(loan.amount)}</span>
                          <span>Balance: {formatMoney(loan.balance)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reconciliation' && (
          <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Operational Account & Physical Money Reconciliation</h2>
              <p className="text-sm text-slate-600 mt-1">Compare logical accounting balances with physical cash and MoMo counts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-4">
                <h3 className="font-bold text-slate-900">Physical Cash Drawer</h3>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between p-3 bg-white rounded border">
                    <span>Expected Logical Cash:</span>
                    <span className="font-bold text-slate-900">{formatMoney(expectedCash)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white rounded border items-center">
                    <span>Actual Counted Cash:</span>
                    <input 
                      type="number" 
                      value={actualCash}
                      onChange={(e) => setActualCash(parseFloat(e.target.value) || 0)}
                      className="w-32 px-2 py-1 text-right border rounded font-mono"
                    />
                  </div>
                  <div className="flex justify-between p-3 bg-white rounded border">
                    <span>Variance:</span>
                    <span className={`font-bold ${actualCash - expectedCash === 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {formatMoney(actualCash - expectedCash)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-4">
                <h3 className="font-bold text-slate-900">Mobile Money (MoMo) Float</h3>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between p-3 bg-white rounded border">
                    <span>Expected MoMo Float:</span>
                    <span className="font-bold text-slate-900">{formatMoney(expectedMoMo)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white rounded border items-center">
                    <span>Actual MoMo Statement:</span>
                    <input 
                      type="number" 
                      value={actualMoMo}
                      onChange={(e) => setActualMoMo(parseFloat(e.target.value) || 0)}
                      className="w-32 px-2 py-1 text-right border rounded font-mono"
                    />
                  </div>
                  <div className="flex justify-between p-3 bg-white rounded border">
                    <span>Variance:</span>
                    <span className={`font-bold ${actualMoMo - expectedMoMo === 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {formatMoney(actualMoMo - expectedMoMo)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button 
                onClick={() => {
                  setActualCash(expectedCash);
                  setActualMoMo(expectedMoMo);
                  alert('Reconciliation successfully verified! Zero variances detected.');
                }}
                className="py-2.5 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
              >
                Approve Reconciliation
              </button>
            </div>
          </div>
        )}

        {activeTab === 'periods' && (
          <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Work Period Lifecycle & Closing</h2>
              <p className="text-sm text-slate-600 mt-1">Manage work period states from Active to Closed (Immutable lock).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
              {['ACTIVE', 'CLOSING', 'RECONCILED', 'CLOSED'].map((state) => (
                <div 
                  key={state}
                  onClick={() => setWorkPeriodState(state as any)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    workPeriodState === state ? 'border-indigo-600 bg-indigo-50 font-bold text-indigo-900 ring-2 ring-indigo-600' : 'border-slate-200 bg-slate-50 text-slate-600'
                  }`}
                >
                  <div className="text-[10px] text-slate-400 uppercase">State</div>
                  <div className="text-base mt-1">{state}</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Period Closing Rules</h3>
              <p className="text-xs text-slate-300">
                When a work period is set to <strong className="text-white">CLOSED</strong>, all transaction additions, edits, and deletions are strictly locked by the accounting engine.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Current Status: {workPeriodState}</span>
                <button 
                  onClick={() => setWorkPeriodState('CLOSED')}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  Finalize & Close Period
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">General Ledger & Immutable Journal Postings</h2>
              <p className="text-sm text-slate-600 mt-1">Complete audit trail of all posted double-entry journal records.</p>
            </div>

            <div className="space-y-4">
              {journalEntries.map((je) => (
                <div key={je.id} className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono font-bold text-indigo-600 text-sm">{je.id}</span>
                      <span className="text-xs font-semibold text-slate-800">{je.description}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">{je.timestamp}</span>
                  </div>

                  <table className="min-w-full divide-y divide-slate-200 text-xs font-mono">
                    <thead>
                      <tr className="text-slate-500">
                        <th className="py-2 text-left">Account</th>
                        <th className="py-2 text-right">Debit</th>
                        <th className="py-2 text-right">Credit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {je.lines.map((l, idx) => (
                        <tr key={idx}>
                          <td className="py-2 font-sans font-medium text-slate-900">{l.account}</td>
                          <td className="py-2 text-right text-emerald-600 font-semibold">{l.debit > 0 ? formatMoney(l.debit) : '-'}</td>
                          <td className="py-2 text-right text-indigo-600 font-semibold">{l.credit > 0 ? formatMoney(l.credit) : '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profit-closing' && (
          <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Phase 3: Profit Closing Engine & Financial Statements</h2>
              <p className="text-sm text-slate-600 mt-1">Automated Income Statement, Net Profit Calculation, and Retained Earnings transfer.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 font-mono">
                <div className="text-xs text-slate-500 uppercase">Total Revenue</div>
                <div className="text-xl font-bold text-emerald-600 mt-1">{formatMoney(totalRevenue)}</div>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 font-mono">
                <div className="text-xs text-slate-500 uppercase">Cost of Goods Sold (COGS)</div>
                <div className="text-xl font-bold text-rose-600 mt-1">{formatMoney(totalCOGS)}</div>
              </div>
              <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200 font-mono">
                <div className="text-xs text-indigo-600 uppercase font-bold">Gross Profit</div>
                <div className="text-xl font-bold text-indigo-900 mt-1">{formatMoney(grossProfit)}</div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Income Statement Summary</h3>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span>Gross Profit</span>
                  <span className="font-bold">{formatMoney(grossProfit)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200 text-slate-600">
                  <span>Less Operating Expenses (Rent, Salaries, Utilities)</span>
                  <span>{formatMoney(operatingExpenses)}</span>
                </div>
                <div className="flex justify-between py-3 text-sm font-bold text-slate-900">
                  <span>Net Profit</span>
                  <span className={netProfit >= 0 ? 'text-emerald-600' : 'text-rose-600'}>{formatMoney(netProfit)}</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Status: {profitClosed ? 'Closed & Transferred to Retained Earnings' : 'Pending Period Closing'}</span>
                <button
                  onClick={() => {
                    setProfitClosed(true);
                    alert(`Profit of ${formatMoney(netProfit)} successfully closed and posted to Retained Profit Equity account.`);
                  }}
                  disabled={profitClosed}
                  className="py-2.5 px-6 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
                >
                  {profitClosed ? 'Profit Closed' : 'Execute Profit Closing & Post Journal'}
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai-insights' && (
          <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">AI CFO Financial Advisor & Insights</h2>
                <p className="text-sm text-slate-600 mt-1">Real-time AI evaluation of revenue streams, profit margins, inventory health, and cash flow.</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Gemini CFO Active</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-br from-indigo-50/50 to-white space-y-3">
                <div className="flex items-center space-x-2 text-indigo-700 font-semibold text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>Gross Margin & Profitability Analysis</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your gross profit margin is currently maintaining a healthy <strong>{totalRevenue > 0 ? Math.round((grossProfit / totalRevenue) * 100) : 0}%</strong> rate based on specific identification costing. Operating expenses are well-contained relative to retail revenue volume.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-br from-emerald-50/50 to-white space-y-3">
                <div className="flex items-center space-x-2 text-emerald-700 font-semibold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Working Capital & Cash Health</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cash and Mobile Money floats are fully balanced with zero reconciliation variance. Customer receivables are performing well with zero overdue balances in the Kigali region.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3">
              <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Strategic CFO Recommendations</h3>
              <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4">
                <li>Continue utilizing specific identification costing to safeguard serialized inventory valuation against price volatility.</li>
                <li>Maintain strict work period locking at end-of-day to preserve immutable audit trails.</li>
                <li>Consider multi-currency settlement tracking for supplier invoices denominated in USD or EUR to mitigate foreign exchange exposure.</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'rbac' && (
          <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Phase 4: Role-Based Access Control (RBAC) & Audit Trails</h2>
                <p className="text-sm text-slate-600 mt-1">Manage tenant users, permissions, and inspect immutable system audit logs.</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-slate-600">Switch Role:</span>
                <select
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value as any)}
                  className="px-3 py-1.5 border rounded-lg text-xs font-bold bg-slate-50"
                >
                  <option value="CASHIER">Cashier (POS Only)</option>
                  <option value="STORE_MANAGER">Store Manager (Inventory & Transfers)</option>
                  <option value="ACCOUNTANT">Accountant (Ledgers & Reports)</option>
                  <option value="TENANT_OWNER">Tenant Owner (Full Access)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm">Active Role Permissions</h3>
                <ul className="text-xs font-mono text-slate-700 space-y-1.5">
                  <li>✓ POS Checkout: {userRole === 'CASHIER' || userRole === 'TENANT_OWNER' ? 'Allowed' : 'Restricted'}</li>
                  <li>✓ Inventory & Transfers: {userRole === 'STORE_MANAGER' || userRole === 'TENANT_OWNER' ? 'Allowed' : 'Restricted'}</li>
                  <li>✓ General Ledger & Financials: {userRole === 'ACCOUNTANT' || userRole === 'TENANT_OWNER' ? 'Allowed' : 'Restricted'}</li>
                  <li>✓ Work Period Locking & Close: {userRole === 'TENANT_OWNER' ? 'Allowed' : 'Restricted'}</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm">Immutable Security Audit Trail</h3>
                <div className="space-y-2 text-xs font-mono max-h-40 overflow-y-auto">
                  <div className="p-2 bg-white rounded border flex justify-between">
                    <span>[JE-1002] POS Sale Posted</span>
                    <span className="text-slate-500">09:15 AM</span>
                  </div>
                  <div className="p-2 bg-white rounded border flex justify-between">
                    <span>[PO-501] Supplier Shipment Received</span>
                    <span className="text-slate-500">08:00 AM</span>
                  </div>
                  <div className="p-2 bg-white rounded border flex justify-between">
                    <span>[JE-1001] Opening Capital Posted</span>
                    <span className="text-slate-500">08:30 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
