function Opayments() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center p-4">
    <div className="border-y-4 shadow-lg py-6 px-6 flex flex-col justify-center items-center w-full max-w-md bg-white rounded-lg">
      <div className="shadow-xl p-6 space-y-3 flex flex-col items-center rounded-lg">
        <div className="flex size-12 items-center justify-center rounded-full bg-gray-200 text-white">
          <h1 className="text-2xl">💳</h1>
        </div>
        <div>
          <h2 className="font-bold">Fee Payment</h2>
        </div>
        <div>
          <p>Complete your payment securely</p>
        </div>
        <div className="w-80">
          <p className="flex justify-between items-center bg-gray-200 rounded-t-lg px-4">
            <span>Due Amount</span>
            <span className="font-bold">0</span>
          </p>

          <p className="flex justify-between items-center bg-gray-200 rounded-b-lg px-4">
            <span className="font-bold">Total Payable</span>
            <span className="font-bold">0</span>
          </p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="amt">Enter Amount To Pay</label>
          <input
            type="text"
            id="amt"
            placeholder="₹"
            className="border rounded-lg w-80 h-10"
          />
        </div>
        <div>
          <button className="border rounded-lg w-40 font-bold bg-blue-500 text-white text-sm h-10">
            PAY NOW
          </button>
          <button className="border rounded-lg w-40 font-bold bg-blue-500 text-white text-sm h-10">
            PAY WITH EMI
          </button>
        </div>
        <p className="text-center text-sm">Secure Payment Gateway</p>
      </div>
    </div>
    </div>
  );
}

export default Opayments;
