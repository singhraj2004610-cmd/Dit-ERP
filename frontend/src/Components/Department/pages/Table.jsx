// Small shared table so every department page looks like your student tables
function Table({ title, columns, children }) {
  return (
    <div>
      <h1 className="text-center text-purple-900 mb-6 font-bold font-serif text-xl">{title}</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left">
          <thead className="bg-red-800 text-white">
            <tr>
              {columns.map((c) => (
                <th key={c} className="px-3 py-2 whitespace-nowrap">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}
export default Table;
