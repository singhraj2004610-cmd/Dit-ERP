import TopHeader from "../Common/mainDashboard";
import DropDown1 from "./Dropdowns/DropDown1.jsx";
import DropDown2 from "./Dropdowns/DropDown2.jsx";
import DropDown3 from "./Dropdowns/DropDown3.jsx";
import DropDown4 from "./Dropdowns/DropDown4.jsx";
import DropDown5 from "./Dropdowns/DropDown5.jsx";
import ADashboard from "./AlumniDashboard.jsx";
import PerformanceIndices from "./PerformanceIndices.jsx";
import Attendance from "./Attendance.jsx";
import MyCourses from "./MyCourses.jsx";
import GradeSheet from "./Gradesheet.jsx";
import GStatus from "./GraduationStatus.jsx";
import RegConvocation from "./RegistrationFC.jsx";
import Opayments from "./fees/OPayments.jsx";
import Flefger from "./fees/FLedger.jsx";
import Fstructure from "./fees/FStructure.jsx";
import Receipts from "./fees/receipts.jsx";
import Invoice from "./fees/invoice.jsx";
import CareerChoice from "./placement/careerChoice.jsx";
import PlacementReg from "./placement/placementReg.jsx";
import ProfileUpd from "./placement/profileUpd.jsx";
import AllJobs from "./placement/allJobs.jsx";
import ApplyDrive from "./placement/applyDrive.jsx";
import OfferRep from "./placement/offerRep.jsx";

const pageLabels = {
  dashboard: "Alumni Dashboard",
  performance: "Performance Indices",
  attendance: "Attendance",
  myCourses: "My Courses",
  gradeSheet: "Grade Sheet",
  graduationState: "Graduation Status",
  regconvocation: "Registration for Convocation",
  opayments: "Fee Payment",
  fledger: "Fee Ledger",
  fstructure: "Fee Structure",
  receipt: "Receipts",
  invoic: "Invoice",
  career: "Career Choice",
  placement: "Placement Registration",
  profile: "Profile Update",
  all: "All Job Opening",
  apply: "Apply for Drive",
  offer: "Offer Report",
};

const pages = {
  dashboard: ADashboard,
  performance: PerformanceIndices,
  attendance: Attendance,
  myCourses: MyCourses,
  gradeSheet: GradeSheet,
  graduationState: GStatus,
  regconvocation: RegConvocation,
  opayments: Opayments,
  fledger: Flefger,
  fstructure: Fstructure,
  receipt: Receipts,
  invoic: Invoice,
  career: CareerChoice,
  placement: PlacementReg,
  profile: ProfileUpd,
  all: AllJobs,
  apply: ApplyDrive,
  offer: OfferRep,
};

function StudentDashboard({ user, onLogout }) {
  return (
    <TopHeader
      user={user}
      onLogout={onLogout}
      pageLabels={pageLabels}
      renderSidebar={({ onSelectPage, openDropdown, onToggle, searchQuery }) => (
        <>
          {[DropDown1, DropDown2, DropDown3, DropDown4, DropDown5].map((DD, i) => (
            <DD
              key={i}
              onSelectPage={onSelectPage}
              isOpen={openDropdown === i + 1}
              onToggle={() => onToggle(i + 1)}
              searchQuery={searchQuery}
            />
          ))}
        </>
      )}
      renderPage={(activePage) => {
        const Page = pages[activePage];
        return Page ? <Page /> : null;
      }}
    />
  );
}

export default StudentDashboard;
