import photo from "/Users/rajababu/Documents/internship tasks/Enventory management/EnvManagement/src/assets/react.svg";
function Flefger() {
  return (
    <div>
      <div className="border flex flex-cols justify-between px-20 py-4 rounded-lg border-y-4">
        <div className="flex justify-center">
          <img src={photo} alt="student profile" />
        </div>
        <div className="space-y-4">
          <p className="flex flex-col">
            <span className="text-red-500 font-bold">Student ID</span>1000019238
          </p>
          <p className="flex flex-col">
            <span className="text-green-700 font-bold">Mobile Number</span>9027813851
          </p>
        </div>
        <div className="space-y-4">
          <p className="flex flex-col">
            <span className="text-blue-700 font-bold">Student Name</span>RAJABABU PATEL
          </p>
          <p className="flex flex-col">
            <span className="text-purple-800 font-bold">Email ID</span>abcdefghi@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Flefger;
