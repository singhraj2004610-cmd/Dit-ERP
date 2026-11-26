function GStatus() {
  return (
    <div className="border-blue-400 border border-y-4 p-6 space-y-6 rounded-sm">
      <h1 className="text-center font-bold text-4xl">Graduation Status</h1>
      <p className="border-blue-400 border mx-35 border-y-3 text-center  p-6 shadow-xl rounded-sm">
        <span className="text-green-700 font-bold text-xl">
          ** Congratulations on the completion of Graduation Requirements **
        </span>
      </p>
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
    </div>
  );
}

export default GStatus;
