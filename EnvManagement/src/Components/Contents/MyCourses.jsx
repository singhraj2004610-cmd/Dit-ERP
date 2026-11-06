function MyCourse() {
  // Sample array representing your course registry matrix
  const courseData = [
    {
      sNo: 1,
      year: "2022-2023",
      session: "ODD",
      sem: 1,
      code: "CHF101",
      name: "Engineering Chemistry",
      bucket: "Core Sciences",
      credits: 5,
      coordinator: "",
      regDate: "9/26/2022 12:00:00 AM",
      status: "Completed",
    },
    {
      sNo: 2,
      year: "2022-2023",
      session: "ODD",
      sem: 1,
      code: "CSF101",
      name: "Programming for Problem Solving",
      bucket: "Engineering Sciences",
      credits: 4,
      coordinator: "",
      regDate: "9/26/2022 12:00:00 AM",
      status: "Completed",
    },
    {
      sNo: 3,
      year: "2022-2023",
      session: "ODD",
      sem: 1,
      code: "LAF101",
      name: "Professional Communication",
      bucket: "Language and Literature",
      credits: 3,
      coordinator: "",
      regDate: "9/26/2022 12:00:00 AM",
      status: "Completed",
    },
    {
      sNo: 4,
      year: "2022-2023",
      session: "ODD",
      sem: 1,
      code: "MAF101",
      name: "Engineering Mathematics I",
      bucket: "Core Maths",
      credits: 4,
      coordinator: "",
      regDate: "9/26/2022 12:00:00 AM",
      status: "Failed",
    },
    {
      sNo: 5,
      year: "2022-2023",
      session: "ODD",
      sem: 1,
      code: "MEF102",
      name: "Engineering Graphics",
      bucket: "Engineering Sciences",
      credits: 4,
      coordinator: "",
      regDate: "9/26/2022 12:00:00 AM",
      status: "Completed",
    },
    {
      sNo: 6,
      year: "2022-2023",
      session: "EVEN",
      sem: 2,
      code: "CSF102",
      name: "Data Structures",
      bucket: "Engineering Sciences",
      credits: 4,
      coordinator: "",
      regDate: "3/2/2023 12:00:00 AM",
      status: "Completed",
    },
    {
      sNo: 7,
      year: "2022-2023",
      session: "EVEN",
      sem: 2,
      code: "EEF143",
      name: "Electrical and Electronics Engineering Practice",
      bucket: "Engineering Sciences",
      credits: 4,
      coordinator: "",
      regDate: "3/2/2023 12:00:00 AM",
      status: "Completed",
    },
    {
      sNo: 8,
      year: "2022-2023",
      session: "EVEN",
      sem: 2,
      code: "LAF182",
      name: "Indian English Literature",
      bucket: "Language and Literature",
      credits: 3,
      coordinator: "",
      regDate: "3/2/2023 12:00:00 AM",
      status: "Completed",
    },
    {
      sNo: 9,
      year: "2022-2023",
      session: "EVEN",
      sem: 2,
      code: "MAF102",
      name: "Engineering Mathematics II",
      bucket: "Core Maths",
      credits: 4,
      coordinator: "",
      regDate: "3/2/2023 12:00:00 AM",
      status: "Completed",
    },
    {
      sNo: 10,
      year: "2022-2023",
      session: "EVEN",
      sem: 2,
      code: "PYF105",
      name: "Engineering Physics",
      bucket: "Core Sciences",
      credits: 5,
      coordinator: "",
      regDate: "3/2/2023 12:00:00 AM",
      status: "Failed",
    },
    {
      sNo: 11,
      year: "2022-2023",
      session: "SUMMER",
      sem: 2,
      code: "MAF101",
      name: "Engineering Mathematics I",
      bucket: "Core Maths",
      credits: 4,
      coordinator: "",
      regDate: "6/22/2023 12:00:00 AM",
      status: "Failed",
    },
    {
      sNo: 12,
      year: "2022-2023",
      session: "SUMMER",
      sem: 2,
      code: "PYF105",
      name: "Engineering Physics",
      bucket: "Core Sciences",
      credits: 5,
      coordinator: "",
      regDate: "6/22/2023 12:00:00 AM",
      status: "Completed",
    },
    {
      sNo: 13,
      year: "2023-2024",
      session: "ODD",
      sem: 3,
      code: "CHF201",
      name: "Environmental Science",
      bucket: "Ability Enhancement",
      credits: 2,
      coordinator: "",
      regDate: "8/4/2023 12:00:00 AM",
      status: "Completed",
    },
    {
      sNo: 14,
      year: "2023-2024",
      session: "ODD",
      sem: 3,
      code: "CSF201",
      name: "Computer Organization and Architecture",
      bucket: "Discipline Core",
      credits: 4,
      coordinator: "",
      regDate: "8/4/2023 12:00:00 AM",
      status: "Completed",
    },
    {
      sNo: 15,
      year: "2023-2024",
      session: "ODD",
      sem: 3,
      code: "CSF202",
      name: "Discrete Mathematics",
      bucket: "Discipline Core",
      credits: 4,
      coordinator: "",
      regDate: "8/4/2023 12:00:00 AM",
      status: "Completed",
    },
    {
      sNo: 16,
      year: "2023-2024",
      session: "ODD",
      sem: 3,
      code: "CSF203",
      name: "Introduction to Java Programming",
      bucket: "Discipline Core",
      credits: 4,
      coordinator: "",
      regDate: "8/4/2023 12:00:00 AM",
      status: "Completed",
    },
  ];

  return (
    <div className="m-20 p-5 mx-50 bg-white font-sans text-slate-800 antialiased min-h-screen border-1">
      {/* Title Header */}
      {/* Title Header (Line Removed) */}
      <h1 className="text-center font-bold text-3xl tracking-wide underline underline-offset-4 mb-6 text-slate-900">
        My Courses
      </h1>

      {/* Identity Profile Section */}
      <div className="mb-8 grid grid-cols-1 gap-y-1.5 text-sm max-w-2xl bg-slate-50 p-4 rounded-lg border border-slate-100">
        <div className="grid grid-cols-[180px_20px_1fr]">
          <span className="font-bold text-slate-600">ERP ID</span>
          <span>:</span>
          <span className="font-mono text-slate-900">1000019238</span>
        </div>
        <div className="grid grid-cols-[180px_20px_1fr]">
          <span className="font-bold text-slate-600">Student Name</span>
          <span>:</span>
          <span className="font-semibold text-slate-900 uppercase">
            RAJABABU PATEL
          </span>
        </div>
        <div className="grid grid-cols-[180px_20px_1fr]">
          <span className="font-bold text-slate-600">Program Name</span>
          <span>:</span>
          <span className="text-slate-900">
            Bachelor of Technology in Computer Science and Engineering
          </span>
        </div>
        <div className="grid grid-cols-[180px_20px_1fr]">
          <span className="font-bold text-slate-600">Specialization</span>
          <span>:</span>
          <span className="text-slate-900">Data Science and Analytics</span>
        </div>
      </div>

      {/* Search Input Bar Element */}
      <div className="flex justify-end mb-3">
        <input
          type="text"
          placeholder="Search..."
          className="border border-slate-300 rounded px-3 py-1 text-xs w-48 shadow-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Responsive Horizontal Scroll Container */}
      <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
        <table className="w-full table-auto border-collapse text-left text-xs">
          {/* Header Row */}
          <thead>
            <tr className="bg-sky-100 border-b border-slate-200 text-center font-bold text-slate-700">
              <th className="p-2 border-r border-slate-200 w-12">S.No</th>
              <th className="p-2 border-r border-slate-200">Academic Year</th>
              <th className="p-2 border-r border-slate-200">
                Academic Session
              </th>
              <th className="p-2 border-r border-slate-200 w-16">Semester</th>
              <th className="p-2 border-r border-slate-200">Course Code</th>
              <th className="p-2 border-r border-slate-200 text-left min-w-[200px]">
                Course Name
              </th>
              <th className="p-2 border-r border-slate-200 text-left">
                Bucket Name
              </th>
              <th className="p-2 border-r border-slate-200 w-16">
                Course Credits
              </th>
              <th className="p-2 border-r border-slate-200">
                Course Co-ordinator
              </th>
              <th className="p-2 border-r border-slate-200">Registered Date</th>
              <th className="p-2 border-r border-slate-200">
                Assessment Scheme
              </th>
              <th className="p-2 border-r border-slate-200">Course Status</th>
              <th className="p-2">Course Status</th>
            </tr>
          </thead>

          {/* Table Data Matrix Rows */}
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {courseData.map((course) => (
              <tr
                key={course.sNo}
                className="hover:bg-slate-50 transition-colors text-center"
              >
                <td className="p-2 border-r border-slate-200 font-medium">
                  {course.sNo}
                </td>
                <td className="p-2 border-r border-slate-200">{course.year}</td>
                <td className="p-2 border-r border-slate-200 font-semibold">
                  {course.session}
                </td>
                <td className="p-2 border-r border-slate-200">{course.sem}</td>
                <td className="p-2 border-r border-slate-200 font-mono text-slate-900">
                  {course.code}
                </td>
                <td className="p-2 border-r border-slate-200 text-left font-medium">
                  {course.name}
                </td>
                <td className="p-2 border-r border-slate-200 text-left text-slate-500">
                  {course.bucket}
                </td>
                <td className="p-2 border-r border-slate-200 font-semibold">
                  {course.credits}
                </td>
                <td className="p-2 border-r border-slate-200">
                  {course.coordinator}
                </td>
                <td className="p-2 border-r border-slate-200 font-mono text-[10px] text-slate-500">
                  {course.regDate}
                </td>
                <td className="p-2 border-r border-slate-200">
                  <button className="text-blue-700 hover:text-blue-900 font-bold underline uppercase tracking-tight text-[10px]">
                    View Scheme
                  </button>
                </td>
                <td className="p-2 border-r border-slate-200">
                  <span
                    className={`font-semibold ${course.status === "Failed" ? "text-red-600" : "text-slate-700"}`}
                  >
                    {course.status}
                  </span>
                </td>
                <td className="p-2">
                  <button className="text-blue-700 hover:text-blue-900 font-bold underline uppercase tracking-tight text-[10px]">
                    View Marks
                  </button>
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
