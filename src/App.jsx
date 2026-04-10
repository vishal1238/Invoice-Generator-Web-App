import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FileText } from 'lucide-react';
import InvoiceForm from './components/InvoiceForm';
import InvoicePreview from './components/InvoicePreview';

const initialDraft = {
  invoiceNumber: '',
  date: new Date().toISOString().split('T')[0],
  clientName: '',
  clientEmail: '',
  clientAddress: '',
  items: [
    { id: uuidv4(), name: '', quantity: 1, price: 0 }
  ],
  taxRate: 0,
  subtotal: 0,
  taxAmount: 0,
  grandTotal: 0
};

function App() {
  const [invoiceData, setInvoiceData] = useState(() => {
    const saved = localStorage.getItem('invoiceDraft');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved draft");
      }
    }
    return initialDraft;
  });

  // Calculate totals whenever items or taxRate change
  useEffect(() => {
    const subtotal = invoiceData.items.reduce(
      (sum, item) => sum + (item.quantity * item.price), 
      0
    );
    const taxAmount = subtotal * (invoiceData.taxRate / 100);
    const grandTotal = subtotal + taxAmount;

    setInvoiceData(prev => ({
      ...prev,
      subtotal,
      taxAmount,
      grandTotal
    }));
  }, [invoiceData.items, invoiceData.taxRate]);

  // Save to localStorage when invoiceData changes
  useEffect(() => {
    localStorage.setItem('invoiceDraft', JSON.stringify(invoiceData));
  }, [invoiceData]);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <header className="bg-indigo-600 text-white p-4 shadow-md sticky top-0 z-10 w-full">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <FileText size={28} />
          <h1 className="text-xl font-bold tracking-wide">React Invoice Generator</h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl auto-mx p-4 md:p-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left panel: Form */}
          <div className="h-full">
            <InvoiceForm 
              invoiceData={invoiceData} 
              setInvoiceData={setInvoiceData} 
            />
          </div>
          
          {/* Right panel: Preview & Generate PDF */}
          <div className="h-full sticky top-24">
            <InvoicePreview invoiceData={invoiceData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
