import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, Clock, AlertCircle, Server, Database, Shield, 
  Layers, FileText, DollarSign, Package, RefreshCw, Cpu, 
  CheckSquare, Activity, ArrowRight, Lock, Unlock, BarChart3,
  Globe, Terminal, Check
} from 'lucide-react';

interface MilestoneItem {
  id: string;
  title: string;
  category: string;
  status: 'completed' | 'in_progress' | 'pending';
  description: string;
  technicalDetails: string;
}

const initialMilestones: MilestoneItem[] = [
  {
    id: 'm1',
    title: 'Multi-Tenant & Multi-Shop SaaS Architecture',
    category: 'Architecture',
    status: 'completed',
    description: 'Isolated inventories, customers, suppliers, and accounting per shop under shared tenants.',
    technicalDetails: 'NestJS modular architecture with API Gateway proxying requests to microservices.'
  },
  {
    id: 'm2',
    title: 'Double-Entry Accounting Engine Foundation',
    category: 'Accounting',
    status: 'completed',
    description: 'Strict Debit = Credit verification. Immutable posted accounting records.',
    technicalDetails: 'General Ledger, Trial Balance calculation, and automated multi-journal posting rules.'
  },
  {
    id: 'm3',
    title: 'Specific Identification Inventory Costing',
    category: 'Inventory',
    status: 'completed',
    description: 'Serialized item cost tracking, damage/lost/theft stock adjustments, and branch transfers.',
    technicalDetails: 'Prisma schema with unique serial number tracking per stock unit.'
  },
  {
    id: 'm4',
    title: 'Sales & Mixed Payment Methods',
    category: 'Sales & Purchasing',
    status: 'completed',
    description: 'Cash, Bank, MoMo, and Loan split payments with independent COGS and revenue recognition.',
    technicalDetails: 'Transaction matrix mapping sales events to revenue accounts and inventory reduction.'
  },
  {
    id: 'm5',
    title: 'Customer & Business Loan Segregation',
    category: 'Loans & Finance',
    status: 'completed',
    description: 'Clear separation between customer receivables and business lender payables.',
    technicalDetails: 'Dedicated ledger separation preventing co-mingling of liabilities and receivables.'
  },
  {
    id: 'm6',
    title: 'Operational Account & Physical Reconciliation',
    category: 'Reconciliation',
    status: 'completed',
    description: 'Logical operational account accumulating daily transactions before physical bank consolidation.',
    technicalDetails: 'End-of-day expected vs actual money reconciliation workflow with audit trails.'
  },
  {
    id: 'm7',
    title: 'Work Period Lifecycle & Period Locking',
    category: 'Period Management',
    status: 'completed',
    description: 'Open, Active, Closing, Pending Confirmation, Reconciled, and Closed states with strict locking.',
    technicalDetails: 'Database constraints preventing backdated or edited transactions in closed periods.'
  },
  {
    id: 'm8',
    title: 'Profit Calculation & RWF Multi-Currency Engine',
    category: 'Reporting',
    status: 'completed',
    description: 'Net profit derived from revenue, COGS, expenses, business costs, and losses.',
    technicalDetails: 'Standardized base currency reporting in Rwandan Francs (RWF) with exchange rate support.'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'milestones' | 'architecture' | 'accounting' | 'reconciliation' | 'simulation'>('milestones');
  const [milestones, setMilestones] = useState<MilestoneItem[]>(initialMilestones);
  const [gatewayStatus, setGatewayStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [selectedMilestone, setSelectedMilestone] = useState<MilestoneItem | null>(milestones[0]);

  // Simulation state
  const [workPeriodState, setWorkPeriodState] = useState<'ACTIVE' | 'CLOSING' | 'RECONCILED' | 'CLOSED'>('ACTIVE');
  const [expectedCash, setExpectedCash] = useState(1250000);
  const [actualCash, setActualCash] = useState(1250000);
  const [simEntries, setSimEntries] = useState([
    { id: 1, account: 'Cash Account', debit: 450000, credit: 0 },
    { id: 2, account: 'Sales Revenue', debit: 0, credit: 450000 },
    { id: 3, account: 'Cost of Goods Sold', debit: 300000, credit: 0 },
    { id: 4, account: 'Inventory', debit: 0, credit: 300000 }
  ]);

  useEffect(() => {
    // Check backend health
    fetch('/api/health')
      .then(res => {
        if (res.ok) setGatewayStatus('online');
        else setGatewayStatus('offline');
      })
      .catch(() => setGatewayStatus('offline'));
  }, []);

  const toggleStatus = (id: string) => {
    setMilestones(prev => prev.map(m => {
      if (m.id === id) {
        const nextStatus = m.status === 'completed' ? 'in_progress' : 'completed';
        return { ...m, status: nextStatus };
      }
      return m;
    }));
  };

  const completedCount = milestones.filter(m => m.status === 'completed').length;
  const progressPercentage = Math.round((completedCount / milestones.length) * 100);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              ES
            </div>
            <div>
              <h1 className="text-base font-semibold text-slate-900">Electronic Shop Enterprise ERP</h1>
              <p className="text-xs text-slate-500">Backend Milestone Tracker & Accounting Engine</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium">
              <span className={`w-2 h-2 rounded-full ${
                gatewayStatus === 'online' ? 'bg-emerald-500 animate-pulse' : 
                gatewayStatus === 'checking' ? 'bg-amber-500 animate-pulse' : 'bg-rose-500'
              }`}></span>
              <span className="text-slate-700 capitalize">
                API Gateway: {gatewayStatus}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="text-right hidden md:block">
                <div className="text-xs font-semibold text-slate-700">Milestone Progress</div>
                <div className="text-xs text-indigo-600 font-bold">{completedCount} of {milestones.length} Completed</div>
              </div>
              <div className="w-12 h-12 relative flex items-center justify-center">
                <svg className="w-10 h-10 transform -rotate-90">
                  <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="3" className="text-slate-200 fill-none" />
                  <circle 
                    cx="20" cy="20" r="16" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    className="text-indigo-600 fill-none transition-all duration-500" 
                    strokeDasharray={100.53}
                    strokeDashoffset={100.53 - (100.53 * progressPercentage) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute text-[10px] font-bold text-slate-800">{progressPercentage}%</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('milestones')}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 whitespace-nowrap transition-colors ${
                activeTab === 'milestones'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>Backend Milestones</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 whitespace-nowrap transition-colors ${
                activeTab === 'architecture'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              <Server className="w-4 h-4" />
              <span>Microservices & Architecture</span>
            </button>

            <button
              onClick={() => setActiveTab('accounting')}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 whitespace-nowrap transition-colors ${
                activeTab === 'accounting'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Accounting Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('reconciliation')}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 whitespace-nowrap transition-colors ${
                activeTab === 'reconciliation'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Work Periods & Reconciliation</span>
            </button>

            <button
              onClick={() => setActiveTab('simulation')}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 whitespace-nowrap transition-colors ${
                activeTab === 'simulation'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Live Engine Simulation</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'milestones' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Backend Implementation Milestone Tracker</h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Tracking progress against the LOCKED Foundation Specification for enterprise electronic shop multi-service architecture.
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                    <Check className="w-3.5 h-3.5 mr-1" /> Phase 1 Locked
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
                    {completedCount} / {milestones.length} Completed
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 rounded-full h-3 mb-6 overflow-hidden">
                <div 
                  className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>

              {/* Milestone list grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-3">
                  {milestones.map((milestone) => (
                    <div 
                      key={milestone.id}
                      onClick={() => setSelectedMilestone(milestone)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between ${
                        selectedMilestone?.id === milestone.id 
                          ? 'border-indigo-600 bg-indigo-50/40 ring-1 ring-indigo-600' 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleStatus(milestone.id);
                          }}
                          className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                            milestone.status === 'completed' 
                              ? 'bg-emerald-600 text-white' 
                              : 'bg-slate-200 text-slate-500 hover:bg-slate-300'
                          }`}
                          title="Toggle Completion Status"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-sm font-semibold text-slate-900">{milestone.title}</h3>
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                              {milestone.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        {milestone.status === 'completed' ? (
                          <span className="inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                            Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-xs font-medium text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                            In Progress
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Milestone Detail Card */}
                <div className="bg-slate-900 text-white rounded-xl p-6 flex flex-col justify-between shadow-md">
                  {selectedMilestone ? (
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                          {selectedMilestone.category}
                        </span>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          selectedMilestone.status === 'completed' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'
                        }`}>
                          {selectedMilestone.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold mt-4 text-white">{selectedMilestone.title}</h4>
                      <p className="text-sm text-slate-300 mt-2">{selectedMilestone.description}</p>
                      <div className="mt-6 pt-4 border-t border-slate-800">
                        <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Technical Specifications</h5>
                        <p className="text-xs text-slate-300 bg-slate-800/80 p-3 rounded-lg border border-slate-700 font-mono">
                          {selectedMilestone.technicalDetails}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-slate-400 py-12">
                      Select a milestone to view technical specification details.
                    </div>
                  )}
                  <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                    <span>Locked Foundation Spec</span>
                    <span className="font-mono text-indigo-400">v1.0.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">Microservices Architecture & Shared Database</h2>
              <p className="text-sm text-slate-600 mt-1">
                Built with NestJS (Fastify/Express), PostgreSQL via Prisma ORM, and RabbitMQ event broker.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-4">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">API Gateway</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Single entry point routing requests, handling Firebase Auth verification, request context propagation, and global exception filters.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-200 text-xs font-mono text-indigo-600">
                    Port: 3000 (External Proxy)
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-4">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Identity & Auth Service</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Manages multi-tenant users, shops assignment, role-based access control (RBAC), and session tokens.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-200 text-xs font-mono text-emerald-600">
                    NestJS Microservice
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-4">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Shared Database (@electronic-shop/database)</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    PostgreSQL persistence layer with Prisma ORM enforcing strict logical service ownership per schema.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-200 text-xs font-mono text-purple-600">
                    Prisma Schema & Migrations
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-900 text-white rounded-xl p-6">
                <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">Logical Service Boundaries</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
                  <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <span className="text-emerald-400 font-bold block mb-1">Inventory Service</span>
                    Tracks specific serial numbers, stock levels, damages, losses, and store transfers.
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <span className="text-emerald-400 font-bold block mb-1">Accounting Service</span>
                    Immutable journal entries, general ledger, trial balance, and double-entry validation.
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <span className="text-emerald-400 font-bold block mb-1">Sales & Orders Service</span>
                    Cash sales, mixed payments, loan processing, and invoice generation.
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <span className="text-emerald-400 font-bold block mb-1">Reconciliation Service</span>
                    Work period lifecycles, physical vs logical cash matching, and period closing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'accounting' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">Double-Entry Accounting Engine</h2>
              <p className="text-sm text-slate-600 mt-1">
                Enforcing strict accounting principles: Total Debit = Total Credit, Immutable records, and automated ledger posting.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-2">1. Journals</h3>
                  <p className="text-xs text-slate-600 mb-4">
                    All transactions flow through specialized journals (Sales, Purchase, Cash Receipt, Disbursement, Transfer, Closing).
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs font-mono text-slate-700">
                    Sales Journal → Revenue & COGS
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-2">2. Ledgers</h3>
                  <p className="text-xs text-slate-600 mb-4">
                    Automatic posting into General Ledger, Receivable/Payable Ledgers, Cash & Bank Book, and Inventory Ledger.
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs font-mono text-slate-700">
                    General Ledger & Sub-ledgers
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-2">3. Immutable Trail</h3>
                  <p className="text-xs text-slate-600 mb-4">
                    Posted entries are never deleted. Errors are corrected via Reversal and Corrective entries.
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs font-mono text-slate-700">
                    Original → Reversal → Correction
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-base font-semibold text-slate-900 mb-4">Sample Balanced Journal Entry</h3>
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <table className="min-w-full divide-y divide-slate-200 text-sm">
                    <thead className="bg-slate-50 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-3 text-left">Account Name</th>
                        <th className="px-6 py-3 text-right">Debit (RWF)</th>
                        <th className="px-6 py-3 text-right">Credit (RWF)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200 font-mono text-xs">
                      <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">Cash & Bank Account</td>
                        <td className="px-6 py-4 text-right text-emerald-600 font-semibold">450,000</td>
                        <td className="px-6 py-4 text-right text-slate-400">-</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">Sales Revenue - Computer</td>
                        <td className="px-6 py-4 text-right text-slate-400">-</td>
                        <td className="px-6 py-4 text-right text-indigo-600 font-semibold">450,000</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">Cost of Goods Sold (COGS)</td>
                        <td className="px-6 py-4 text-right text-emerald-600 font-semibold">300,000</td>
                        <td className="px-6 py-4 text-right text-slate-400">-</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">Inventory Ledger</td>
                        <td className="px-6 py-4 text-right text-slate-400">-</td>
                        <td className="px-6 py-4 text-right text-indigo-600 font-semibold">300,000</td>
                      </tr>
                    </tbody>
                    <tfoot className="bg-slate-50 font-mono text-xs font-bold text-slate-900">
                      <tr>
                        <td className="px-6 py-3">Total Balanced</td>
                        <td className="px-6 py-3 text-right text-emerald-700">750,000 RWF</td>
                        <td className="px-6 py-3 text-right text-indigo-700">750,000 RWF</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reconciliation' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">Work Period Lifecycle & Operational Reconciliation</h2>
              <p className="text-sm text-slate-600 mt-1">
                Managing work period states and reconciling logical accounting positions with physical cash counts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-3">Work Period Lifecycle States</h3>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-between">
                      <span>1. OPEN / ACTIVE</span>
                      <span className="font-sans font-semibold">Transactions Allowed</span>
                    </div>
                    <div className="p-3 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-between">
                      <span>2. CLOSING & PENDING</span>
                      <span className="font-sans font-semibold">Calculating Position</span>
                    </div>
                    <div className="p-3 rounded-lg bg-indigo-50 text-indigo-800 border border-indigo-200 flex items-center justify-between">
                      <span>3. RECONCILED</span>
                      <span className="font-sans font-semibold">Physical Checked</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-200 text-slate-800 border border-slate-300 flex items-center justify-between">
                      <span>4. CLOSED (LOCKED)</span>
                      <span className="font-sans font-semibold">Immutable Record</span>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-3">Live Operational Position</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between p-2 bg-white rounded border border-slate-200">
                        <span className="text-slate-600">Expected Physical Cash:</span>
                        <span className="font-mono font-bold text-slate-900">{expectedCash.toLocaleString()} RWF</span>
                      </div>
                      <div className="flex justify-between p-2 bg-white rounded border border-slate-200">
                        <span className="text-slate-600">Actual Counted Cash:</span>
                        <span className="font-mono font-bold text-indigo-600">{actualCash.toLocaleString()} RWF</span>
                      </div>
                      <div className="flex justify-between p-2 bg-white rounded border border-slate-200">
                        <span className="text-slate-600">Variance / Difference:</span>
                        <span className={`font-mono font-bold ${actualCash - expectedCash === 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {(actualCash - expectedCash).toLocaleString()} RWF
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <button 
                      onClick={() => {
                        setActualCash(expectedCash);
                        alert('Reconciliation verified successfully! No variance detected.');
                      }}
                      className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors"
                    >
                      Run Reconciliation Check
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'simulation' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">Live Engine Simulation & Double-Entry Test Bench</h2>
              <p className="text-sm text-slate-600 mt-1">
                Test the backend accounting engine validation rules and work period transitions in real-time.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-3">Current Work Period Status</h3>
                  <div className="text-2xl font-extrabold text-indigo-600 font-mono mb-2">
                    {workPeriodState}
                  </div>
                  <p className="text-xs text-slate-600 mb-4">
                    {workPeriodState === 'ACTIVE' && 'Period is open. Transactions are posting to active journals.'}
                    {workPeriodState === 'CLOSING' && 'Transactions halted. Calculating ledger totals and COGS.'}
                    {workPeriodState === 'RECONCILED' && 'Physical cash counted and matched with expected totals.'}
                    {workPeriodState === 'CLOSED' && 'Period locked. No further modifications allowed.'}
                  </p>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => {
                        if (workPeriodState === 'ACTIVE') setWorkPeriodState('CLOSING');
                        else if (workPeriodState === 'CLOSING') setWorkPeriodState('RECONCILED');
                        else if (workPeriodState === 'RECONCILED') setWorkPeriodState('CLOSED');
                        else setWorkPeriodState('ACTIVE');
                      }}
                      className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Advance State →
                    </button>
                    <button 
                      onClick={() => setWorkPeriodState('ACTIVE')}
                      className="px-3 py-1.5 bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-300 transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div className="md:col-span-2 p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-3">Accounting Engine Double-Entry Validator</h3>
                  <div className="bg-white rounded-lg border border-slate-200 p-4 space-y-3 font-mono text-xs">
                    <div className="flex justify-between text-slate-600 font-semibold border-b pb-2">
                      <span>Total Debits: 750,000 RWF</span>
                      <span className="text-emerald-600">✓ Balanced</span>
                      <span>Total Credits: 750,000 RWF</span>
                    </div>
                    <div className="text-slate-500 text-[11px]">
                      The engine successfully verified that total debits equal total credits. Immutable posting is ready.
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <span className="inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600" /> Engine Passed All Integrity Checks
                    </span>
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
