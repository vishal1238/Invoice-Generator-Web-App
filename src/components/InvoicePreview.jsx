import React from 'react';
import { Download } from 'lucide-react';
import { generateInvoicePDF } from '../utils/pdfGenerator';

export default function InvoicePreview({ invoiceData }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Preview</h2>
        <button
          onClick={() => generateInvoicePDF(invoiceData)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm"
        >
          <Download size={18} />
          Download PDF
        </button>
      </div>

      <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-8 overflow-y-auto font-sans text-slate-800 shadow-inner">
        {/* Mock PDF View */}
        <div className="max-w-3xl mx-auto bg-white p-8 border border-slate-100 shadow-sm min-h-[600px]">
          <div className="flex justify-between items-start mb-12 border-b border-slate-200 pb-8">
            <div>
              <h1 className="text-4xl font-bold text-indigo-600 mb-2">INVOICE</h1>
              <p className="text-slate-500 font-medium tracking-wide">#{invoiceData.invoiceNumber || 'DRAFT'}</p>
            </div>
            <div className="text-right">
              <h3 className="font-bold text-slate-800 text-lg">Birashwar Tech Solutions</h3>
              <div className="text-slate-500 text-sm mt-1 space-y-1">
                <p>SCO 45, Sector 17-C</p>
                <p>Chandigarh, Punjab 160017</p>
                <p>India</p>
                <p className="mt-2 font-medium text-slate-700">Date: {invoiceData.date || 'N/A'}</p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Bill To</h3>
            <h4 className="text-lg font-semibold text-slate-800">{invoiceData.clientName || '(Client Name)'}</h4>
            <div className="text-slate-500 text-sm mt-1 space-y-1">
              <p>{invoiceData.clientEmail || '(Client Email)'}</p>
              <p className="whitespace-pre-wrap">{invoiceData.clientAddress || '(Client Address)'}</p>
            </div>
          </div>

          <table className="w-full mb-10 text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-indigo-600">
                <th className="py-3 text-sm font-bold text-slate-700 uppercase tracking-wider">Item Details</th>
                <th className="py-3 text-sm font-bold text-slate-700 uppercase tracking-wider w-24">Qty</th>
                <th className="py-3 text-sm font-bold text-slate-700 uppercase tracking-wider w-32">Rate</th>
                <th className="py-3 text-sm font-bold text-slate-700 uppercase tracking-wider w-32 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {invoiceData.items.map((item) => (
                <tr key={item.id}>
                  <td className="py-4 text-slate-800 font-medium">{item.name || '-'}</td>
                  <td className="py-4 text-slate-600">{item.quantity}</td>
                  <td className="py-4 text-slate-600">${parseFloat(item.price || 0).toFixed(2)}</td>
                  <td className="py-4 text-slate-800 font-semibold text-right">
                    ${(item.quantity * item.price).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end">
            <div className="w-64 space-y-3">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-medium">${invoiceData.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Tax ({invoiceData.taxRate}%)</span>
                <span className="font-medium">${invoiceData.taxAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t-2 border-slate-200 pt-3">
                <span className="font-bold text-slate-800">Total Due</span>
                <span className="font-bold text-xl text-indigo-600">${invoiceData.grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
