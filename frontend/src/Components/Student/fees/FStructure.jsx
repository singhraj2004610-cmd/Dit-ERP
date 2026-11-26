import photo from "../../../assets/react.svg";
function Fstructure() {
  const fee = [
    {
      st: 1,
      tutionfee: 102350,
      Academicfee: 61400,
      dsdate: "15/06/2022",
      dedate: "15/07/2022",
    },
    {
      st: 2,
      tutionfee: 102350,
      Academicfee: 61400,
      dsdate: "15/06/2022",
      dedate: "15/07/2022",
    },
     {
      st: 3,
      tutionfee: 102350,
      Academicfee: 61400,
      dsdate: "15/06/2022",
      dedate: "15/07/2022",
    },
     {
      st: 4,
      tutionfee: 102350,
      Academicfee: 61400,
      dsdate: "15/06/2022",
      dedate: "15/07/2022",
    },
     {
      st: 5,
      tutionfee: 102350,
      Academicfee: 61400,
      dsdate: "15/06/2022",
      dedate: "15/07/2022",
    },
     {
      st: 6,
      tutionfee: 102350,
      Academicfee: 61400,
      dsdate: "15/06/2022",
      dedate: "15/07/2022",
    },
     {
      st: 7,
      tutionfee: 102350,
      Academicfee: 61400,
      dsdate: "15/06/2022",
      dedate: "15/07/2022",
    },
     {
      st: 8,
      tutionfee: 102350,
      Academicfee: 61400,
      dsdate: "15/06/2022",
      dedate: "15/07/2022",
    },
  ];
  return (
    <div className="space-y-6">
      <div className="border flex flex-cols justify-between px-20 py-4 rounded-lg border-y-4 shadow-lg">
        <div className="flex justify-center">
          <img src={photo} alt="student profile" />
        </div>
        <div className="space-y-4">
          <p className="flex flex-col">
            <span className="text-red-500 font-bold">Student ID</span>1000019238
          </p>
          <p className="flex flex-col">
            <span className="text-green-700 font-bold">Mobile Number</span>
            9027813851
          </p>
        </div>
        <div className="space-y-4">
          <p className="flex flex-col">
            <span className="text-blue-700 font-bold">Student Name</span>
            RAJABABU PATEL
          </p>
          <p className="flex flex-col">
            <span className="text-purple-800 font-bold">Email ID</span>
            abcdefghi@gmail.com
          </p>
        </div>
      </div>
      <div className="flex flex-cols justify-center mx-30">
        <table className="border w-full table-auto">
          <thead className="bg-blue-500 text-white">
            <tr className="text-center text-">
              <th>Semesteer/Trimester</th>
              <th>Tution Fee</th>
              <th>Academic Fee</th>
              <th>Due Start Date</th>
              <th>Due End Date</th>
            </tr>
          </thead>
          <tbody>
            {fee.map((structure) => (
              <tr  key={fee.st} className="text-center">
                <td>{structure.st}</td>
                <td>{structure.tutionfee}</td>
                <td>{structure.Academicfee}</td>
                <td>{structure.dsdate}</td>
                <td>{structure.dedate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="capitalize text-red-500 text-sm">Note:The application scholarship on tution fee shall be granted to permanent residents of uttarakhand/other himalayan states, merit, girls, and others in all UG/PG programmes</p>
    </div>
  );
}

export default Fstructure;
