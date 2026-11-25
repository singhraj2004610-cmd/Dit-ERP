function Receipts() {
  const rec = [
    {
      sno: 1,
      erp: 1000019238,
      date: "21/01/25",
      admited: 2022,
      voucher: "RCO2425018255",
      program: "BTCSE",
      print: "print",
    },
    {
      sno: 2,
      erp: 1000019238,
      date: "21/01/25",
      admited: 2022,
      voucher: "RCO2425018266",
      program: "BTCSE",
      print: "print",
    },
    {
      sno: 3,
      erp: 1000019238,
      date: "21/01/25",
      admited: 2022,
      voucher: "RCO2425018269",
      program: "BTCSE",
      print: "print",
    },
    {
      sno: 4,
      erp: 1000019238,
      date: "21/01/25",
      admited: 2022,
      voucher: "RCO2425018270",
      program: "BTCSE",
      print: "print",
    },
    {
      sno: 5,
      erp: 1000019238,
      date: "27/05/25",
      admited: 2022,
      voucher: "RCO2526002468",
      program: "BTCSE",
      print: "print",
    },
    {
      sno: 6,
      erp: 1000019238,
      date: "27/05/25",
      admited: 2022,
      voucher: "RCO2526011626",
      program: "BTCSE",
      print: "print",
    },
    {
      sno: 7,
      erp: 1000019238,
      date: "21/01/25",
      admited: 2022,
      voucher: "RCO2526011630",
      program: "BTCSE",
      print: "print",
    },
    {
      sno: 8,
      erp: 1000019238,
      date: "21/01/25",
      admited: 2022,
      voucher: "RCO2526029748",
      program: "BTCSE",
      print: "print",
    },
  ];
  return (
    <div>
      <h1 className="text-center font-extrabold text-xl">Receipt Details</h1>
      <div className="m-20 rounded-lg overflow-hidden border border-gray-300 shadow-lg">
        <table className="w-full text-center ">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border-r p-2">S.NO</th>
              <th className="border-r">ERP ID</th>
              <th className="border-r">DATE</th>
              <th className="border-r">ADMITTED YEAR</th>
              <th className="border-r">VOUCHER CODE</th>
              <th className="border-r">PROGRAM SHORT NAME</th>
              <th>PRINT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {rec.map((receipt) => (
            <tr>
              <td className="border-r border-gray-300 p-2">{receipt.sno}</td>
              <td className="border-r border-gray-300">{receipt.erp}</td>
              <td className="border-r border-gray-300">{receipt.date}</td>
              <td className="border-r border-gray-300">{receipt.admited}</td>
              <td className="border-r border-gray-300">{receipt.voucher}</td>
              <td className="border-r border-gray-300">{receipt.program}</td>
              <td><button className="border border-gray-200 shadow-lg rounded-lg px-3">{receipt.print}</button></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Receipts;
