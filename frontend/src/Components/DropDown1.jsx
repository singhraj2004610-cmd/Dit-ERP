import { useState, useEffect } from "react";

function DropDown1({ onSelectPage, isOpen, onToggle, searchQuery = "" }) {
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  const items = [
    { label: "Performance Indices", page: "performance" },
    { label: "My Courses", page: "myCourses" },
  ];

  useEffect(() => {
    if (!isOpen) {
      setIsActivitiesOpen(false);
    }
  }, [isOpen]);

  const query = searchQuery.trim().toLowerCase();
  const isSearching = query.length > 0;

  // Filter items that match the search text (or if user typed "academic")
  const filteredItems = isSearching
    ? items.filter(
        (item) =>
          item.label.toLowerCase().includes(query) ||
          "academic".includes(query) ||
          "academic activities".includes(query)
      )
    : items;

  // Hide this entire dropdown if user is searching and nothing matches
  if (isSearching && filteredItems.length === 0) return null;

  // Auto-expand both parent and child menus when searching
  const showParent = isSearching ? true : isOpen;
  const showChild = isSearching ? true : isActivitiesOpen;

  return (
    <div className="w-62 bg-slate-800 shadow-lg p-2 border">
      <button
        onClick={onToggle}
        className="hover:bg-slate-600 text-white px-2 rounded-md transition w-full text-left"
      >
        Academic
      </button>

      {showParent && (
        <div className="mt-2 bg-slate-800 rounded-md shadow-lg">
          <div className="p-2 rounded-md border border-blue-400 text-sm">
            <button
              onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
              className="text-white px-3 py-2 hover:bg-slate-600 text-left w-full"
            >
              Academic Activities
            </button>

            {showChild && (
              <div className="bg-slate-700">
                {filteredItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => onSelectPage(item.page)}
                    className="p-1 text-white hover:bg-blue-600 cursor-pointer w-full text-left rounded-md border border-blue-400"
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

export default DropDown1;
