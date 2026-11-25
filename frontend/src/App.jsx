import logo from "./assets/Ditlogo.png";
import OutLook from "./pages/login";
import TopHeader from './mainDashboard.jsx';
import { useState } from "react";
function LoginPage() {
  const [isOutlookOpen, setIsOutlookOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
  return <TopHeader onLogout={() => setShowDashboard(false)} />;
}
  return (
    <div className="min-h-screen w-full bg-[url('./assets/unison-group3.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center font-sans antialiased relative">
      <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden bg-white/60">
        
        <div className="flex flex-col p-8 md:p-12 w-full md:w-5/6 text-white bg-black/80 justify-center items-center rounded-t-2xl md:rounded-t-none md:rounded-tr-3xl">
          <div className="flex items-center mb-8">
            <img
              src={logo}
              alt="DitLogo"
              className="h-40 w-auto object-contain p-1 rounded-lg"
            />
            <p className="text-9xl tracking-wide pb-8">
              <span className="italic font-serif lowercase">i</span>Nxt
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <p className="text-4xl font-light font-['Brush_Script_MT',_cursive] text-center">
              Celebrating{" "}
              <span className="font-mono font-bold text-yellow-400 text-4xl">
                25+
              </span>{" "}
              years of
            </p>
            <p className="text-3xl font-normal tracking-tight text-white mt-1 leading-tight">
              Imagination, Aspiration & Achievement
            </p>
          </div>
        </div>

       
        <div className="flex flex-col items-center p-8 md:p-12 w-full md:w-1/2 text-white gap-3">
          <img
            src={logo}
            alt="DitLogo"
            className="h-30 w-auto object-contain mb-4 drop-shadow-md"
          />
          <p className="text-4xl tracking-tight mb-6 text-blue-500 mb-20">
            Let’s get started!
          </p>

          <div className="max-w-sm flex flex-col gap-5">
            <button
              onClick={() => setIsOutlookOpen(true)}
              className="w-full bg-blue-950 hover:bg-[#006cc1] text-white font-semibold py-1 px-3 rounded-4xl shadow-sm transition-colors text-sm tracking-wide"
            >
              Log in with Outlook
            </button>

            <div className="flex items-center my-1 text-amber-900/40">
              <div className="flex-1 border-b border-white"></div>
              <span className="px-2 text-sm font-mono font-bold text-black select-none">
                Or
              </span>
              <div className="flex-1 border-b border-white"></div>
            </div>

            <button className="w-full bg-blue-950 hover:bg-[#006cc1] text-white font-semibold py-1 px-18 rounded-4xl shadow-sm transition-colors text-sm tracking-wide">
              Login with Mobile OTP
            </button>
          </div>
          {isOutlookOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
              <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                {/* Close Button */}
                <button
                  onClick={() => setIsOutlookOpen(false)}
                  className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-600"
                >
                  &times;
                </button>

                <OutLook onSelectPage={() => setIsOutlookOpen(false)}  onLoginSuccess={() => setShowDashboard(true)}/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
