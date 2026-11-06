import logo from "./assets/Ditlogo.png";

function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-[url('./assets/unison-group3.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center font-sans antialiased relative">
      
      <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden shadow-2xl bg-white/50">
        
        {/* LEFT COLUMN: Branding & Celebration Details */}
       <div className="flex flex-col p-8 md:p-12 w-full md:w-3/4 text-white bg-black/60 justify-center items-center rounded-t-2xl md:rounded-t-none md:rounded-tr-3xl md:rounded-br-3xl">
          <div className="flex items-center">
            <img src={logo} alt="DitLogo" className="h-40 w-auto object-contain p-1 rounded-lg" />
            <p className="text-8xl font-extrabold tracking-wide pb-8">
              <span className="italic font-serif lowercase">i</span>Nxt
            </p>
          </div>
          
          <div className="mt-8 md:mt-0">
            <p className="text-6xl font-light text-amber-200 font-['Brush_Script_MT',_cursive] text-center">
              Celebrating <span className="font-mono font-bold text-yellow-400 text-6xl">25+</span> years of
            </p>
            <p className="text-3xl font-normal tracking-tight text-white mt-1 leading-tight">
              Imagination, Aspiration & Achievement
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Gateway Login Card */}
        <div className="flex flex-col items-center justify-center p-8 md:p-12 w-full md:w-1/2 text-white gap-3">
          <img src={logo} alt="DitLogo" className="h-30 w-auto object-contain mb-4 drop-shadow-md" />
          <p className="text-4xl tracking-tight mb-6 text-blue-500">Let’s get started!</p>
          
          <div className="w-full max-w-sm flex flex-col gap-3">
            <button className="w-full bg-blue-950 hover:bg-[#006cc1] text-white font-semibold py-3 px-4 rounded-4xl shadow-sm transition-colors text-sm tracking-wide">
              Log in with Outlook
            </button>
            
            <div className="flex items-center my-1 text-amber-900/40">
              <div className="flex-1 border-b border-amber-900/30"></div>
              <span className="px-3 text-xs font-mono font-bold text-white select-none">Or</span>
              <div className="flex-1 border-b border-amber-900/30"></div>
            </div>
            
             <button className="w-full bg-blue-950 hover:bg-[#006cc1] text-white font-semibold py-3 px-4 rounded-4xl shadow-sm transition-colors text-sm tracking-wide">
              Login with Mobile OTP
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;
