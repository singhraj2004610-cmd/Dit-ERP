import TopHeader from "../Common/mainDashboard";
import DeptDropDown from "./Dropdowns/DeptDropDown";
import FacultyDashboard from "./FacultyDashboard";
import MyClasses from "./pages/MyClasses";
import Timetable from "./pages/Timetable";
import MarkAttendance from "./pages/MarkAttendance";
import Defaulters from "./pages/Defaulters";
import EnterMarks from "./pages/EnterMarks";
import StudentList from "./pages/StudentList";
import Leave from "./pages/Leave";
import PostNotice from "./pages/PostNotice";

const pageLabels = {
  dashboard: "Faculty Dashboard",
  dMyCourses: "My Courses",
  timetable: "Timetable",
  markAttendance: "Mark Attendance",
  defaulters: "Defaulter List",
  enterMarks: "Enter Marks",
  studentList: "Student List",
  leave: "Apply Leave",
  notices: "Notices",
};

const pages = {
  dMyCourses: MyClasses,
  timetable: Timetable,
  markAttendance: MarkAttendance,
  defaulters: Defaulters,
  enterMarks: EnterMarks,
  studentList: StudentList,
  leave: Leave,
  notices: PostNotice,
};

// One entry per sidebar dropdown
const menus = [
  {
    title: "Academic",
    subtitle: "Teaching",
    items: [
      { label: "My Courses", page: "dMyCourses" },
      { label: "Timetable", page: "timetable" },
    ],
  },
  {
    title: "Attendance",
    subtitle: "Attendance Management",
    items: [
      { label: "Mark Attendance", page: "markAttendance" },
      { label: "Defaulter List", page: "defaulters" },
    ],
  },
  {
    title: "Evaluation",
    subtitle: "Marks & Results",
    items: [{ label: "Enter Marks", page: "enterMarks" }],
  },
  {
    title: "Students",
    subtitle: "Student Information",
    items: [{ label: "Student List", page: "studentList" }],
  },
  {
    title: "Faculty Services",
    subtitle: "Leave & Notices",
    items: [
      { label: "Apply Leave", page: "leave" },
      { label: "Notices", page: "notices" },
    ],
  },
];

function DDashboard({ user, onLogout }) {
  return (
    <TopHeader
      user={user}
      onLogout={onLogout}
      pageLabels={pageLabels}
      renderSidebar={({ onSelectPage, openDropdown, onToggle, searchQuery }) => (
        <>
          {menus.map((m, i) => (
            <DeptDropDown
              key={m.title}
              title={m.title}
              subtitle={m.subtitle}
              items={m.items}
              onSelectPage={onSelectPage}
              isOpen={openDropdown === i + 1}
              onToggle={() => onToggle(i + 1)}
              searchQuery={searchQuery}
            />
          ))}
        </>
      )}
      renderPage={(activePage, onSelectPage) => {
        if (activePage === "dashboard") return <FacultyDashboard onSelectPage={onSelectPage} />;
        const Page = pages[activePage];
        return Page ? <Page /> : null;
      }}
    />
  );
}

export default DDashboard;
