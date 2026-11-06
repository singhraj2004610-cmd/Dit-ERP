import React, { useState } from 'react';

export default function InventoryManager() {
  // 1. STATE: Our local database array of inventory products
  const [products, setProducts] = useState([
    { id: 101, name: "Dell Enterprise Core Server", sku: "SRV-DEL-01", stock: 14, price: 2499 },
    { id: 102, name: "Logitech Wireless Mouse M331", sku: "MOU-LOG-33", stock: 45, price: 29 },
    { id: 103, name: "Mechanical Keyboard K845", sku: "KEY-LOG-84", stock: 3, price: 79 },
  ]);

  // 2. STATE: Form inputs for adding a brand new product item
  const [newName, setNewName] = useState("");
  const [newSku, setNewSku] = useState("");
  const [newStock, setNewStock] = useState("");
  const [newPrice, setNewPrice] = useState("");

  // 3. LOGIC ACTION: Handles adding an item to our list
  const handleAddProduct = (e) => {
    e.preventDefault(); // Prevents the browser page from reloading

    // Simple validation rule check
    if (!newName || !newSku || !newStock || !newPrice) {
      alert("Please fill out all product information fields.");
      return;
    }

    // Build the new object container matching our DB model scheme
    const newProduct = {
      id: Date.now(), // Generate a unique timestamp number ID
      name: newName,
      sku: newSku.toUpperCase(),
      stock: parseInt(newStock),
      price: parseFloat(newPrice)
    };

    // Update state by adding the new object to our existing array list
    setProducts([...products, newProduct]);

    // Clear form layout fields for the next entries
    setNewName("");
    setNewSku("");
    setNewStock("");
    setNewPrice("");
  };

  // 4. LOGIC ACTION: Handles deleting a product profile row out of the array
  const handleDeleteProduct = (productId) => {
    // JavaScript .filter keeps everything EXCEPT the item matching our ID
    const updatedList = products.filter(item => item.id !== productId);
    setProducts(updatedList);
  };

  // ==========================================
  // MULTIPLE RETURN RULE: Handling Empty State Layout
  // ==========================================
  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md border max-w-md text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">📦 Warehouse Empty</h2>
          <p className="text-gray-500 mb-6">There are currently no items logged in the system catalog records.</p>
          <button 
            onClick={() => setProducts([{ id: 1, name: "Emergency Reset Item", sku: "RST-01", stock: 10, price: 99 }])}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            Load Sample Record
          </button>
        </div>
      </div>
    );
  }

  // ==========================================
  // MAIN RETURN STATEMENT: Rendering the Dashboard UI Grid
  // ==========================================
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      
      {/* Top Corporate Branding Module Header Banner */}
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-blue-900">ERP System Core Dashboard</h1>
        <p className="text-gray-500 text-sm">Active Module: Inventory Asset Control Ledger</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT PROFILE PANEL: Add New Product Procurement Entry Form */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 h-fit">
          <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b">Log New Asset Entry</h2>
          
          <form onSubmit={handleAddProduct} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Item Description</label>
              <input 
                type="text" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. 24 Inch IPS Display Monitor" 
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className=" block text-xs font-semibold uppercase text-gray-500 mb-1">Unique Stock Keeping Unit (SKU)</label>
              <input 
                type="text" 
                value={newSku}
                onChange={(e) => setNewSku(e.target.value)}
                placeholder="e.g. MON-DELL-24" 
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Initial Stock Count</label>
                <input 
                  type="number" 
                  value={newStock}
                  onChange={(e) => setNewStock(e.target.value)}
                  placeholder="0" 
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Unit Cost ($)</label>
                <input 
                  type="number" 
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  placeholder="0.00" 
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full mt-2 bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 rounded-lg text-sm shadow transition duration-150"
            >
              + Commit Asset to Registry
            </button>
          </form>
        </div>

        {/* RIGHT PANEL DATA TABLE VIEW: Available Items Ledger Monitor */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex justify-between items-center mb-4 pb-2 border-b">
            <h2 className="text-lg font-bold text-gray-800">Live Item Catalog Audit</h2>
            
            {/* INLINE CALCULATION UTILITY GRID */}
            <span className="bg-blue-50 text-blue-800 font-semibold text-xs px-3 py-1 rounded-full border border-blue-200">
              Total Tracked SKUs: {products.length} Items
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-xs font-bold text-gray-500 uppercase border-b tracking-wider">
                  <th className="py-3 px-4">Item Identity Details</th>
                  <th className="py-3 px-4">SKU Code</th>
                  <th className="py-3 px-4 text-center">In-Stock Balance</th>
                  <th className="py-3 px-4 text-right">Unit Pricing</th>
                  <th className="py-3 px-4 text-center">System Action Log</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm text-gray-700">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition duration-75">
                    <td className="py-4 px-4 font-medium text-gray-900">{product.name}</td>
                    <td className="py-4 px-4 font-mono text-xs text-gray-500">{product.sku}</td>
                    <td className="py-4 px-4 text-center">
                      
                      {/* ERP CONDITIONAL BADGE RENDER: Changes utility color indicator level matching limits */}
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        product.stock <= 5 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {product.stock} Units
                      </span>

                    </td>
                    <td className="py-4 px-4 text-right font-medium text-gray-600">${product.price.toLocaleString()}</td>
                    <td className="py-4 px-4 text-center">
                      <button 
                        onClick={() => handleDeleteProduct(product.id)}
                        className="bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-red-200 transition duration-100"
                      >
                        🗑️ Purge Asset
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
