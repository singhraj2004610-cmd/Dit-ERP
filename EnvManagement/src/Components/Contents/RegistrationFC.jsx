function RegConvocation() {
  return (
    <div className="border-blue-400 border border-y-4 p-6 space-y-6 rounded-sm">
      <h1 className="text-center font-bold text-4xl">
        Registration for Convocation & Other Documents
      </h1>

      <div className="mb-6 border-y-3 shadow-xl border-blue-400 border mx-40  p-4 rounded-sm">
        <div className="bg-cyan-100">
          <div className="grid grid-cols-[180px_20px_1fr]">
            <span>ERP ID</span>
            <span>:</span>
            <span className="text-sm">1000019238</span>
          </div>
          <div className="grid grid-cols-[180px_20px_1fr]">
            <span>Roll No.</span>
            <span>:</span>
            <span className="text-sm">220102805</span>
          </div>
          <div className="grid grid-cols-[180px_20px_1fr]">
            <span>Student Name</span>
            <span>:</span>
            <span className="text-sm">Rajababu Patel</span>
          </div>
          <div className="grid grid-cols-[180px_20px_1fr]">
            <span>Program Name</span>
            <span>:</span>
            <span className="text-sm">
              Bachelor of Technology in Computer Science and Engineering
            </span>
          </div>
          <div className="grid grid-cols-[180px_20px_1fr]">
            <span>Specialization</span>
            <span>:</span>
            <span className="text-sm">Data Science and Analytics</span>
          </div>
        </div>
      </div>
      <div className="mb-6 border-y-3 shadow-xl border-blue-400 border mx-40  p-4 rounded-sm space-y-6 pb-12 flex flex-col items-center">
        <div className="space-x-10">
          <label for="fruit-select" className="font-bold">
            Document Type
          </label>

          <select id="fruit-select" name="fruit" className="border rounded-lg">
            <option value="sd" selected>--Select Document--</option>
            <option value="odc">Original Degree Certificate</option>
            <option value="pdc" >Provisional Degree Certificate</option>
            <option value="tc" >
              Transfer Certificate
            </option>
            <option value="mc" >
              Migration Certificate
            </option>
            <option value="cc" >
              Character Certificate
            </option>
            <option value="bc" >
              Bonafied Certificate
            </option>
            <option value="ddc" >
              Duplicate Degree Certificate
            </option>
            <option value="pcc" >
              Program Completion Certificate
            </option>
            <option value="t" >
              Transcript
            </option>
          </select>

          <label htmlFor="reason" className="font-bold">
            Reason
          </label>
          <input type="text" id="reason" className="rounded-lg border" />
        </div>
        <div className="flex space-x-5 ">
          <button className="border rounded-lg px-4 font-bold">REQUEST</button>
          <button className="border rounded-lg px-8 font-bold">RESET</button>
        </div>
      </div>
    </div>
  );
}

export default RegConvocation;
