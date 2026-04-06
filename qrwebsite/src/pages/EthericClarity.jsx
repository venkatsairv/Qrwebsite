import React from 'react';

const EthericClarity = () => {
  return (
    <div className="bg-[#f9f9f9] min-h-screen text-[#1a1c1c] font-['Inter'] selection:bg-[#dbe1ff] selection:text-[#00174b]">
      {/* Navigation */}
      <nav className="w-full sticky top-0 z-50 bg-[#ffffff]/80 backdrop-blur-[24px]">
        <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tight text-[#004ac6]">EtherQR.</div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-[#434655] font-medium hover:text-[#004ac6] transition-colors" href="#">Curated Templates</a>
            <a className="text-[#434655] font-medium hover:text-[#004ac6] transition-colors" href="#">Digital Heritage</a>
            <a className="text-[#434655] font-medium hover:text-[#004ac6] transition-colors" href="#">API Access</a>
          </div>
          <button className="primary-gradient text-white px-8 py-3 rounded-[12px] font-semibold active:opacity-90 transition-opacity">
            Start Curating
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 pt-24 pb-32">
        {/* Header (Asymmetrical) */}
        <header className="max-w-2xl ml-8 md:ml-16 mb-20">
          <span className="text-[#004ac6] font-bold text-sm tracking-[+0.05em] uppercase mb-6 block">The Digital Curator</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-[-0.02em] leading-tight mb-8">
            Create authoritative digital artifacts.
          </h1>
          <p className="text-[#434655] text-xl leading-relaxed">
            Move beyond simple utility. Elevate your brand with precision-engineered scannable touchpoints that prioritize privacy and profound clarity.
          </p>
        </header>

        {/* Generator Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 ml-8 md:ml-16">
          <div className="md:col-span-7 bg-[#f3f3f3] rounded-[24px] p-10 flex flex-col gap-10 relative">
            <div>
              <label className="text-sm font-bold text-[#434655] uppercase tracking-wide mb-4 block">Artifact Destination</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="https://your-domain.com/experience" 
                  className="w-full bg-[#ffffff] outline outline-1 outline-[#c3c6d7]/20 focus:outline-[#004ac6] text-[#1a1c1c] placeholder:text-[#c3c6d7] px-6 py-5 rounded-[12px] transition-all text-lg shadow-sm"
                />
              </div>
            </div>

            <div>
              <span className="text-sm font-bold text-[#434655] uppercase tracking-wide mb-4 block">Visual Architecture</span>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-[12px] bg-[#004ac6] outline outline-2 outline-offset-4 outline-[#004ac6]"></button>
                <button className="w-12 h-12 rounded-[12px] bg-[#1a1c1c]"></button>
                <button className="w-12 h-12 rounded-[12px] bg-[#c74500]"></button>
                <button className="w-12 h-12 rounded-[12px] border border-[#c3c6d7]/50 flex items-center justify-center bg-[#ffffff]">
                  <span className="material-symbols-outlined text-[#434655]">add</span>
                </button>
              </div>
            </div>

            <button className="w-full primary-gradient text-white py-5 rounded-[12px] font-bold text-lg hover:shadow-lg transition-all mt-4">
              Generate Artifact
            </button>
          </div>

          <div className="md:col-span-5 relative mt-8 md:mt-0">
             <div className="sticky top-32 bg-[#ffffff] rounded-[24px] p-8 md:p-12" style={{ boxShadow: "0px 4px 20px rgba(0, 74, 198, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.02)" }}>
               <h3 className="text-lg font-bold text-[#1a1c1c] mb-8 border-b border-[#c3c6d7]/20 pb-4">Artifact Preview</h3>
               
               <div className="aspect-square bg-[#f9f9f9] rounded-[24px] flex items-center justify-center mb-8 border border-[#c3c6d7]/20">
                 {/* QR Mockup */}
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPTyfatTsTsm2ue0Uu9soMXEeKLIKnRnZCZyyEq2uWQ7f3siaU60Mo2lZNOAVu8_N7UBO0Plg_gco01OEBoP6dN_PMESduX-0lwaW7qoond5TUhd2ahdCSImonnulYlPoVLo8VMrQVctPEZkKbWRlHn7WJd0zCYAdHt-E6XNnx15BF8Xdwjks3dNkx-daNMs6g0Se8LarH-QP66DXDuFMtKUyo1BHD-Cy_hTV5n7rIcPpCYNh8WTeRdxjgA8buNIs8KhGxwLW4aao" alt="QR" className="w-[60%] h-[60%] opacity-80 mix-blend-multiply" />
               </div>

               <div className="flex gap-4">
                 <button className="flex-1 bg-[#f3f3f3] text-[#004ac6] hover:bg-[#e8e8e8] font-bold py-3 rounded-[12px] transition-colors">SVG Vector</button>
                 <button className="flex-1 bg-[#f3f3f3] text-[#004ac6] hover:bg-[#e8e8e8] font-bold py-3 rounded-[12px] transition-colors">PNG High-Res</button>
               </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EthericClarity;
