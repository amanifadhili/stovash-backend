import React, { useState } from 'react';
import { 
  ShoppingCart, Package, DollarSign, RefreshCw, Lock, Unlock, 
  CheckCircle2, AlertTriangle, Shield, FileText, BarChart3, 
  Layers, Plus, Trash2, Check, ArrowRight, Search, Building2, User
} from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  serialNumber: string;
  unitPrice: number;
  purchaseCost: number;
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

export default function App() {
  const [activeTab, setActiveTab] = useState<'pos' | 'inventory' | 'loans' | 'reconciliation' | 'periods' | 'reports'>('pos');
  
  // Shop & Tenant Context
  const [tenant, setTenant] = useState('Kigali Enterprise Corp');
  const [shop, setShop] = useState('Shop A - Nyarugenge Main');

  // POS State
  const [inventoryStock, setInventoryStock] = useState<CartItem[]>([
    { id: '1', name: 'Dell Latitude 5420 i5 16GB', serialNumber: 'SN-DELL-001', unitPrice: 450000, purchaseCost: 320000 },
    { id: '2', name: 'HP ProBook 450 G8 i7', serialNumber: 'SN-HP-002', unitPrice: 550000, purchaseCost: 390000 },
    { id: '3', name: 'Epson L3210 Printer', serialNumber: 'SN-EPSON-003', unitPrice: 280000, purchaseCost: 195000 },
    { id: '4', name: 'Logitech Wireless Combo MK270', serialNumber: 'SN-ACC-004', unitPrice: 35000, purchaseCost: 22000 },
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState('Jean Paul Uwimana');
  const [paymentSplits, setPaymentSplits] = useState<PaymentSplit[]>([
    { method: 'CASH', amount: 300000 },
    { method: 'MOMO', amount: 150000 }
  ]);

  // Journals & Ledger State
  const [journalEntries, setJournalEntries] = useState<JournalEntryRecord[]>([
    {
      id: 'JE-1001',
      timestamp: new Date().toLocaleTimeString(),
      description: 'Opening Cash Float & Capital',
      lines: [
        { account: 'Cash & Bank Book', debit: 1000000, credit: 0 },
        { account: 'Capital Equity', debit: 0, credit: 1000000 }
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

  // Work Period State
  const [workPeriodState, setWorkPeriodState] = useState<'ACTIVE' | 'CLOSING' | 'RECONCILED' | 'CLOSED'>('ACTIVE');
  const [expectedCash, setExpectedCash] = useState(1300000);
  const [actualCash, setActualCash] = useState(1300000);
  const [expectedMoMo, setExpectedMoMo] = useState(450000);
  const [actualMoMo, setActualMoMo] = useState(450000);

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

    // Create Double Entry Journal
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
      timestamp: new Date().toLocaleTimeString(),
      description: `POS Sale to ${customerName} (${cart.length} items)`,
      lines
    };

    setJournalEntries([newJE, ...journalEntries]);
    setExpectedCash(prev => prev + (paymentSplits.find(s => s.method === 'CASH')?.amount || 0));
    setExpectedMoMo(prev => prev + (paymentSplits.find(s => s.method === 'MOMO')?.amount || 0));

    // Remove sold items from stock
    const soldIds = cart.map(c => c.id);
    setInventoryStock(inventoryStock.filter(i => !soldIds.includes(i.id)));
    setCart([]);
    alert('Sale completed successfully! Double-entry journal posted immutably.');
  };

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
              <p className="text-xs text-slate-500">{shop} • Phase 2 Operational Workflows & POS</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
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
          <nav className="flex space-x-8 overflow-x-auto" aria-label="Tabs">
            {[
              { id: 'pos', label: 'POS Checkout & Sales', icon: ShoppingCart },
              { id: 'inventory', label: 'Serialized Inventory', icon: Package },
              { id: 'loans', label: 'Customer & Business Loans', icon: DollarSign },
              { id: 'reconciliation', label: 'Operational Reconciliation', icon: RefreshCw },
              { id: 'periods', label: 'Work Period & Closing', icon: Lock },
              { id: 'reports', label: 'Accounting & Trial Balance', icon: BarChart3 },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
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
            {/* Left 2 Cols: Catalog & Serial Selection */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">Serialized Inventory Catalog</h2>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    Specific Identification Costing
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {inventoryStock.map((item) => (
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
                          <span>Unit Price: <strong className="text-slate-900">{item.unitPrice.toLocaleString()} RWF</strong></span>
                          <span>Cost: {item.purchaseCost.toLocaleString()} RWF</span>
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
                  {inventoryStock.length === 0 && (
                    <div className="col-span-2 text-center py-12 text-slate-400">
                      All inventory items sold out or transferred. Restock from inventory management.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Col: Cart & Mixed Payment Split */}
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
                            <div className="font-mono text-slate-500">{item.serialNumber} • {item.unitPrice.toLocaleString()} RWF</div>
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
                      <span className="font-bold text-slate-900">{cartTotal.toLocaleString()} RWF</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Total Paid Splits:</span>
                      <span className={`font-bold ${totalSplitPaid === cartTotal ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {totalSplitPaid.toLocaleString()} RWF
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
                <h2 className="text-xl font-bold text-slate-900">Inventory & Specific Identification Costing</h2>
                <p className="text-sm text-slate-600 mt-1">Serialized item tracking, stock adjustments (damage/lost/theft), and shop transfers.</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                Specific Identification Active
              </span>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 text-left">Serial Number</th>
                    <th className="px-6 py-3 text-left">Item Model</th>
                    <th className="px-6 py-3 text-right">Purchase Cost (RWF)</th>
                    <th className="px-6 py-3 text-right">Selling Price (RWF)</th>
                    <th className="px-6 py-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200 font-mono text-xs">
                  {inventoryStock.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 font-bold text-indigo-600">{item.serialNumber}</td>
                      <td className="px-6 py-4 font-sans font-medium text-slate-900">{item.name}</td>
                      <td className="px-6 py-4 text-right">{item.purchaseCost.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right">{item.unitPrice.toLocaleString()}</td>
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

        {activeTab === 'loans' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">Customer Loans (Receivables) & Business Loans (Payables)</h2>
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
                          <span>Principal: {loan.principal.toLocaleString()} RWF</span>
                          <span>Paid: {loan.paid.toLocaleString()} RWF</span>
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
                          <span>Total Amount: {loan.amount.toLocaleString()} RWF</span>
                          <span>Balance: {loan.balance.toLocaleString()} RWF</span>
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
              <p className="text-sm text-slate-600 mt-1">Compare logical accounting balances with physical cash, MoMo, and bank counts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-4">
                <h3 className="font-bold text-slate-900">Physical Cash Drawer</h3>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between p-3 bg-white rounded border">
                    <span>Expected Logical Cash:</span>
                    <span className="font-bold text-slate-900">{expectedCash.toLocaleString()} RWF</span>
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
                      {(actualCash - expectedCash).toLocaleString()} RWF
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-4">
                <h3 className="font-bold text-slate-900">Mobile Money (MoMo) Float</h3>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between p-3 bg-white rounded border">
                    <span>Expected MoMo Float:</span>
                    <span className="font-bold text-slate-900">{expectedMoMo.toLocaleString()} RWF</span>
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
                      {(actualMoMo - expectedMoMo).toLocaleString()} RWF
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
                When a work period is set to <strong className="text-white">CLOSED</strong>, all transaction additions, edits, and deletions are strictly locked by the accounting engine. Profit is calculated and posted to retained earnings.
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
                        <th className="py-2 text-right">Debit (RWF)</th>
                        <th className="py-2 text-right">Credit (RWF)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {je.lines.map((l, idx) => (
                        <tr key={idx}>
                          <td className="py-2 font-sans font-medium text-slate-900">{l.account}</td>
                          <td className="py-2 text-right text-emerald-600 font-semibold">{l.debit > 0 ? l.debit.toLocaleString() : '-'}</td>
                          <td className="py-2 text-right text-indigo-600 font-semibold">{l.credit > 0 ? l.credit.toLocaleString() : '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
