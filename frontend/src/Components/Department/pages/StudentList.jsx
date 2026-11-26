import { useState } from "react";
import Table from "./Table";
import { students } from "../data";

function StudentList() {
  const [q, setQ] = useState("");
  const list = students.filter(
    (s) => s.name.toLowerCase().includes(q.toLowerCase()) || s.roll.includes(q)
  );

  return (
    <div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search by name or roll no..."
        className="border border-gray-300 rounded-lg p-2 mb-4 w-72 bg-white"
      />
      <Table title="STUDENT LIST" columns={["Roll No", "Name", "Section", "Attendance %"]}>
        {list.map((s) => (
          <tr key={s.roll} className="border-b">
            <td className="px-3 py-2">{s.roll}</td>
            <td className="px-3 py-2">{s.name}</td>
            <td className="px-3 py-2">{s.section}</td>
            <td className={`px-3 py-2 ${s.attendance < 75 ? "text-red-700 font-bold" : ""}`}>{s.attendance}%</td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
export default StudentList;
