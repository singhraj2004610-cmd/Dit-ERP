import { useState, useEffect } from "react";

function DropDown4({ onSelectPage, isOpen, onToggle, searchQuery = "" }) {
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  const items = [
    { label: "Online Payments", page: "opayments" },
    { label: "Fee Ledger", page: "fledger" },
    { label: "Fee Structure", page: "fstructure" },
    { label: "Receipt", page: "receipt" },
    { label: "Invoice", page: "invoic" },
  ];

  useEffect(() => {
    if (!isOpen) {
      setIsActivitiesOpen(false);
    }
  }, [isOpen]);

  const query = searchQuery.trim().toLowerCase();
  const isSearching = query.length > 0;

  const filteredItems = isSearching
    ? items.filter(
        (item) =>
          item.label.toLowerCase().includes(query) ||
          "fees".includes(query) ||
          "my fees".includes(query)
      )
    : items;

  if (isSearching && filteredItems.length === 0) return null;

  const showParent = isSearching ? true : isOpen;
  const showChild = isSearching ? true : isActivitiesOpen;

  return (
    <div className="w-62 bg-slate-800 shadow-lg p-2 border">
      <button
        onClick={onToggle}
        className="hover:bg-slate-600 text-white px-2 rounded-md w-full text-left"
      >
        Fees
      </button>

      {showParent && (
        <div className="mt-2 bg-slate-800 rounded-md shadow-lg">
          <div className="p-2 rounded-md border border-blue-400 text-sm">
            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className="text-white px-3 py-2 rounded-md hover:bg-slate-600 text-left w-full"
            >
              My Fees
            </button>

            {showChild && (
              <div className="bg-slate-700 rounded-md">
                {filteredItems.map((item) => (
                  <div
                    key={item.page}
                    className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400"
                    onClick={() => onSelectPage(item.page)}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown4;

