import Table from "./Table";
import { weeklyTimetable, periods } from "../data";

function Timetable() {
  return (
    <Table title="WEEKLY TIMETABLE" columns={["Day", ...periods]}>
      {weeklyTimetable.map((row) => (
        <tr key={row.day} className="border-b">
          <td className="px-3 py-2 font-semibold">{row.day}</td>
          {row.slots.map((s, i) => (
            <td key={i} className={`px-3 py-2 ${s === "—" ? "text-gray-400" : ""}`}>{s}</td>
          ))}
        </tr>
      ))}
    </Table>
  );
}
export default Timetable;
