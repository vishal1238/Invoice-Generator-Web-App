import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

export default function ItemList({ items, setItems }) {
  const addItem = () => {
    setItems([
      ...items,
      { id: uuidv4(), name: '', quantity: 1, price: 0 }
    ]);
  };

  const removeItem = (id) => {
    if (items.length === 1) return; // keep at least one item
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id, field, value) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: field === 'name' ? value : Number(value) };
      }
      return item;
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-800 border-b pb-2">Invoice Items</h3>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item.id} className="flex gap-4 items-start">
            <div className="flex-1">
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                Description
              </label>
              <input
                type="text"
                value={item.name}
                onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                placeholder="Item Name"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div className="w-24">
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                Qty
              </label>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateItem(item.id, 'quantity', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div className="w-32">
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                Price
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={item.price}
                onChange={(e) => updateItem(item.id, 'price', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div className="w-32">
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                Total
              </label>
              <div className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-700">
                ${(item.quantity * item.price).toFixed(2)}
              </div>
            </div>
            
            <div className="pt-6">
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                disabled={items.length === 1}
                className="p-2 text-rose-500 hover:bg-rose-50 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button
        type="button"
        onClick={addItem}
        className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 p-2 rounded-md hover:bg-indigo-50 transition-colors"
      >
        <Plus size={16} />
        Add Item
      </button>
    </div>
  );
}
