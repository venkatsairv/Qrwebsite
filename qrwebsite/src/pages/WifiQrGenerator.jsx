import React from 'react';

const WifiQrGenerator = () => {
  return (
    <div className="selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Hero & Generator Section */}
      <section className="pt-16 pb-24 px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.05em] uppercase rounded-full bg-secondary-container text-on-secondary-container">
            Secure Utility
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6">
            Create Your WiFi QR Code
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Enter your network details to generate a secure WiFi QR code for your guests. No more manual password typing.
          </p>
        </div>

        {/* Generator Canvas */}
        <div className="bg-surface-container-low rounded-[24px] p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Form Side */}
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold tracking-wider uppercase text-on-surface-variant mb-3">Network SSID</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">router</span>
                  <input className="w-full pl-12 pr-4 py-4 rounded-lg bg-surface-container-lowest border border-outline-variant border-opacity-20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200" placeholder="e.g. Home_Network_5G" type="text" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold tracking-wider uppercase text-on-surface-variant mb-3">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                  <input className="w-full pl-12 pr-4 py-4 rounded-lg bg-surface-container-lowest border border-outline-variant border-opacity-20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200" placeholder="••••••••••••" type="password" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold tracking-wider uppercase text-on-surface-variant mb-3">Encryption Type</label>
                <div className="grid grid-cols-3 gap-4">
                  <button className="py-3 px-4 rounded-lg bg-primary text-white font-semibold text-sm cursor-pointer">WPA/WPA2</button>
                  <button className="py-3 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant border-opacity-20 text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors cursor-pointer">WEP</button>
                  <button className="py-3 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant border-opacity-20 text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors cursor-pointer">None</button>
                </div>
              </div>
              <button className="w-full primary-gradient text-white py-5 rounded-lg font-bold text-lg shadow-lg active:scale-[0.99] transition-all cursor-pointer">
                Generate WiFi QR
              </button>
            </div>

            {/* Preview Side */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-surface-container-lowest p-8 rounded-[24px] soft-lift relative group">
                <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-xl shadow-lg">
                  <span className="material-symbols-outlined">wifi</span>
                </div>
                <img alt="WiFi QR Code Preview" className="w-64 h-64 opacity-20 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZUFbqMAzs6p6lgLUoF8oenB6ZmcBFrtw-AmVNjkjfrW3IBO1-9XjxZilI0UloxLxZtj-QLoP3Axx1boZAgvOsniWjgg2bIHqZ1XZEZxCx7thALfaWaDETnwyUZ5mqha1BRxESjRiTt77jRh8-a7QCZTEY52_LqCU1JRRoGHmGhnqY1IQ-ZB5CYAoiO1u3RbcoSnMv3XWawy9_jTAL1C3qG7JYi7rPyhl2NZkfpMPpzifiG6QAZmEmxYzIFeSH-Rkv8pSZMd0FKkA" />
                <div className="mt-6 text-center">
                  <p className="text-sm font-bold text-outline uppercase tracking-widest">Preview Area</p>
                  <p className="text-xs text-on-surface-variant mt-1 italic">Enter details to update</p>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-outline-variant border-opacity-30 text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-sm">download</span> SVG
                </button>
                <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-outline-variant border-opacity-30 text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-sm">print</span> Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section: Editorial Layout */}
      <section className="bg-surface-container-lowest py-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface leading-tight">
              Seamless Connectivity for a Modern World
            </h2>
            <div className="mt-8 w-12 h-1 bg-primary"></div>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-on-surface">The Guest Experience</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Manually entering complex WiFi passwords is a friction point that can frustrate guests and clients. By utilizing EtherQR's secure WiFi generator, you provide a frictionless "scan-to-connect" experience. It's the digital equivalent of a warm welcome, ensuring your visitors stay connected without the hassle of deciphering handwritten notes or long character strings.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-on-surface">Security & Encryption</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Our generator supports all modern encryption standards, including WPA2 and the newer WPA3 protocols. When you generate a code with EtherQR, the sensitive data is encoded directly into the artifact, allowing mobile devices to interpret and execute the connection request locally. This eliminates the risk of password interception and ensures your private credentials remain within your physical space.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-primary">
              <p className="text-lg font-medium text-on-surface italic">
                "WiFi QR codes are no longer just a convenience; they are a hallmark of a tech-forward home or business environment. They bridge the gap between physical space and digital accessibility."
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-widest text-primary">— Digital Artifacts Quarterly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid (Bento Style) */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Item 1 */}
          <div className="md:col-span-2 bg-surface-container-high rounded-[24px] p-10 flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>privacy_tip</span>
              <h4 className="text-2xl font-bold mb-4">Privacy-First Architecture</h4>
              <p className="text-on-surface-variant max-w-md">Your WiFi credentials are never stored on our servers. The generation happens in your browser, ensuring total privacy for your home network.</p>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[200px]">shield</span>
            </div>
          </div>
          {/* Bento Item 2 */}
          <div className="bg-primary-container rounded-[24px] p-10 text-white flex flex-col justify-center text-center">
            <span className="material-symbols-outlined text-5xl mb-4">qr_code_2</span>
            <h4 className="text-xl font-bold mb-2">High Resolution</h4>
            <p className="text-primary-fixed-dim text-sm">Download your QR codes in vector SVG formats for high-quality printing on decals or cards.</p>
          </div>
          {/* Bento Item 3 */}
          <div className="bg-surface-container-lowest rounded-[24px] p-10 soft-lift border border-outline-variant border-opacity-10">
            <h4 className="text-xl font-bold mb-4">Why use EtherQR?</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span className="text-on-surface-variant text-sm font-medium">No account required for basic generation</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span className="text-on-surface-variant text-sm font-medium">Custom branding and logo insertion</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span className="text-on-surface-variant text-sm font-medium">Permanent codes that never expire</span>
              </li>
            </ul>
          </div>
          {/* Bento Item 4 */}
          <div className="md:col-span-2 bg-surface-container-low rounded-[24px] p-10 flex items-center justify-between">
            <div className="max-w-xs">
              <h4 className="text-xl font-bold mb-2">Ready to expand?</h4>
              <p className="text-on-surface-variant text-sm">Explore our professional API and templates for business-scale QR management.</p>
            </div>
            <button className="bg-on-surface text-surface px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all cursor-pointer">Explore API</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WifiQrGenerator;
