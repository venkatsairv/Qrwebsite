import React from 'react';

const HomePage1 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest mb-6">SECURE & INSTANT</span>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
            Generate QR Codes <span className="text-primary">Instantly</span>
          </h1>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Free, fast, no signup required. Create high-quality QR codes for your links, text, or business in seconds.
          </p>
          {/* Input Box Container */}
          <div className="bg-surface-container-lowest soft-lift p-2 rounded-xl flex flex-col md:flex-row gap-2 max-w-2xl mx-auto border border-[#c3c6d7] border-opacity-20">
            <input className="flex-grow bg-transparent border-none focus:ring-0 px-6 py-4 text-lg text-on-surface" placeholder="https://your-link-here.com" type="text" />
            <button className="premium-gradient text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all active:scale-[0.98]">
              Generate
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 text-on-surface-variant opacity-60">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              <span className="text-sm font-medium">No Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              <span className="text-sm font-medium">High Resolution</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              <span className="text-sm font-medium">Privacy First</span>
            </div>
          </div>
        </div>
        {/* Abstract background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container blur-[120px] rounded-full"></div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-on-surface">Precision-Engineered Features</h2>
            <p className="text-on-surface-variant">We prioritize clarity, speed, and your digital privacy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-xl soft-lift border border-transparent hover:border-primary/10 transition-all group">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Generation</h3>
              <p className="text-on-surface-variant leading-relaxed">Our engine renders high-fidelity vector QR codes in milliseconds, optimized for any device.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl soft-lift border border-transparent hover:border-primary/10 transition-all group">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Design</h3>
              <p className="text-on-surface-variant leading-relaxed">Personalize your artifacts with brand colors, custom shapes, and high-contrast styling for scanability.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl soft-lift border border-transparent hover:border-primary/10 transition-all group">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">shield</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy-Focused</h3>
              <p className="text-on-surface-variant leading-relaxed">We never track your scans or sell your data. Your digital footprint remains yours alone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative bg-surface-container-low p-8 rounded-2xl">
                <img className="rounded-xl soft-lift w-full h-[400px] object-cover" alt="Modern smartphone displaying a clean user interface with a vibrant blue QR code in focus on the screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmwhDY7nQrJ13Kfdut9sJK-AjXQFhrLR6h7OFJbNriHVyTfP3KywkWMFcNgzx4P8tJiF37jcCF5y9VLqmD8lpWXKhEkYimc0H8lCmGy2m2bCqENDHRqk7v3N7FvnvDCtV1fOdfYSZKMARImoWrIzzpO4jdPIagFiCpJpFQ_biyA-dTptplagrpAP45sXhpJ_LVE1SpbEzytgtQiw3rBgNfsGVEvNxeI3upfOD9ItfcVK0zUMtaVkmn4U5edF6r19jpszt3_-XAc2g"/>
                <div className="absolute -bottom-6 -right-6 bg-surface-container-lowest p-6 rounded-2xl soft-lift border border-outline-variant/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full premium-gradient flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-sm">qr_code_2</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Status</div>
                      <div className="text-sm font-bold text-on-surface">Ready to scan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-extrabold tracking-tight mb-12 text-on-surface">Three Steps to Impact</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">1</div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Enter Link</h4>
                    <p className="text-on-surface-variant">Paste your URL, text, or social profile into the generator field above.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">2</div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Customize</h4>
                    <p className="text-on-surface-variant">Fine-tune the design using our curated selection of colors and patterns.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">3</div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Download</h4>
                    <p className="text-on-surface-variant">Export your QR artifact in print-ready SVG or sharp PNG formats instantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto premium-gradient rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to curate your first QR code?</h2>
            <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">No account required. Start creating your digital artifacts for free today.</p>
            <button className="bg-surface-container-lowest text-primary px-10 py-5 rounded-lg font-extrabold text-lg soft-lift hover:scale-105 transition-all">
              Go to Generator
            </button>
          </div>
          {/* Glass accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 blur-3xl translate-y-1/2 -translate-x-1/2 rounded-full"></div>
        </div>
      </section>
    </>
  );
};

export default HomePage1;
