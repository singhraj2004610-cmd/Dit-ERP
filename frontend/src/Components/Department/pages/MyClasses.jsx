import Table from "./Table";
import { courses, students } from "../data";

function MyClasses() {
  return (
    <Table title="MY COURSES" columns={["S.No", "Course Code", "Course Name", "Section", "Semester", "Credits", "Students"]}>
      {courses.map((c, i) => (
        <tr key={i} className="border-b">
          <td className="px-3 py-2">{i + 1}</td>
          <td className="px-3 py-2">{c.code}</td>
          <td className="px-3 py-2">{c.name}</td>
          <td className="px-3 py-2">{c.section}</td>
          <td className="px-3 py-2">{c.sem}</td>
          <td className="px-3 py-2">{c.credits}</td>
          <td className="px-3 py-2">{students.filter((s) => s.section === c.section).length}</td>
        </tr>
      ))}
    </Table>
  );
}
export default MyClasses;
