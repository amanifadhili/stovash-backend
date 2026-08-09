import { useState } from 'react';

function App() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testCommand = async (command: string, payload: any) => {
    setLoading(true);
    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-command': command },
        body: JSON.stringify({ payload })
      });
      const data = await res.json();
      setResult({ command, response: data });
    } catch (e: any) {
      setResult({ command, error: e.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Electronic Shop MS Platform</h1>
      <p>Status: Milestone 4 (Inventory Service).</p>
      
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => testCommand('CreateTenant', {
            name: 'Demo Shop ' + Date.now(),
            adminEmail: 'admin' + Date.now() + '@demo.com',
            adminPassword: 'password123',
            adminFirstName: 'John',
            adminLastName: 'Doe'
        })} disabled={loading} style={{ padding: '10px' }}>
          Test Identity
        </button>

        <button onClick={() => testCommand('PostJournalEntry', {
            description: 'Test Entry',
            entries: [
              { accountId: 'fake-asset-id', type: 'DEBIT', amount: 100 },
              { accountId: 'fake-revenue-id', type: 'CREDIT', amount: 100 }
            ]
        })} disabled={loading} style={{ padding: '10px' }}>
          Test Accounting
        </button>

        <button onClick={() => testCommand('AddProduct', {
            name: 'MacBook Pro ' + Date.now(),
            description: 'M3 Pro, 16GB RAM, 512GB SSD',
            sku: 'MBP-M3-' + Date.now()
        })} disabled={loading} style={{ padding: '10px' }}>
          Test Add Product
        </button>

        <button onClick={() => testCommand('AddInventoryItem', {
            productId: 'fake-product-id',
            serialNumber: 'SN-' + Date.now(),
            purchaseCost: 1500
        })} disabled={loading} style={{ padding: '10px' }}>
          Test Add Item
        </button>
      </div>

      {result && (
        <div style={{ marginTop: '20px', padding: '10px', background: '#f5f5f5', borderRadius: '4px', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
          <h3>Response for {result.command}:</h3>
          <pre>{JSON.stringify(result.response || result.error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
