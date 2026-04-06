import React from 'react';

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-20 pb-32">
      {/* Hero Section */}
      <header className="max-w-3xl mb-24">
        <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.05em] uppercase rounded-full mb-6">
          Premium Performance
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight mb-8 leading-[1.1]">
          Engineered for <span className="text-primary">Curated</span> Digital Access.
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed opacity-90">
          EtherQR transforms functional patterns into digital artifacts. We prioritize breathing room over density, ensuring a secure and elite environment for every code generated.
        </p>
      </header>

      {/* Features Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Feature 1: Static QR */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-10 editorial-shadow border border-outline-variant/10 flex flex-col justify-between group hover:bg-surface transition-colors duration-300">
          <div>
            <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">all_inclusive</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-4">Static QR</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Generate permanent codes that live as long as your content. Forever free, with no expiration dates or surprise subscriptions.
            </p>
          </div>
          <div className="mt-12">
            <span className="text-sm font-semibold text-primary inline-flex items-center gap-2">
              View documentation <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>
        </div>

        {/* Feature 2: Custom Design */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-10 editorial-shadow border border-outline-variant/10 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-auto h-64 bg-surface-container-low rounded-xl overflow-hidden">
            <img className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Minimalist UI showing a sleek QR code" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKVR7ySqeCm6b52osBT2cywoj1EHzDhrdYE1Cv3D6aF5E22Ih6VorZWXcoEduOaC4L5tZhXpA6wkOGNtBEdTFywzGb0J_KDmUWx72atV95r6H59cBk5UZyUvlUn6-LPUmtBULQQCHfFbpvoSPYLHV2owY6aD_cL_sJvTTXC-_hQ8n6X6QVSA1rud28Q5xTVkPA0K3Kwnqynz88uTUPk7LKWPrJY9emxi8Y8zUoQ_W0MwHfkW0rZWdPxp3Zy62dtN4ZOQ0TDMXIWwo"/>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
          </div>
          <div>
            <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined">palette</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-4">Custom Design</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Seamlessly integrate your brand identity. Add high-resolution logos, specify custom HEX values, and adjust pattern precision with our artisanal editor.
            </p>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-primary shadow-sm"></div>
              <div className="w-6 h-6 rounded-full bg-secondary shadow-sm"></div>
              <div className="w-6 h-6 rounded-full bg-tertiary shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* Feature 3: Fast Generation */}
        <div className="md:col-span-7 bg-surface-container-low rounded-xl p-10 flex flex-col md:flex-row gap-10 items-center justify-between border border-transparent hover:border-outline-variant/20 transition-all">
          <div className="flex-1">
            <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-4">Fast Generation</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Engineered for zero-latency performance. Create production-ready digital artifacts in milliseconds, not minutes.
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-surface-container-lowest p-6 rounded-lg editorial-shadow">
            <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden mb-3">
              <div className="h-full w-4/5 primary-gradient"></div>
            </div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">0.02ms Response</p>
          </div>
        </div>

        {/* Feature 4: Privacy-focused */}
        <div className="md:col-span-5 bg-surface-container-lowest rounded-xl p-10 editorial-shadow border border-outline-variant/10">
          <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
          </div>
          <h3 className="text-2xl font-bold text-on-surface mb-4">Privacy-focused</h3>
          <p className="text-on-surface-variant leading-relaxed">
            We believe in digital sanctity. EtherQR operates on a strict no-tracking policy. Your generated codes are yours, and the data remains unobserved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-surface-container-low rounded-full text-[10px] font-bold text-on-surface-variant tracking-wider uppercase">No Cookies</span>
            <span className="px-3 py-1 bg-surface-container-low rounded-full text-[10px] font-bold text-on-surface-variant tracking-wider uppercase">GDPR Ready</span>
          </div>
        </div>
      </div>

      {/* Secondary Detail Section */}
      <section className="mt-40 grid md:grid-cols-2 gap-24 items-center">
        <div className="order-2 md:order-1">
          <div className="bg-surface-container-low rounded-2xl p-12 relative overflow-hidden">
            <img className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" alt="Microscopic view of light refracting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeuaYaEuJatTrGwN93CHWZ3aJWKYljUKOAkOxztlzZLxCsVE_PBbVpSY-h4PQsxEEsctuicdaLVR7FL-PyRm3Va4JQ2tkCis-iUA05vDQ7Wx5B9zbOejoowiO0u0wXyNRn6wUzdEMKJw7DyASs6oS4Q-TbXm6XZhz0I7HkeEG7JqAKWbCClejzfYF2Rv6rRGueXMP5dKcxM3oEAqdyHmjgnmTzXMUMdieJIhk8LsRpIexrbk8UdO-wZzRpXQyotSVrDdgFHwyn_p4"/>
            <div className="relative z-10 p-8 bg-surface-container-lowest rounded-xl editorial-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">System Status: Optimal</span>
              </div>
              <h4 className="text-xl font-bold text-on-surface mb-2">Encrypted Artifacts</h4>
              <p className="text-sm text-on-surface-variant mb-6">Every QR is generated via our secure VPC, ensuring isolation and integrity of the output data.</p>
              <button className="w-full py-3 bg-surface-container-high rounded-lg text-sm font-semibold text-primary hover:bg-outline-variant/20 transition-colors">Learn about our Security</button>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-extrabold text-on-surface tracking-tight mb-8">Refined Utility.</h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <span className="text-primary font-bold text-xl">01.</span>
              <div>
                <h5 className="font-bold text-on-surface mb-2">Architectural Integrity</h5>
                <p className="text-on-surface-variant leading-relaxed">Our grid patterns are mathematically verified for 100% scan rates under challenging light conditions.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-primary font-bold text-xl">02.</span>
              <div>
                <h5 className="font-bold text-on-surface mb-2">Dynamic Expansion</h5>
                <p className="text-on-surface-variant leading-relaxed">Scale from individual creation to enterprise-level API automation without changing your workflow.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-primary font-bold text-xl">03.</span>
              <div>
                <h5 className="font-bold text-on-surface mb-2">Universal Compatibility</h5>
                <p className="text-on-surface-variant leading-relaxed">Outputs in SVG, PDF, and high-res PNG for professional print and digital deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
