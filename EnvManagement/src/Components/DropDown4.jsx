
import { useState } from "react";

function DropDown4({onSelectPage}) {
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  return (
    <div className="w-62 bg-slate-800 shadow-lg p-3 border">

      {/* Parent Dropdown */}
      <button
        onClick={() => setIsAcademicOpen(!isAcademicOpen)}
        className="hover:bg-slate-600 text-white px-2 rounded-md"
      >
        Fees
      </button>

      {isAcademicOpen && (
        <div className="mt-2 bg-slate-800 rounded-md shadow-lg">

          {/* Child Dropdown */}
          <div className="p-2 rounded-md border border-blue-400 text-sm">

            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className="text-white px-3 py-2 rounded-md hover:bg-slate-600 text-left"
            >
              My Fees
            </button>

            {/* Nested Dropdown */}
            {isActivitiesOpen && (
              <div className="bg-slate-700 rounded-md">

                <div className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400"
                onClick={() => onSelectPage("opayments")}
                >
                  Online Payments
                </div>

                 <div className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400"
                 onClick={() => onSelectPage("fledger")}
                 >
                  Fee Ledger
                </div>

                 <div className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400"
                 onClick={() => onSelectPage("fstructure")}
                 >
                  Fee Structure
                </div>

                 <div className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400"
                 onClick={() => onSelectPage("receipt")}
                 >
                  Receipt
                </div>

                 <div className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400"
                 onClick={() => onSelectPage("invoic")}
                 >
                  Invoice
                </div>

              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown4;
