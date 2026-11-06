import React from "react";

function PerformanceIndices() {
  return (
    <div className="bg-amber-50 p-5 rounded-2xl border-2 border-red-500 font-sans">
      <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
        <nav className="flex justify-between items-center bg-blue-900 text-white p-2">
          <div className="flex items-center gap-2">
            <p className="bg-blue-800 p-2 rounded-lg text-lg">🎓</p>
            <p className="font-bold text-sm tracking-wide uppercase">
              STUDENT PERFORMANCE <span className="font-normal">INDICES</span>
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <p className="bg-blue-800 px-3 py-1.5 rounded-xl font-mono">
              🗓️ NOV 06, 2026 at 11:11:11 AM
            </p>
            <div className="bg-blue-950 rounded-lg border-1">
            <button className="hover:bg-blue-800 px-3 py-1.5 rounded transition font-bold ">
              EXCEL
            </button>
            |
            <button className="hover:bg-blue-800 px-3 py-1.5 rounded transition font-bold ">
              PDF
            </button>
            </div>
            <button className="hover:bg-blue-800 px-3 py-1.5 rounded transition font-bold bg-blue-950">
              REFRESH
            </button>
          </div>
        </nav>

        <div className="p-4 flex gap-4 items-stretch">
          <div className="border border-gray-200 rounded-lg p-5 w-[360px] bg-white shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-center font-bold text-lg text-slate-800 tracking-wide mb-3 uppercase">
                Rajababu Patel
              </h3>
              <hr className="border-gray-100 mb-3" />

              <div className="flex gap-3 items-start mb-3">
                <img
                  src="photoes"
                  alt="my photo"
                  className="w-16 h-20 object-cover rounded border border-gray-100"
                />
                <div className="flex-1 grid grid-cols-2 gap-x-2 gap-y-1">
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase">
                      ERP ID
                    </p>
                    <p className="text-xs font-bold text-slate-700">
                      1000019238
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase">
                      ROLL NO
                    </p>
                    <p className="text-xs font-bold text-slate-700">
                      220102805
                    </p>
                  </div>
                  <div className="col-span-2 mt-2">
                    <div className="inline-flex items-center gap-1 bg-green-50 border border-green-100 rounded px-2 py-0.5 text-[9px] font-bold text-green-700">
                      <span className="w-1 h-1 rounded-full bg-green-500"></span>
                      CATEGORY : NORMAL
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <hr className="border-gray-100 my-3" />
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-1 bg-green-50 border border-green-100 rounded px-4 py-1 text-[10px] font-bold text-green-700">
                  <span className="w-1 h-1 rounded-full bg-green-500"></span>
                  STATUS : GRADUATED
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white border border-gray-200 rounded-lg grid grid-rows-2 shadow-sm overflow-hidden">
            {/* Top Row: Info Headers */}
            <div className="grid grid-cols-4 border-b border-gray-200 divide-x divide-gray-200 p-3 bg-gray-50/50">
              <div className="px-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  PROGRAM
                </p>
                <p className="text-xs font-black text-slate-800 mt-1">BTCSE</p>
              </div>
              <div className="px-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  SPECIALIZATION
                </p>
                <p className="text-xs font-bold text-slate-800 mt-1">
                  Data Science and Analytics
                </p>
              </div>
              <div className="px-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  TAGGING YEAR & SESSION
                </p>
                <p className="text-xs font-bold text-slate-800 mt-1">
                  2022 | ODD Session
                </p>
              </div>
              <div className="px-2 flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    SEMESTER/TRIMESTER
                  </p>
                </div>
                <div className="items-end gap-1 font-bold text-blue-900 text-sm">
                  <span>🎓</span>
                  <span>8</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 divide-x divide-gray-200 bg-white">
              <div className="flex flex-col justify-center items-center p-3">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider text-center">
                  CGPA TILL THE DATE
                </p>
                <p className="text-2xl font-bold text-slate-800 mt-1">7.43</p>
              </div>
              <div className="flex flex-col justify-center items-center p-3">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider text-center">
                  EARNED CREDITS
                </p>
                <p className="text-2xl font-bold text-blue-600 mt-1">163</p>
              </div>
              <div className="flex flex-col justify-center items-center p-3">
                <p className="text-[9px] font-bold text-red-500 uppercase tracking-wider text-center">
                  *PENDING CREDITS
                </p>
                <p className="text-2xl font-bold text-slate-800 mt-1">-3</p>
              </div>
              <div className="flex flex-col justify-center items-center p-3">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider text-center">
                  QUALIFYING
                </p>
                <p className="text-2xl font-bold text-slate-800 mt-1">70.75%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 m-4 rounded-lg">
          <p>
            <span className="text-red-700 text-sm">* CREDIT INFO : </span><span className="text-xs">Represents the shortfall between the total minimum
            credits required for graduation in a specific program and the
            credits successfully earned by the student.</span>
            </p>
          <p>
            <span className="text-red-700 text-sm">* NOTE : </span><span className="text-xs">In addition to
            meeting the overall credit threshold, students must fulfill
            bucket-wise (category-specific) credit requirements to qualify for
            graduation.</span></p>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default PerformanceIndices;
