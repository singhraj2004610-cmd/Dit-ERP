import photo from "../../../assets/react.svg";

function Std() {
  return (
    <div className="flex flex-wrap justify-around  border-y-3 mx-10 rounded-lg p-8 shadow-2xl border-blue-500">
      <div className="flex gap-8">
        <img src={photo} alt="student profile" className=""/>
        <div>
          <span className="block whitespace-nowrap text-lg text-red-400 font-bold">RAJABABU PATEL</span>
          <p className="text-sm">
            <span className="text-blue-600">Phone:</span>9027813851
          </p>
          <p className="text-sm">
            <span className="text-blue-600">Gender: </span>Male
          </p>
        </div>
      </div>
      <div>
        <p className="text-sm">
          <span className="text-blue-600">Program:</span>BTCSE
        </p>
        <p className="text-sm">
          <span className="text-blue-600">Admission Year:</span>2022
        </p>
        <p className="text-sm">
          <span className="text-blue-600">Session:</span>ODD
        </p>
      </div>
      <div>
        <p className="text-sm">
          <span className="text-blue-600">Email:</span>1000019238@dit.edu.in
        </p>
        <p className="text-sm">
          <span className="text-blue-600">Roll No.:</span>220102805
        </p>
        <p className="text-sm">
          <span className="text-blue-600">ERP ID:</span>1000019238
        </p>
      </div>
    </div>
  );
}
export default Std;
