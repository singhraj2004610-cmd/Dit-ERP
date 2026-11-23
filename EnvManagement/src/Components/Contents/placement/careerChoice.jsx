import Std from "./stdInfoCard";

function CareerChoice() {
  return (
    <div>
      <p className="flex justify-center pb-4 font-serif font-bold text-blue-900">
        Career Services & Development Centre
      </p>
      <Std />

      <div className="border-l-3 mx-10 rounded-lg p-8 shadow-2xl border-blue-500 mt-4 space-y-6">
        <p>
          Dear Student, Welcome to the{" "}
          <span className="font-bold text-blue-900">Career Route Mapping </span>
          System.
        </p>
        <p className="font-bold text-blue-900">
          Kindly Choose Your Career Aspirations:
        </p>
        <div className="flex flex-col space-y-10">
          <div className="text-center space-x-4">
            <a
              href="cp"
              className="bg-gray-300 rounded-2xl px-6 py-2 text-blue-800 font-bold"
            >
              Campus Placements
            </a>
            <a
              href="oco"
              className="bg-gray-300 rounded-2xl px-6 py-2 text-blue-800 font-bold"
            >
              Other Career Options
            </a>
          </div>
          <div className="text-center space-x-4">
            <button className="font-bold text-white px-4 py-1 bg-blue-900 rounded-lg">
              Submit
            </button>
            <button className="font-bold text-white px-6 py-1 bg-blue-900 rounded-lg">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerChoice;
