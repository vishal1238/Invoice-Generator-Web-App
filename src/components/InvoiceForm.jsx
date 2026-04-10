import React from 'react';
import ItemList from './ItemList';

export default function InvoiceForm({ invoiceData, setInvoiceData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData(prev => ({
      ...prev,
      [name]: name === 'taxRate' ? Number(value) : value
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Invoice Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Invoice Number
          </label>
          <input
            type="text"
            name="invoiceNumber"
            value={invoiceData.invoiceNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="INV-001"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={invoiceData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <h3 className="text-lg font-semibold text-slate-800 border-b pb-2">Client Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Client Name
            </label>
            <input
              type="text"
              name="clientName"
              value={invoiceData.clientName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Client Email
            </label>
            <input
              type="email"
              name="clientEmail"
              value={invoiceData.clientEmail}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="john@example.com"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Client Address
            </label>
            <textarea
              name="clientAddress"
              value={invoiceData.clientAddress}
              onChange={handleChange}
              rows="2"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="123 Main St, City, Country"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <ItemList 
          items={invoiceData.items} 
          setItems={(newItems) => setInvoiceData(prev => ({ ...prev, items: newItems }))}
        />
      </div>

      <div className="flex justify-end pt-4 border-t border-slate-200">
        <div className="w-64 space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500">Subtotal</span>
            <span className="font-medium">${invoiceData.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500">
              Tax ({invoiceData.taxRate}%)
            </span>
            <div className="w-20">
               <input
                type="number"
                name="taxRate"
                min="0"
                step="0.1"
                value={invoiceData.taxRate}
                onChange={handleChange}
                className="w-full px-2 py-1 text-right border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-slate-200">
            <span className="font-semibold text-slate-800">Grand Total</span>
            <span className="font-bold text-lg text-indigo-600">
              ${invoiceData.grandTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
