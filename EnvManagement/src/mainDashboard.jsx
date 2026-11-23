import { useState } from "react";
import logo from "./assets/Ditlogo.png";
import DropDown1 from "./Components/DropDown1.jsx";
import DropDown2 from "./Components/DropDown2.jsx";
import DropDown3 from "./Components/DropDown3.jsx";
import DropDown4 from "./Components/DropDown4.jsx";
import DropDown5 from "./Components/DropDown5.jsx";
import ADashboard from "./Components/Contents/AlumniDashboard.jsx";
import PerformanceIndices from "./Components/Contents/PerformanceIndices.jsx";
import MyCourses from "./Components/Contents/MyCourses.jsx";
import GradeSheet from "./Components/Contents/Gradesheet.jsx";
import GStatus from "./Components/Contents/GraduationStatus.jsx";
import RegConvocation from "./Components/Contents/RegistrationFC.jsx";
import Opayments from "./Components/Contents/fees/OPayments.jsx";
import Flefger from "./Components/Contents/fees/FLedger.jsx";
import Fstructure from "./Components/Contents/fees/FStructure.jsx";
import Receipts from "./Components/Contents/fees/receipts.jsx";
import Invoice from "./Components/Contents/fees/invoice.jsx";
import CareerChoice from "./Components/Contents/placement/careerChoice.jsx";
import PlacementReg from "./Components/Contents/placement/placementReg.jsx";
import ProfileUpd from "./Components/Contents/placement/profileUpd.jsx";
import AllJobs from "./Components/Contents/placement/allJobs.jsx";
import ApplyDrive from "./Components/Contents/placement/applyDrive.jsx";
import OfferRep from "./Components/Contents/placement/offerRep.jsx";

function TopHeader({ onLogout }) {
  const [activePage, setActivePage] = useState("dashboard");

  const [openedPages, setOpenedPages] = useState(["dashboard"]);

  const pageLabels = {
    dashboard: "Dashboard",
    performance: "Performance Indices",
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

  const handleSelectPage = (page) => {
    setActivePage(page);

    setOpenedPages((prev) => (prev.includes(page) ? prev : [...prev, page]));
  };

  const handleClosePage = (page) => {
    if (page === "dashboard") return;

    const remainingPages = openedPages.filter((p) => p !== page);

    setOpenedPages(remainingPages);

    if (activePage === page) {
      const closedIndex = openedPages.indexOf(page);
      const nextPage =
        remainingPages[Math.max(0, closedIndex - 1)] || "dashboard";

      setActivePage(nextPage);
    }
  };

  const handleReset = () => {
    setActivePage("dashboard");
    setOpenedPages(["dashboard"]);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div>
      <div className="flex items-center justify-between p-1 bg-slate-700 border-b border-gray-300 sticky top-0 z-50">
        <div className="flex">
          <div className="flex items-center self-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex items-center justify-center text-white text-2xl mr-2 bg-gray-400 rounded-sm h-9 w-9 hover:bg-gray-300 transition"
              title="Toggle Sidebar"
            >
              <span className="-translate-y-0.5 leading-none text-slate-700">
                ☰
              </span>
            </button>
          </div>
          <img className="h-10 w-17" src={logo} alt="Logo" />
          <p className="text-4xl italic font-bold tracking-wide text-white">
            <span className="italic font-serif lowercase">i</span>Nxt
          </p>
        </div>
        <h1 className="text-1xl font-extrabold text-white">
          Welcome{" "}
          <span className="text-yellow-500">1000019238@Dit.Edu.In </span>{" "}
          RAJABABU PATEL (1000019238){" "}
        </h1>
        <div className="flex gap-2 items-center self-center">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold  px-4 rounded h-8 text-center">
            -
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 rounded h-8 text-center">
            +
          </button>
          <button
            className="bg-blue-500 hover:bg-red-700 text-white font-bold px-4 rounded h-8 text-center"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            onClick={onLogout}
            className="hover:bg-red-700 text-white font-bold border border-red-700 px-4 rounded h-8 text-center"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex h-[calc(100vh-50px)] overflow-hidden">
        <aside
          className={`
    shrink-0 overflow-y-auto overflow-x-hidden
    bg-slate-700 text-white
    h-full
    transition-all duration-300 ease-in-out
    ${isSidebarOpen ? "w-[264px] p-2" : "w-0 p-0"}
  `}
        >
          <nav className="flex flex-col gap-2">
            <div className="flex gap-2 justify-center items-center">
              <i className="1xl">🔍</i>
              <input
                type="text"
                placeholder="Search menu here..."
                className="h-8 bg-white w-full text-white placeholder:text-gray-400 placeholder:text-xs placeholder:p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <DropDown1 onSelectPage={handleSelectPage} />

              <DropDown2 onSelectPage={handleSelectPage} />

              <DropDown3 onSelectPage={handleSelectPage} />

              <DropDown4 onSelectPage={handleSelectPage} />

              <DropDown5 onSelectPage={handleSelectPage} />
            </div>
          </nav>
        </aside>

        <main className="flex flex-col flex-1 bg-gray-100 min-w-0 min-h-0 overflow-hidden">
          {/* Opened Pages Tabs */}
          <div className="flex shrink-0 items-center gap-1 bg-slate-200 px-3 overflow-x-auto">
            {openedPages.map((page) => (
              <div
                key={page}
                onClick={() => setActivePage(page)}
                className={`flex items-center gap-3 px-4 py-2 rounded-t-lg cursor-pointer whitespace-nowrap text-sm font-semibold
          ${
            activePage === page
              ? "bg-white text-blue-800 border-t-2 border-blue-600"
              : "bg-slate-300 text-slate-700 hover:bg-slate-100"
          }`}
              >
                <span>{pageLabels[page] || page}</span>

                {page !== "dashboard" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClosePage(page);
                    }}
                    className="text-gray-500 hover:text-red-600 font-bold text-lg leading-none"
                    title="Close tab"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Main Page Content */}
         <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden bg-white p-6">
            {activePage === "dashboard" && <ADashboard />}

            {activePage === "performance" && <PerformanceIndices />}

            {activePage === "myCourses" && <MyCourses />}

            {activePage === "gradeSheet" && <GradeSheet />}

            {activePage === "graduationState" && <GStatus />}

            {activePage === "regconvocation" && <RegConvocation />}

            {activePage === "opayments" && <Opayments />}

            {activePage === "fledger" && <Flefger />}

            {activePage === "fstructure" && <Fstructure />}

            {activePage === "receipt" && <Receipts />}

            {activePage === "invoic" && <Invoice />}

            {activePage === "career" && <CareerChoice />}

            {activePage === "placement" && <PlacementReg />}

            {activePage === "profile" && <ProfileUpd />}

            {activePage === "all" && <AllJobs />}

            {activePage === "apply" && <ApplyDrive />}
            
            {activePage === "offer" && <OfferRep />}
          </div>
        </main>
      </div>
    </div>
  );
}
export default TopHeader;
