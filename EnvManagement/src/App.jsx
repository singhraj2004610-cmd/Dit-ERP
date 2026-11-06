import logo from "./assets/image.png";
import DropDown1 from "./Components/DropDown1.jsx";
import DropDown2 from "./Components/DropDown2.jsx";
import DropDown3 from "./Components/DropDown3.jsx";
import DropDown4 from "./Components/DropDown4.jsx";
import DropDown5 from "./Components/DropDown5.jsx";
import ADashboard from "./Components/Contents/AlumniDashboard.jsx";

function TopHeader() {
  return (
    <div>
      <div
        className="flex items-center justify-between p-4 bg-slate-700 border-b border-gray-300"
        style={{ position: "sticky", top: 0 }}
      >
        <img className="h-10 w-10" src={logo} alt="Logo" />
        <h1 className="text-1xl font-extrabold text-white">
          Welcome{" "}
          <span className="text-yellow-500">1000019238@Dit.Edu.In </span> RAJA
          BABU PATEL (1000019238){" "}
        </h1>
        <div className="flex gap-2">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            -
          </button>
          <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            +
          </button>
          <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Reset
          </button>
          <button className="hover:bg-red-700 text-white font-bold border border-red-700 py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </div>
      <div className="flex">
        <aside className="w-64 bg-slate-700 text-white p-5 h-screen">
          <nav className="flex flex-col gap-2">
            <div className="flex gap-2 justify-center items-center">
              <i className="1xl">🔍</i>
              <input
                type="text"
                placeholder="Search menu here..."
                className="h-10 bg-white text-white placeholder:text-gray-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <DropDown1 />

            <DropDown2 />

            <DropDown3 />

            <DropDown4 />

            <DropDown5 />
          </nav>
        </aside>

        <main className="flex-1 bg-white p-6 min-w-0">
          <ADashboard />
        </main>

      </div>
      
    </div>
  );
}
export default TopHeader;
