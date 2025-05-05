import React from 'react'; // Added explicit React import

export default function DashboardPage() {
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Total Orders</h3>
            <p className="text-3xl font-bold text-indigo-600">0</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Total Revenue</h3>
            <p className="text-3xl font-bold text-indigo-600">$0.00</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Total Products</h3>
            <p className="text-3xl font-bold text-indigo-600">0</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-lg font-medium text-gray-700">Recent Orders</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-500 text-center py-4">No orders yet.</p>
          </div>
        </div>
      </div>
    )
  }