// Hardcoded department/faculty data (replace with API calls later)

export const faculty = {
  name: "Dr. Sample Faculty",
  designation: "Assistant Professor",
  department: "Computer Science and Engineering",
  phone: "+91-9000000000",
  email: "department@dit.edu.in",
  empId: "EMP1001",
  joined: 2019,
  qualification: "Ph.D. (Computer Science)",
};

export const courses = [
  { code: "CSF301", name: "Data Structures", section: "CSE-A", sem: 3, credits: 4 },
  { code: "CSF301", name: "Data Structures", section: "CSE-B", sem: 3, credits: 4 },
  { code: "CSF402", name: "Database Management Systems", section: "CSE-A", sem: 5, credits: 4 },
];

const names = [
  "Rajababu Patel", "Priya Singh", "Subash Yadav", "Sneha Gupta",
  "Nawal Patel", "Kavya Mishra", "Suraj Gupta", "Anjali Thakur",
  "Arbind Kanu", "Kush Patel", "Bicky Sah", "Chandan Sah",
];
const attendance = [92, 81, 68, 88, 74, 95, 59, 79, 85, 71, 90, 66];

// first 6 -> CSE-A, last 6 -> CSE-B
export const students = names.map((name, i) => ({
  roll: String(220102801 + i),
  name,
  section: i < 6 ? "CSE-A" : "CSE-B",
  attendance: attendance[i],
}));

export const todayClasses = [
  { time: "09:00 - 09:50", code: "CSF301", name: "Data Structures", section: "CSE-A", room: "A-101", marked: true },
  { time: "11:00 - 11:50", code: "CSF402", name: "Database Management Systems", section: "CSE-A", room: "B-204", marked: false },
  { time: "02:00 - 02:50", code: "CSF301", name: "Data Structures", section: "CSE-B", room: "A-103", marked: false },
];

export const weeklyTimetable = [
  { day: "Mon", slots: ["CSF301 (CSE-A)", "—", "CSF402 (CSE-A)", "—"] },
  { day: "Tue", slots: ["—", "CSF301 (CSE-B)", "—", "CSF402 (CSE-A)"] },
  { day: "Wed", slots: ["CSF301 (CSE-A)", "CSF402 (CSE-A)", "—", "CSF301 (CSE-B)"] },
  { day: "Thu", slots: ["—", "—", "CSF301 (CSE-B)", "—"] },
  { day: "Fri", slots: ["CSF402 (CSE-A)", "CSF301 (CSE-A)", "—", "—"] },
];
export const periods = ["09:00", "11:00", "02:00", "03:00"];

export const notices = [
  { title: "Mid-semester exam schedule released", date: "24 Nov 2026" },
  { title: "Faculty meeting on Friday, 3:30 PM", date: "23 Nov 2026" },
  { title: "Submit internal marks by 30 Nov", date: "20 Nov 2026" },
];
