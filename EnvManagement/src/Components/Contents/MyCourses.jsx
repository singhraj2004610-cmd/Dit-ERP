function MyCourse() {
  const CourseData = [
    {
      sno: 1,
      Year: "2022-2023",
      session: "ODD",
      sem: 1,
      code: "CHF101",
      Name: "Engineering Chemistry",
      bucket: "Core Science",
      credits: 5,
      coordinator: "",
      date: "9/26/2022 12:00:00 AM",
      scheme: "VIEW SCHEME",
      status: "Completed",
      Cstatus: "VIEW MARKS",
    },
    {
      sno: 2,
      Year: "2022-2023",
      session: "ODD",
      sem: 1,
      code: "CSF101",
      Name: "Programming for Problem Solving",
      bucket: "Engineering Science",
      credits: 4,
      coordinator: "",
      date: "9/26/2022 12:00:00 AM",
      scheme: "VIEW SCHEME",
      status: "Completed",
      Cstatus: "VIEW MARKS",
    },
    {
      sno: 3,
      Year: "2022-2023",
      session: "ODD",
      sem: 1,
      code: "LAF181",
      Name: "Professional Communication",
      bucket: "Language and Literature",
      credits: 3,
      coordinator: "",
      date: "9/26/2022 12:00:00 AM",
      scheme: "VIEW SCHEME",
      status: "Completed",
      Cstatus: "VIEW MARKS",
    },
    {
      sno: 4,
      Year: "2022-2023",
      session: "ODD",
      sem: 1,
      code: "MAF101",
      Name: "Engineering Mathematics I",
      bucket: "Core Maths",
      credits: 4,
      coordinator: "",
      date: "9/26/2022 12:00:00 AM",
      scheme: "VIEW SCHEME",
      status: "Failed",
      Cstatus: "VIEW MARKS",
    },
    {
      sno: 5,
      Year: "2022-2023",
      session: "ODD",
      sem: 1,
      code: "MEF102",
      Name: "Engineering Graphics",
      bucket: "Engineering Sciences",
      credits: 4,
      coordinator: "",
      date: "9/26/2022 12:00:00 AM",
      scheme: "VIEW SCHEME",
      status: "Completed",
      Cstatus: "VIEW MARKS",
    },
    {
      sno: 6,
      Year: "2022-2023",
      session: "EVEN",
      sem: 2,
      code: "CSF102",
      Name: "Data Structures",
      bucket: "Engineering Sciences",
      credits: 4,
      coordinator: "",
      date: "3/02/2023 12:00:00 AM",
      scheme: "VIEW SCHEME",
      status: "Completed",
      Cstatus: "VIEW MARKS",
    },
    {
      sno: 7,
      Year: "2022-2023",
      session: "EVEN",
      sem: 2,
      code: "EEF143",
      Name: "Electrical and Electronics Engineering Practice",
      bucket: "Engineering Sciences",
      credits: 4,
      coordinator: "",
      date: "3/02/2023 12:00:00 AM",
      scheme: "VIEW SCHEME",
      status: "Completed",
      Cstatus: "VIEW MARKS",
    },
    {
      sno: 8,
      Year: "2022-2023",
      session: "EVEN",
      sem: 2,
      code: "LAF182",
      Name: "Indian English Literature",
      bucket: "Language and Literature",
      credits: 3,
      coordinator: "",
      date: "3/02/2023 12:00:00 AM",
      scheme: "VIEW SCHEME",
      status: "Completed",
      Cstatus: "VIEW MARKS",
    },
    {
      sno: 9,
      Year: "2022-2023",
      session: "EVEN",
      sem: 2,
      code: "MAF102",
      Name: "Engineering Mathematics II",
      bucket: "Core Maths",
      credits: 4,
      coordinator: "",
      date: "3/02/2023 12:00:00 AM",
      scheme: "VIEW SCHEME",
      status: "Completed",
      Cstatus: "VIEW MARKS",
    },
    {
      sno: 10,
      Year: "2022-2023",
      session: "EVEN",
      sem: 2,
      code: "PYF105",
      Name: "Engineering Physics",
      bucket: "Core Sciences",
      credits: 5,
      coordinator: "",
      date: "3/02/2023 12:00:00 AM",
      scheme: "VIEW SCHEME",
      status: "Failed",
      Cstatus: "VIEW MARKS",
    },
  ];
  return (
    <div className="mx-20 border-y-4 p-4 shadow-xl">
      <h1 className="text-center underline text-xl">My Courses</h1>
      <div className="mb-6">
        <div className="grid grid-cols-[180px_20px_1fr]">
          <span>ERP ID</span>
          <span>:</span>
          <span className="text-sm">1000019238</span>
        </div>
        <div className="grid grid-cols-[180px_20px_1fr]">
          <span>Student Name</span>
          <span>:</span>
          <span className="text-sm">Rajababu Patel</span>
        </div>
        <div className="grid grid-cols-[180px_20px_1fr]">
          <span>Program Name</span>
          <span>:</span>
          <span className="text-sm">
            Batchelor of Technology in Computer Science and Engineering
          </span>
        </div>
        <div className="grid grid-cols-[180px_20px_1fr]">
          <span>Specialization</span>
          <span>:</span>
          <span className="text-sm">Data Science and Analytics</span>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="search..."
          className="border border-slate-500 rounded-lg text-center"
        />
      </div>

      <div className="overflow-x-auto border border-slate-300 rounded-lg shadow-sm">
        <table className="w-full table-auto border-collapse text-left text-xs">
          <thead>
            <tr className="bg-sky-100 border-b border-slate-200 text-center font-bold text-slate-700">
              <th className="border-r border-slate-300 p-2">S.No</th>
              <th className="border-r border-slate-300">Academic Year</th>
              <th className="border-r border-slate-300">Academic Session</th>
              <th className="border-r border-slate-300">Semester</th>
              <th className="border-r border-slate-300">Course Code</th>
              <th className="border-r border-slate-300">Course Name</th>
              <th className="border-r border-slate-300">Bucket Name</th>
              <th className="border-r border-slate-300">Course Credits</th>
              <th className="border-r border-slate-300">Course Co-ordiantor</th>
              <th className="border-r border-slate-300">Register Date</th>
              <th className="border-r border-slate-300">Assesment Scheme</th>
              <th className="border-r border-slate-300">Course Status</th>
              <th>Course Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-300 text-slate-700">
            {CourseData.map((course) => (
              <tr key={CourseData.sno} className="text-center">
                <td className="border-r border-slate-300 p-2">{course.sno}</td>
                <td className="border-r border-slate-300">{course.Year}</td>
                <td className="border-r border-slate-300">{course.session}</td>
                <td className="border-r border-slate-300">{course.sem}</td>
                <td className="border-r border-slate-300">{course.code}</td>
                <td className="border-r border-slate-300 text-left">
                  {course.Name}
                </td>
                <td className="border-r border-slate-300 text-left">
                  {course.bucket}
                </td>
                <td className="border-r border-slate-300">{course.credits}</td>
                <td className="border-r border-slate-300">
                  {course.coordinator}
                </td>
                <td className="border-r border-slate-300">{course.date}</td>
                <td className="border-r border-slate-300">
                  <a
                    href="#"
                    className="text-blue-500 font-bold underline"
                  >
                    {course.scheme}
                  </a>
                </td>
                <td className="border-r border-slate-300">{course.status}</td>
                <td className="">
                  <a
                    href="#"
                    className="text-blue-500 font-bold underline"
                  >
                    {course.Cstatus}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default MyCourse;
