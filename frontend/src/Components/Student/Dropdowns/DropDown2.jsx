import { useState } from "react";

function DropDown2({ onSelectPage, isOpen, onToggle, searchQuery = "" }) {
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  const items = [
    { label: "Grade Sheet", page: "gradeSheet" },
  ];

  const query = searchQuery.trim().toLowerCase();
  const isSearching = query.length > 0;

  const filteredItems = isSearching
    ? items.filter(
        (item) =>
          item.label.toLowerCase().includes(query) ||
          "academic documents".includes(query) ||
          "generate grade sheet".includes(query)
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
        className="hover:bg-slate-600 text-white px-2 rounded-md w-full text-left"
      >
        Academic Documents
      </button>

      {showParent && (
        <div className="mt-2 bg-slate-800 rounded-md shadow-lg border border-blue-400">
          <div className="p-2 text-sm">
            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className="text-white px-2 py-2 rounded-md hover:bg-slate-600 text-left w-full"
            >
              Generate Grade Sheet
            </button>

            {showChild && (
              <div className="bg-slate-700 rounded-md">
                {filteredItems.map((item) => (
                  <button
                    key={item.page}
                    className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full text-left border rounded-md border-blue-400"
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

export default DropDown2;
