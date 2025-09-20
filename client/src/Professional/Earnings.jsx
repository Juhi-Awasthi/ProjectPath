import React from "react";

const Earnings = () => {
  const transactions = [
    { id: 1, date: "2025-04-01", amount: "$100", status: "Paid" },
    { id: 2, date: "2025-03-20", amount: "$200", status: "Pending" },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Earnings 💰</h1>
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl mb-4 font-semibold">Transaction History</h2>
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="bg-purple-50 rounded-xl">
                <td className="p-2">{txn.date}</td>
                <td className="p-2">{txn.amount}</td>
                <td className="p-2">{txn.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Earnings;
