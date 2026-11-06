import photo from "/Users/rajababu/Documents/internship tasks/Enventory management/EnvManagement/src/assets/react.svg";
function ADashboard() {
  return (
    <div>
      <h1 className="text-center text-purple-900 mb-10">ALUMNI DASHBOARD</h1>
      <div className="grid grid-rows-2 bg-blue-100 gap-6 rounded-lg p-6">
        {/* up grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="grid grid-rows-3 ">
            <div className="grid grid-cols-2 gap-2 h-17">
              <div className="grid grid-cols-2">
                <p className="bg-red-800 text-white p-2 text-xs">
                  Current{" "}
                  <p>
                    <span className="text-base">Outstanding </span>Balance
                  </p>
                </p>
                <p className="bg-white p-6">₹ 0</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="bg-red-800 text-white p-2 text-xs">
                  Total{" "}
                  <p>
                    <span className="text-base">Credits </span>Earned
                  </p>
                </p>
                <p className="bg-white p-6">⭐️163</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 h-17">
              <div className="grid grid-cols-2">
                <p className="bg-red-800 text-white p-2 text-xs">
                  Total{" "}
                  <p>
                    <span className="text-base">Credits </span>Pending
                  </p>
                </p>
                <p className="bg-white p-6">⭐️0</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="bg-red-800 text-white p-2 text-xs">
                  Current <p className="text-base">CGPA</p>
                </p>
                <p className="bg-white p-6">🎯7.43</p>
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <p>Address</p>
              <p className="bg-blue-50 inline-block px-3 py-2">
                BIRGUNJ-22, DISTRICT-PARSA, NA, NA, NA country NEPAL
              </p>
            </div>
          </div>

          <div className="bg-white flex flex-col p-4 gap-6 rounded-lg">
            <div className="flex flex-row space-x-2">
            <img
              className="h-24 w-24 rounded-full object-cover"
              src={photo}
              alt="Student Profile"
            />
            {/* Personal Information */}
            <div className="flex flex-col items-start text-left space-y-2">
              <p className="text-xl font-bold">Rajababu Patel</p>
              <p className="text-sm">S/O-</p>
              <p className="text-sm">+977-9806817945</p>
              <p className="text-sm">1000019238@Dit.Edu.In</p>
              <p className="text-sm">
                Bachelor of Technology in Computer Science and Engineering
              </p>
            </div>
            </div>

            {/* Academic Information */}
            <div className="flex flex-wrap justify-around gap-3 text-xs border-t pt-4">
              <p>ERP ID : 1000019238</p>
              <p>Roll No : 220102805</p>
              <p>Intake Year : 2022</p>
              <p>Admission Category : SAARC</p>
            </div>
          </div>
        </div>

        {/* down grid */}
        <div className="grid grid-cols-2 gap-6 h-50">
          <div className="bg-white flex flex-col items-center p-10 gap-6 rounded-lg">
            <p className="text-center text-xs">🎓 Degree Graduated On</p>
            <p className="bg-blue-50 inline-block px-3 py-2">
              Batchelor of Technology in Computer Science and Engineering / Data
              Science and Analytics
            </p>
          </div>
          <div className="bg-white flex flex-col items-center p-3 p-10 gap-6 rounded-lg">
            <p className="text-center text-xs">☀️ Degree Awarded On</p>
            <p className="bg-blue-50 inline-block px-3 py-2">
              Degree will be awarded during Convocation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ADashboard;
