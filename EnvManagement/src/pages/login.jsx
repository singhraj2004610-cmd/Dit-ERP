import logo from "./assets/Ditlogo.png";

export default LoginPage = () => {
  return (
    <div className="flex">
      <div className="flex flex-rows-3">
        <div className="flex">
        <img src={logo} alt="DitLogo" />
        <p className="text-5xl">iNxt</p>
        </div>
        <p>
          Celebrating <span>25+</span> years of
        </p>
        <p>Imagination,Aspiration & Achievement</p>
      </div>
      <div className="flex flex-rows-5">
        <img src={logo} alt="DitLogo" />
        <p>Let’s get started!</p>
        <button>Log in with Outlook</button>
        <p>Or</p>
        <button>Login with Mobile OTP</button>
      </div>
    </div>
  );
};
