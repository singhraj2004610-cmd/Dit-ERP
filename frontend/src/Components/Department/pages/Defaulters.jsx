import Table from "./Table";
import { students } from "../data";

function Defaulters() {
  const list = students.filter((s) => s.attendance < 75);
  return (
    <Table title="DEFAULTER LIST (BELOW 75%)" columns={["Roll No", "Name", "Section", "Attendance %"]}>
      {list.map((s) => (
        <tr key={s.roll} className="border-b">
          <td className="px-3 py-2">{s.roll}</td>
          <td className="px-3 py-2">{s.name}</td>
          <td className="px-3 py-2">{s.section}</td>
          <td className="px-3 py-2 text-red-700 font-bold">{s.attendance}%</td>
        </tr>
      ))}
    </Table>
  );
}
export default Defaulters;
