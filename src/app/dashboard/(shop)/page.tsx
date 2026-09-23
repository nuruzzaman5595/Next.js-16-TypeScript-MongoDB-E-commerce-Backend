const stats = [
  { label: "Total Revenue", value: "$24,500", change: "+12.4%" },
  { label: "Orders", value: "1,284", change: "+8.1%" },
  { label: "Customers", value: "842", change: "+5.6%" },
  { label: "Conversion", value: "4.8%", change: "+1.2%" },
];

const recentOrders = [
  { id: "#1042", customer: "Alice Johnson", total: "$120.00", status: "Paid" },
  { id: "#1043", customer: "Mark Lee", total: "$84.50", status: "Processing" },
  { id: "#1044", customer: "Sara Kim", total: "$210.00", status: "Shipped" },
  { id: "#1045", customer: "Daniel Wu", total: "$58.25", status: "Pending" },
];

export default function ShopDashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-2xl font-bold">Overview</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <div className="mt-3 flex items-end justify-between">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <span className="text-sm font-medium text-emerald-600">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold">Recent Orders</h3>
          <button className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white">View all</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-slate-500">
              <tr>
                <th className="pb-3 font-medium">Order</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Total</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-slate-100 last:border-0">
                  <td className="py-3 font-medium">{order.id}</td>
                  <td className="py-3">{order.customer}</td>
                  <td className="py-3">{order.total}</td>
                  <td className="py-3">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
