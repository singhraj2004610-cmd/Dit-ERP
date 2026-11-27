import React from "react";

export default function ViewMarks({ course, onClose }) {
  // Don't render anything until a course is clicked
  if (!course) return null;

  const Marksdata = [
    { cn: "Continuous Lab Assessments", cm: 10, w: 10, obm: 8, wm: 8 },
    { cn: "MID TERM", cm: 10, w: 10, obm: 8, wm: 8 },
    { cn: "Mini Project", cm: 10, w: 10, obm: 8, wm: 8 },
    { cn: "Quiz", cm: 10, w: 10, obm: 8, wm: 8 },
    { cn: "End Term", cm: 10, w: 10, obm: 8, wm: 8 },
  ];

  const cutoffdata = [
    { fm: 75, tm: 100, gp: 10, g: "A+" },
    { fm: 65, tm: 74.99, gp: 9, g: "A" },
    { fm: 55, tm: 64.99, gp: 8, g: "B+" },
    { fm: 42, tm: 54.99, gp: 7, g: "B" },
    { fm: 36, tm: 41.99, gp: 6, g: "C+" },
    { fm: 33, tm: 35.99, gp: 5, g: "C" },
    { fm: 30, tm: 32.99, gp: 4, g: "D" },
    { fm: 0, tm: 29.99, gp: 0, g: "F" },
  ];

  // Dynamically sum Weightage Marks
  const totalObtained = Marksdata.reduce((sum, item) => sum + item.wm, 0);

  return (
    /* Dark Backdrop */
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      {/* Popup Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-xl border border-slate-200"
      >
        {/* Header with Course Info & Close Button */}
        <div className="flex items-center justify-between pb-1">
          <div>
            <p className="text-xs text-slate-500">
              <span className="text-red-500">Course:</span>
              {course.Name} ({course.code})
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg px-2.5 py-1 text-sm font-bold text-slate-500 hover:bg-slate-100 hover:text-slate-800"
          >
            ✕
          </button>
        </div>
        <div className="border p-2">
          {/* Marks Table */}
          <h2 className="text-lg font-bold text-slate-800 text-center">
            Assessment & Marks
          </h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200 ">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="px-4 py-2">Component Name</th>
                  <th className="px-4 py-2.5 text-center">Conducted Marks</th>
                  <th className="px-4 py-2.5 text-center">Weightage</th>
                  <th className="px-4 py-2.5 text-center">Obtained Marks</th>
                  <th className="px-4 py-2.5 text-center">Weightage Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {Marksdata.map((data) => (
                  <tr key={data.cn} className="hover:bg-slate-50">
                    <td className="px-4 py-2 font-medium text-slate-800">
                      {data.cn}
                    </td>
                    <td className="px-4 py-2.5 text-center">{data.cm}</td>
                    <td className="px-4 py-2.5 text-center text-red-500">
                      {data.w}
                    </td>
                    <td className="px-4 py-2.5 text-center font-medium">
                      {data.obm}
                    </td>
                    <td className="px-4 py-2.5 text-center text-red-500 font-semibold">
                      {data.wm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            <span className="text-red-800">Obtained Marks: </span>44 Out of 100
          </p>
          <h2 className="text-lg font-bold text-slate-800 text-center">
            Grade Cut-off Range
          </h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="px-4 py-2">From Marks</th>
                  <th className="px-4 py-2 text-center">To Marks</th>
                  <th className="px-4 py-2 text-center">Grade Pointse</th>
                  <th className="px-4 py-2 text-center">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {cutoffdata.map((cdata) => (
                  <tr key={cdata.fm} className="hover:bg-slate-50">
                    <td className="px-4 py-2 font-medium text-slate-800">
                      {cdata.fm}
                    </td>
                    <td className="px-4 py-2 text-center">{cdata.tm}</td>
                    <td className="px-4 py-2 text-center">{cdata.gp}</td>
                    <td
                      className={`border-r border-slate-300 font-semibold ${
                        cdata.g === "F" ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {cdata.g}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            <span className="text-red-800">Obtained Grade: </span>B
          </p>
        </div>
      </div>
    </div>
  );
}
