const OutLook = ({ onSelectPage, onLoginSuccess }) => {
  return (
    <div className="flex flex-col gap-4 text-gray-800">

      <h3 className="text-2xl font-bold text-center text-blue-950">
        Outlook Login
      </h3>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="sapID@dit.edu.in"
        className="border border-gray-300 rounded-lg p-3 w-full required"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        className="border border-gray-300 rounded-lg p-3 w-full required"
      />

      <button 
      onClick={onLoginSuccess}
      className="bg-blue-950 text-white p-3 rounded-lg hover:bg-blue-800">
        Login
      </button>

      <button
        onClick={onSelectPage}
        className="bg-gray-200 text-gray-800 p-3 rounded-lg hover:bg-gray-300"
      >
        Cancel
      </button>

    </div>
  );
};

export default OutLook;