import { useState } from "react";

function Leave() {
  const [form, setForm] = useState({ type: "Casual Leave", from: "", to: "", reason: "" });
  const [requests, setRequests] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    setRequests((r) => [{ ...form, status: "Pending" }, ...r]);
    setForm({ type: "Casual Leave", from: "", to: "", reason: "" });
  };
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div>
      <h1 className="text-center text-purple-900 mb-6 font-bold font-serif text-xl">APPLY FOR LEAVE</h1>
      <form onSubmit={submit} className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 max-w-xl">
        <select value={form.type} onChange={set("type")} className="border border-gray-300 rounded-lg p-2">
          <option>Casual Leave</option>
          <option>Medical Leave</option>
          <option>Duty Leave</option>
        </select>
        <div className="flex gap-3">
          <input type="date" required value={form.from} onChange={set("from")} className="border border-gray-300 rounded-lg p-2 flex-1" />
          <input type="date" required value={form.to} onChange={set("to")} className="border border-gray-300 rounded-lg p-2 flex-1" />
        </div>
        <textarea required value={form.reason} onChange={set("reason")} placeholder="Reason" className="border border-gray-300 rounded-lg p-2" />
        <button className="bg-blue-950 hover:bg-blue-800 text-white py-2 rounded-lg">Submit</button>
      </form>

      {requests.length > 0 && (
        <div className="mt-6 bg-white rounded-lg shadow max-w-xl">
          {requests.map((r, i) => (
            <div key={i} className="border-b p-3 text-sm flex justify-between">
              <span>{r.type}: {r.from} → {r.to}</span>
              <span className="text-amber-600 font-bold">{r.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Leave;
