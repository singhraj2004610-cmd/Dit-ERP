function GradeSheet() {
  return (
    <div className="border">

      <div className="flex p-6 gap-10 justify-center items-end">

        <div className="flex flex-col">
          <label htmlFor="year">Academic Year:</label>
          <input
            id="year"
            type="text"
            placeholder="yyyy"
            className="border rounded-sm"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="AY">Academic Session:</label>
          <input
            id="AY"
            type="text"
            placeholder="--Select Session--"
            className="border rounded-sm"
          />
        </div>

        <button className="w-30 h-10 text-white border rounded-sm bg-blue-400">
          Generate
        </button>

      </div>


      <div className="border m-6 p-4 h-100">

        <h3 className="bg-blue-600 text-white text-center">
          Grade Sheet
        </h3>

        <p className="text-slate-400 text-center p-6">
          Choose Year and Session to Get Grade Card
        </p>

      </div>

    </div>
  );
}

export default GradeSheet;

