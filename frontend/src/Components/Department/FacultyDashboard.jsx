import photo from "../../assets/react.svg";
import { faculty, students, todayClasses, notices } from "./data";

function StatCard({ top, big, small, icon, value }) {
  return (
    <div className="grid grid-cols-2">
      <p className="bg-red-800 text-white p-2 text-xs">
        {top}
        <span className="block">
          <span className="text-base">{big} </span>
          {small}
        </span>
      </p>
      <p className="bg-white p-4 text-center">
        <span className="text-3xl">{icon}</span> {value}
      </p>
    </div>
  );
}

function FacultyDashboard({ onSelectPage }) {
  const pendingAttendance = todayClasses.filter((c) => !c.marked).length;

  return (
    <div>
      <h1 className="text-center text-purple-900 mb-10 font-bold font-serif text-xl">
        FACULTY DASHBOARD
      </h1>

      <div className="grid grid-rows-2 bg-blue-100 gap-6 rounded-xl p-6 mx-15">
        {/* up grid */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6 h-17">
              <StatCard top="Classes" big="Today's" small="Classes" icon="📚" value={todayClasses.length} />
              <StatCard top="Total" big="Students" small="Assigned" icon="🎓" value={students.length} />
            </div>
            <div className="grid grid-cols-2 gap-6 h-17">
              <StatCard top="Attendance" big="Pending" small="Today" icon="📝" value={pendingAttendance} />
              <StatCard top="Marks" big="Entry" small="Pending" icon="📊" value={1} />
            </div>

            <div className="bg-white p-3 rounded-lg">
              <p>Department</p>
              <p className="bg-blue-50 inline-block px-3 py-2">{faculty.department}</p>
            </div>
          </div>

          <div className="bg-white flex flex-col p-4 gap-6 rounded-lg">
            <div className="flex flex-row space-x-2">
              <img className="h-24 w-24 rounded-full object-cover" src={photo} alt="Faculty Profile" />
              <div className="flex flex-col items-start text-left space-y-2">
                <p className="text-xl font-bold">{faculty.name}</p>
                <p className="text-sm">{faculty.designation}</p>
                <p className="text-sm">{faculty.phone}</p>
                <p className="text-sm">{faculty.email}</p>
                <p className="text-sm">{faculty.qualification}</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-around gap-3 text-xs border-t pt-4">
              <p>Employee ID : {faculty.empId}</p>
              <p>Joined : {faculty.joined}</p>
              <p>Dept : CSE</p>
            </div>
          </div>
        </div>

        {/* down grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white flex flex-col p-6 gap-4 rounded-lg">
            <p className="text-xs text-blue-900">
              <span className="text-3xl">🗓️</span> Today's Timetable
            </p>
            {todayClasses.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-blue-50 border border-gray-200 rounded-lg px-3 py-2 text-sm"
              >
                <div>
                  <p className="font-semibold">
                    {c.code} · {c.name}
                  </p>
                  <p className="text-xs text-gray-600">
                    {c.time} · {c.section} · Room {c.room}
                  </p>
                </div>
                {c.marked ? (
                  <span className="text-green-700 text-xs font-bold">Marked ✓</span>
                ) : (
                  <button
                    onClick={() => onSelectPage("markAttendance")}
                    className="bg-blue-950 hover:bg-blue-800 text-white text-xs px-3 py-1 rounded"
                  >
                    Mark Attendance
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white flex flex-col p-6 gap-4 rounded-lg">
            <p className="text-xs text-blue-900">
              <span className="text-3xl text-red-800">📢</span> Notices & Alerts
            </p>
            {notices.map((n, i) => (
              <div key={i} className="bg-blue-50 border border-gray-200 rounded-lg px-3 py-2 text-sm">
                <p>{n.title}</p>
                <p className="text-xs text-gray-500">{n.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyDashboard;
