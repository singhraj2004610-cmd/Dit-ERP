import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  UserX,
  CheckCircle2,
  Users2,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const AttendanceData = [
  {
    sno: 1,
    coursename: "Physics",
    code: "PYF101",
    today: "present",
    classes: 60,
    present: 51,
  },
  {
    sno: 2,
    coursename: "Chemestry",
    code: "PYF102",
    today: "present",
    classes: 55,
    present: 40,
  },
  {
    sno: 3,
    coursename: "Math",
    code: "MAF101",
    today: "present",
    classes: 50,
    present: 30,
  },
  {
    sno: 4,
    coursename: "English",
    code: "MAF101",
    today: "present",
    classes: 50,
    present: 30,
  },
  {
    sno: 5,
    coursename: "C",
    code: "MAF101",
    today: "present",
    classes: 50,
    present: 30,
  },
  {
    sno: 6,
    coursename: "graphics",
    code: "MAF101",
    today: "present",
    classes: 50,
    present: 30,
  },
];

export default function Attendance() {
  const [selectedSem, setSelectedSem] = useState("Sem 1");

  const totalCourses = AttendanceData.length;
  const totalClasses = AttendanceData.reduce(
    (total, atten) => total + atten.classes,
    0,
  );
  const totalPresentClasses = AttendanceData.reduce(
    (total, atten) => total + atten.present,
    0,
  );

  const totalAbsentClasses = AttendanceData.reduce(
    (total, atten) => total + (atten.classes - atten.present),
    0,
  );

  const overallRate =
    totalClasses > 0
      ? ((totalPresentClasses / totalClasses) * 100).toFixed(1)
      : 0;

  const overallAttendanceData = [
    {
      name: "Present",
      value: totalPresentClasses,
      color: "#16a34a",
    },
    {
      name: "Absent",
      value: totalAbsentClasses,
      color: "#ea580c",
    },
  ];

  const kpiCards = [
    {
      label: "Total Courses",
      value: String(totalCourses).padStart(2, "0"),
      bg: "bg-indigo-950",
      icon: <BookOpen className="text-indigo-950" />,
    },
    {
      label: "Total Classes",
      value: totalClasses,
      bg: "bg-teal-600",
      icon: <Users2 className="text-teal-600" />,
    },
    {
      label: "Present Classes",
      value: totalPresentClasses,
      bg: "bg-green-400",
      icon: <Users2 className="text-teal-600" />,
    },
    {
      label: "Absent Classes",
      value: totalAbsentClasses,
      bg: "bg-orange-600",
      icon: <UserX className="text-orange-600" />,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Top 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {kpiCards.map((card, idx) => (
          <div
            key={idx}
            className={`${card.bg} text-white rounded-lg p-5 flex justify-between items-center shadow-sm`}
          >
            <div>
              <p className="text-sm opacity-90">{card.label}</p>
              <h2 className="text-2xl font-bold mt-1">{card.value}</h2>
            </div>
            <div className="bg-white p-3 rounded-lg">{card.icon}</div>
          </div>
        ))}
      </div>

      {/* Main 2-Section Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SECTION 1: Course-Wise Attendance (7 columns wide) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">
                Course-Wise Attendance
              </h3>
              <p className="text-xs text-gray-500">
                Present vs. Absent percentage by subject
              </p>
            </div>
            <select
              value={selectedSem}
              onChange={(e) => setSelectedSem(e.target.value)}
              className="border border-gray-200 rounded-md px-3 py-1.5 text-sm text-gray-700 bg-gray-50 focus:outline-none"
            >
              <option value="Sem 1">Semester 1</option>
              <option value="Sem 2">Semester 2</option>
              <option value="Sem 3">Semester 3</option>
            </select>
          </div>

          <div className="h-[250px] overflow-y-scroll overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead>
                <tr className="text-sm text-white">
                  <th
                    rowSpan={2}
                    className="sticky top-0 z-20 bg-slate-700 px-4 py-3"
                  >
                    SNO
                  </th>
                  <th
                    rowSpan={2}
                    className="sticky top-0 z-20 bg-slate-700 px-4 py-3"
                  >
                    Course Name
                  </th>
                  <th
                    rowSpan={2}
                    className="sticky top-0 z-20 bg-slate-700 px-4 py-3"
                  >
                    Code
                  </th>
                  <th
                    rowSpan={2}
                    className="sticky top-0 z-20 bg-slate-700 px-4 py-3"
                  >
                    Today
                  </th>

                  <th
                    colSpan={3}
                    className="sticky top-0 z-20 bg-slate-700 px-4 py-3 text-center"
                  >
                    Total
                  </th>

                  <th
                    rowSpan={2}
                    className="sticky top-0 z-20 bg-slate-700 px-4 py-3"
                  >
                    Percent
                  </th>
                </tr>

                <tr className="text-sm text-white">
                  <th className="sticky top-11 z-20 bg-slate-700 px-4 py-1">
                    Classes
                  </th>
                  <th className="sticky top-11 z-20 bg-slate-700 px-4 py-1 text-green-400">
                    Present
                  </th>
                  <th className="sticky top-11 z-20 bg-slate-700 px-4 py-1 text-red-400">
                    Absent
                  </th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {AttendanceData.map((atten) => {
                  const percent =
                    atten.classes > 0
                      ? ((atten.present / atten.classes) * 100).toFixed(1)
                      : 0;

                  return (
                    <tr key={atten.sno} className="hover:bg-slate-50">
                      <td className="border-b px-4 py-3">{atten.sno}</td>
                      <td className="border-b px-4 py-3 font-medium">
                        {atten.coursename}
                      </td>
                      <td className="border-b px-4 py-3">{atten.code}</td>
                      <td className="border-b px-4 py-3">{atten.today}</td>
                      <td className="border-b px-4 py-3">{atten.classes}</td>
                      <td className="border-b px-4 py-3">{atten.present}</td>
                      <td className="border-b px-4 py-3">
                        {atten.classes - atten.present}
                      </td>
                      <td
                        className={`border-b px-4 py-3 font-semibold ${
                          Number(percent) < 75
                            ? "text-red-600"
                            : "text-slate-800"
                        }`}
                      >
                        {percent}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 2: Overall Attendance (5 columns wide) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">
              Overall Attendance
            </h3>
            <p className="text-xs text-gray-500">
              College-wide attendance status distribution
            </p>
          </div>

          <div className="h-72 relative">
            {/* Center Label inside Donut */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-6">
              <span className="text-3xl font-bold text-gray-800">
                {overallRate}%
              </span>
              <span className="text-xs text-gray-500">Total Present</span>
            </div>

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={overallAttendanceData}
                  innerRadius={70}
                  outerRadius={105}
                  dataKey="value"
                  paddingAngle={3}
                >
                  {overallAttendanceData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [
                    `${((Number(value) / totalClasses) * 100).toFixed(1)}%`,
                    name,
                  ]}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
