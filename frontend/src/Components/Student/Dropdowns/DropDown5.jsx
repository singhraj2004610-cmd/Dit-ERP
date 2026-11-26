import { useState } from "react";

function DropDown5({ onSelectPage, isOpen, onToggle, searchQuery = "" }) {
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  const items = [
    { label: "Career Choice", page: "career" },
    { label: "Placement Registration", page: "placement" },
    { label: "Profile Update", page: "profile" },
    { label: "All Job Opening", page: "all" },
    { label: "Apply for Drive", page: "apply" },
    { label: "Offer Report", page: "offer" },
  ];

  const query = searchQuery.trim().toLowerCase();
  const isSearching = query.length > 0;

  const filteredItems = isSearching
    ? items.filter(
        (item) =>
          item.label.toLowerCase().includes(query) ||
          "placement".includes(query) ||
          "process".includes(query)
      )
    : items;

  if (isSearching && filteredItems.length === 0) return null;

  const showParent = isSearching ? true : isOpen;
  const showChild = isSearching ? true : isActivitiesOpen;

  return (
    <div className="w-62 bg-slate-800 shadow-lg p-2 border">
      <button
        onClick={() => {
          setIsActivitiesOpen(false);
          onToggle();
        }}
        className="text-white px-2 w-full rounded-md hover:bg-slate-600 text-left"
      >
        Placement
      </button>

      {showParent && (
        <div className="mt-2 bg-slate-800 rounded-md shadow-lg">
          <div className="p-2 rounded-md border border-blue-400 text-sm">
            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className="text-white px-3 py-2 rounded-md hover:bg-slate-600 text-left w-full"
            >
              Process
            </button>

            {showChild && (
              <div className="bg-slate-700">
                {filteredItems.map((item) => (
                  <button
                    key={item.page}
                    className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full border rounded-md border-blue-400 text-left"
                    onClick={() => onSelectPage(item.page)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown5;
