import React from 'react';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-8 flex flex-col items-center text-center">
        <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-primary mb-4 bg-primary/5 px-3 py-1 rounded-full">Transparent Plans</span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface max-w-4xl mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mb-12 leading-relaxed">
          Choose the plan that fits your digital ecosystem. From quick static codes to advanced dynamic analytics, we treat every QR as a premium artifact.
        </p>
      </section>

      {/* Pricing Cards Section */}
      <section className="max-w-6xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Free Tier */}
          <div className="bg-surface-container-low p-1 rounded-xl">
            <div className="bg-surface-container-lowest h-full p-10 rounded-lg flex flex-col soft-lift">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Free</h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">$0</span>
                  <span className="text-on-surface-variant text-sm">/forever</span>
                </div>
              </div>
              <div className="flex-grow">
                <ul className="space-y-5">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-outline size-5 flex items-center justify-center text-sm">check</span>
                    <span className="text-on-surface-variant">Static QR</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-outline size-5 flex items-center justify-center text-sm">check</span>
                    <span className="text-on-surface-variant">PNG download</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-outline size-5 flex items-center justify-center text-sm">check</span>
                    <span className="text-on-surface-variant">Ads</span>
                  </li>
                  <li className="flex items-center gap-3 opacity-30">
                    <span className="material-symbols-outlined text-outline size-5 flex items-center justify-center text-sm">close</span>
                    <span className="text-on-surface-variant">Dynamic QR Tracking</span>
                  </li>
                </ul>
              </div>
              <button className="mt-12 w-full py-4 border border-outline-variant/30 rounded-lg font-semibold text-on-surface hover:bg-surface-container-low transition-colors cursor-pointer">
                Get Started
              </button>
            </div>
          </div>

          {/* Premium Tier */}
          <div className="relative bg-gradient-to-br from-primary to-primary-container p-1 rounded-xl shadow-xl md:scale-105 z-10 w-full h-full">
            <div className="bg-surface-container-lowest h-full p-10 rounded-lg flex flex-col w-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Most Popular
              </div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Premium</h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">$12</span>
                  <span className="text-on-surface-variant text-sm">/mo</span>
                </div>
              </div>
              <div className="flex-grow">
                <ul className="space-y-5">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary size-5 flex items-center justify-center text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-on-surface font-medium">Dynamic QR</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary size-5 flex items-center justify-center text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-on-surface font-medium">Full Analytics Dashboard</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary size-5 flex items-center justify-center text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-on-surface font-medium">No Ads</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary size-5 flex items-center justify-center text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-on-surface font-medium">SVG/PDF High-Res Exports</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary size-5 flex items-center justify-center text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-on-surface font-medium">Custom Branding</span>
                  </li>
                </ul>
              </div>
              <button className="mt-12 w-full py-4 primary-gradient text-white rounded-lg font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-all cursor-pointer">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Credibility Section */}
      <section className="max-w-6xl mx-auto px-8 mb-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-outline-variant/10 pt-20">
        <div className="space-y-4">
          <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
          <h3 className="font-bold text-xl">Privacy-First</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">Your data and your users' privacy are our highest priority. Encrypted connections and secure storage come standard.</p>
        </div>
        <div className="space-y-4">
          <span className="material-symbols-outlined text-primary text-3xl">monitoring</span>
          <h3 className="font-bold text-xl">Real-Time Insights</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">Track scans by location, device type, and time. Understand your audience with high-fidelity digital artifacts.</p>
        </div>
        <div className="space-y-4">
          <span className="material-symbols-outlined text-primary text-3xl">history</span>
          <h3 className="font-bold text-xl">Unlimited History</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">We keep your records forever. Never lose track of your digital journey with our curated history vault.</p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
