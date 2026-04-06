import React from 'react';

const LumenScan = () => {
  return (
    <div className="bg-[#141516] min-h-screen text-[#dce1e3] font-['Inter'] selection:bg-[#0049db]/30 selection:text-[#ffffff]">
      
      {/* Ethereal Navigation */}
      <nav className="w-full fixed top-0 z-50 bg-[#141516]/60 backdrop-blur-[20px] border-b border-[#434757]/15">
        <div className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
          <div className="text-2xl font-extrabold tracking-tighter text-[#0049db] font-['Manrope']">LumenScan</div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-[#a0a5b5] font-medium hover:text-[#dce1e3] transition-colors duration-300" href="#">Dashboard</a>
            <a className="text-[#a0a5b5] font-medium hover:text-[#dce1e3] transition-colors duration-300" href="#">Analytics</a>
            <a className="text-[#a0a5b5] font-medium hover:text-[#dce1e3] transition-colors duration-300" href="#">API</a>
          </div>
          <button className="bg-gradient-to-br from-[#0049db] to-[#2962ff] text-white px-8 py-3 rounded-[1rem] font-bold transition-transform hover:scale-[1.02]">
            Generate Now
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-10 pt-40 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-6 space-y-16 mt-10">
            <header>
              <h1 className="font-['Manrope'] text-6xl md:text-7xl font-extrabold tracking-[-0.02em] leading-[1.1] mb-6 text-[#ffffff]">
                The Ethereal <br className="hidden md:block"/> Utility.
              </h1>
              <p className="text-xl text-[#a0a5b5] max-w-md leading-relaxed font-['Inter']">
                Precision QR code generation designed for high-end digital environments.
              </p>
            </header>

            <div className="bg-[#1f2324] rounded-[1.5rem] p-10 flex flex-col gap-8 border border-[#434757]/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0049db]/10 rounded-full blur-[100px]"></div>

              <div className="relative z-10 flex gap-4 border-b border-[#434757]/15 pb-6">
                <button className="bg-[#dce1ff] text-[#001550] px-6 py-2 rounded-full text-sm font-bold tracking-wide">
                  URL LINK
                </button>
                <button className="text-[#a0a5b5] hover:text-[#dce1e3] px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-colors">
                  WIFI
                </button>
                <button className="text-[#a0a5b5] hover:text-[#dce1e3] px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-colors">
                  VCARD
                </button>
              </div>

              <div className="relative z-10">
                <label className="text-[#a0a5b5] text-[0.6875rem] font-bold uppercase tracking-[+0.05em] mb-3 block">Digital Destination</label>
                <input 
                  type="text" 
                  placeholder="https://lumenscan.io/target" 
                  className="w-full bg-[#0a0b0c] outline outline-1 outline-[#434757]/15 focus:outline-[#0049db] focus:shadow-[0_0_15px_rgba(0,73,219,0.2)] text-[#dce1e3] px-6 py-5 rounded-[0.5rem] transition-all duration-300 text-lg placeholder:text-[#434757]"
                />
              </div>

              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div>
                  <label className="text-[#a0a5b5] text-[0.6875rem] font-bold uppercase tracking-[+0.05em] mb-3 block">Color Depth</label>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-[#0049db] ring-2 ring-offset-2 ring-offset-[#1f2324] ring-[#0049db] transition-all duration-300"></button>
                    <button className="w-10 h-10 rounded-full bg-[#ffffff] transition-all duration-300 hover:scale-110"></button>
                    <button className="w-10 h-10 rounded-full bg-[#c74500] transition-all duration-300 hover:scale-110"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#0a0b0c] rounded-[1.5rem] p-12 flex flex-col border border-[#434757]/15" style={{ boxShadow: "0 20px 40px -12px rgba(25, 28, 29, 0.4)" }}>
              <h3 className="font-['Manrope'] text-2xl font-bold mb-12 text-[#ffffff]">Artifact Preview</h3>
              
              <div className="aspect-square bg-[#ffffff] rounded-[1rem] p-6 mb-12 relative flex items-center justify-center shadow-[0_0_50px_rgba(0,73,219,0.1)]">
                <div className="absolute inset-0 border border-[#0049db]/10 rounded-[1rem]"></div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Q_ovE102ERgxdoBaU3v3JChqkG7dHPuQUG_k_cD1ucAIPKiLBnVceD0kcLZ2-6foMnK4mzfA2XAmwfoKhMk9CqEbuFqWRfN8GlyHIry5R-jG1mB3mu6TDOGuisVpG56MgGrdqEH91uk5c78U1WJFFdmLTth2w5MRt-vW_qnlRFFKjb7RswqNmgz8ipylBoyesGkdnojSHPZhTdXpA6I2aPgOzBn9TZIvE530rJ3LwtPAHTRwcncqmPB5UHJ9oHuCdZNoS1GtiX0" alt="Lumen QR" className="w-[80%] opacity-90"/>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-br from-[#0049db] to-[#2962ff] text-white py-5 rounded-[1rem] font-bold text-lg hover:scale-[1.02] transition-transform shadow-[0_10px_30px_-5px_rgba(0,73,219,0.3)]">
                  Export High-Res SVG
                </button>
                <button className="w-full bg-[#242829] text-[#0049db] py-5 rounded-[1rem] font-bold hover:bg-[#2d3233] transition-colors">
                  Standard PNG
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default LumenScan;
