import { useState } from "react";

// Same look & behaviour as the Student DropDown1..5, but driven by props
// so one component serves every department menu.
function DeptDropDown({
  title,        // top-level button text, e.g. "Attendance"
  subtitle,     // inner button text, e.g. "Attendance Management"
  items,        // [{ label, page }]
  onSelectPage,
  isOpen,
  onToggle,
  searchQuery = "",
}) {
  const [isInnerOpen, setIsInnerOpen] = useState(false);

  const query = searchQuery.trim().toLowerCase();
  const isSearching = query.length > 0;

  const filteredItems = isSearching
    ? items.filter(
        (item) =>
          item.label.toLowerCase().includes(query) ||
          title.toLowerCase().includes(query) ||
          subtitle.toLowerCase().includes(query)
      )
    : items;

  if (isSearching && filteredItems.length === 0) return null;

  const showParent = isSearching ? true : isOpen;
  const showChild = isSearching ? true : isInnerOpen;

  return (
    <div className="w-62 bg-slate-800 shadow-lg p-2 border">
      <button
        onClick={() => {
          setIsInnerOpen(false);
          onToggle();
        }}
        className="hover:bg-slate-600 text-white px-2 rounded-md transition w-full text-left"
      >
        {title}
      </button>

      {showParent && (
        <div className="mt-2 bg-slate-800 rounded-md shadow-lg">
          <div className="p-2 rounded-md border border-blue-400 text-sm">
            <button
              onClick={() => setIsInnerOpen(!isInnerOpen)}
              className="text-white px-3 py-2 hover:bg-slate-600 text-left w-full"
            >
              {subtitle}
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

export default DeptDropDown;
