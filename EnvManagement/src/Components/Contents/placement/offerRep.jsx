import Std from "./stdInfoCard";

function OfferRep() {
  return (
    <div>
      <Std />
      <div className="border border-gray-200 rounded-lg shadow-lg mt-4 p-8 space-y-4 mx-10">
        <div className="flex justify-between">
          <div>
            Show
             <select className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            entries
          </div>
          <div>
            <label htmlFor="searcg">Search:</label>
            <input type="text" className="border rounded-xl" />
            <button className="text-white bg-blue-900 px-3 rounded ml-2">
              Export
            </button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead className="bg-blue-600 text-white text-sm">
                <tr>
                  <th className="border-r border-white/20 p-2.5">S.NO</th>
                  <th className="border-r border-white/20 p-2.5">Company</th>
                  <th className="border-r border-white/20 p-2.5">Job Title</th>
                  <th className="border-r border-white/20 p-2.5">Offer Type</th>
                  <th className="border-r border-white/20 p-2.5">Accepted</th>
                  <th className="border-r border-white/20 p-2.5">Offer Letter</th>
                  <th className="border-r border-white/20 p-2.5">Joining Date</th>
                  <th className="p-2.5">CTC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td
                    colSpan={8}
                    className="p-8 text-center text-sm text-gray-500"
                  >
                    No Data Available in Table
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p>Showing 0 to 0 of 0 entries</p>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-500">Previous</a>
            <a href="#" className="hover:text-blue-500">Next</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferRep;
