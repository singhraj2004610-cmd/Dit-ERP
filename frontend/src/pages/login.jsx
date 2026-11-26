import { useState } from "react";

// Temporary hardcoded users (replace with .NET API call later)
const USERS = [
  {
    email: "student@dit.edu.in",
    password: "12345",
    role: "student",
    name: "RAJABABU PATEL",
    id: "1000019238",
  },
  {
    email: "department@dit.edu.in",
    password: "12345",
    role: "department",
    name: "DR. SAMPLE FACULTY",
    id: "EMP1001",
  },
];

const OutLook = ({ onSelectPage, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const found = USERS.find(
      (u) => u.email === email.trim().toLowerCase() && u.password === password
    );

    if (!found) {
      setError("Invalid email or password");
      return;
    }

    setError("");
    // Never pass the password up to the parent
    const { password: _password, ...user } = found;
    onLoginSuccess(user);
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 text-gray-800">
      <h3 className="text-2xl font-bold text-center text-blue-950">
        Outlook Login
      </h3>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="sapID@dit.edu.in"
        required
        className="border border-gray-300 rounded-lg p-3 w-full"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="border border-gray-300 rounded-lg p-3 w-full"
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        className="bg-blue-950 text-white p-3 rounded-lg hover:bg-blue-800"
      >
        Login
      </button>

      <button
        type="button"
        onClick={onSelectPage}
        className="bg-gray-200 text-gray-800 p-3 rounded-lg hover:bg-gray-300"
      >
        Cancel
      </button>
    </form>
  );
};

export default OutLook;
