const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-slate-950 text-white flex items-center">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <p className="text-cyan-400 uppercase tracking-[4px] font-semibold mb-4">
            Frontend Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Build Modern <br />
            <span className="text-cyan-400">
              Web Experiences
            </span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
            I create professional, responsive, and modern websites using
            React.js and Tailwind CSS with clean UI/UX design.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-7 py-3 rounded-xl font-semibold transition duration-300 shadow-lg shadow-cyan-500/20">
              View Projects
            </button>

            <button className="border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 px-7 py-3 rounded-xl font-semibold transition duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="relative">
            
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

            {/* Profile Card */}
            <div className="relative bg-slate-900/70 border border-slate-800 backdrop-blur-xl rounded-3xl p-4 shadow-2xl">
              <img
                src="https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg"
                alt="Profile"
                className="w-80 md:w-[380px] rounded-2xl object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;