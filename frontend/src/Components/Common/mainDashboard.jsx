import { useState } from "react";
import logo from "../../assets/Ditlogo.png";

// Shared shell used by every role (student, department, ...).
// Props:
//   user          -> { name, email, id } shown in the top bar
//   onLogout      -> called by the Logout button
//   pageLabels    -> { pageKey: "Tab title" } (must include `dashboard`)
//   renderSidebar -> ({ onSelectPage, openDropdown, onToggle, searchQuery }) => JSX
//   renderPage    -> (activePage, onSelectPage) => JSX
function TopHeader({ user, onLogout, pageLabels, renderSidebar, renderPage }) {
  const [activePage, setActivePage] = useState("dashboard");

  const [openedPages, setOpenedPages] = useState(["dashboard"]);

  // Tracks which dropdown is currently open (1 to 5, or null if all closed)
  const [openDropdown, setOpenDropdown] = useState(null);

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

  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(Number((prev + 0.1).toFixed(1)), 1.5)); // Max 150%
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(Number((prev - 0.1).toFixed(1)), 0.7)); // Min 70%
  };
  const handleToggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };
  const [searchQuery, setSearchQuery] = useState("");

  const handleReset = () => {
    setActivePage("dashboard");
    setOpenedPages(["dashboard"]);
    setZoomLevel(1);
    setOpenDropdown(null);
    setSearchQuery("");
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
        <h1 className="text-xl font-extrabold text-white">
          Welcome <span className="text-yellow-500">{user.email} </span>{" "}
          {user.name} ({user.id}){" "}
        </h1>
        <div className="flex gap-2 items-center self-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold  px-4 rounded h-8 text-center"
            onClick={handleZoomOut}
          >
            -
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 rounded h-8 text-center"
            onClick={handleZoomIn}
          >
            +
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded h-8 text-center"
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search menu here..."
                className="h-8 bg-white w-full text-black p-2 placeholder:text-gray-400 placeholder:text-xs placeholder:p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              {renderSidebar({
                onSelectPage: handleSelectPage,
                openDropdown,
                onToggle: handleToggleDropdown,
                searchQuery,
              })}
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
              ? "bg-white text-black-800 border-t-2 border-blue-600"
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
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto p-6 ">
            <div style={{ zoom: zoomLevel }}>
              {renderPage(activePage, handleSelectPage)}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default TopHeader;
