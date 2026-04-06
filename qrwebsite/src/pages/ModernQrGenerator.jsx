import React from 'react';

const ModernQrGenerator = () => {
  return (
    <div className="pt-16 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Input & Configuration */}
        <div className="lg:col-span-7 space-y-12">
          {/* Hero Header */}
          <header className="space-y-4">
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface">
              Generate with <span className="text-primary">Clarity.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed">
              Create high-resolution, architectural QR codes for physical and digital experiences in seconds.
            </p>
          </header>

          {/* Type Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            <button className="bg-primary-fixed text-on-primary-fixed px-6 py-2.5 rounded-full font-label text-sm font-semibold transition-all cursor-pointer">URL</button>
            <button className="bg-surface-container-high text-on-surface-variant px-6 py-2.5 rounded-full font-label text-sm font-semibold hover:bg-surface-container-highest transition-all cursor-pointer">Text</button>
            <button className="bg-surface-container-high text-on-surface-variant px-6 py-2.5 rounded-full font-label text-sm font-semibold hover:bg-surface-container-highest transition-all cursor-pointer">WiFi</button>
            <button className="bg-surface-container-high text-on-surface-variant px-6 py-2.5 rounded-full font-label text-sm font-semibold hover:bg-surface-container-highest transition-all cursor-pointer">VCard</button>
            <button className="bg-surface-container-high text-on-surface-variant px-6 py-2.5 rounded-full font-label text-sm font-semibold hover:bg-surface-container-highest transition-all cursor-pointer">Email</button>
          </div>

          {/* Input Zone */}
          <div className="space-y-6">
            <div className="relative">
              <label className="block font-label text-xs uppercase tracking-widest text-outline mb-3 ml-1">Destination URL</label>
              <input className="w-full h-20 px-8 rounded-lg bg-surface-container-lowest ghost-border focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-xl font-body" placeholder="https://your-ethereal-link.com" type="text" />
            </div>
          </div>

          {/* Bento Grid Customization Features (Visual Depth) */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-surface-container-low p-8 rounded-lg space-y-4">
              <span className="material-symbols-outlined text-primary text-3xl">palette</span>
              <h3 className="font-headline font-bold text-lg">Dynamic Colors</h3>
              <p className="text-sm text-on-surface-variant leading-snug">Adapt QR colors to your brand palette instantly.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-lg space-y-4">
              <span className="material-symbols-outlined text-primary text-3xl">branding_watermark</span>
              <h3 className="font-headline font-bold text-lg">Center Logo</h3>
              <p className="text-sm text-on-surface-variant leading-snug">Embed high-res SVGs directly into the center pattern.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Preview & Action */}
        <div className="lg:col-span-5 lg:sticky top-32 flex flex-col items-center">
          {/* QR Code Stage */}
          <div className="relative w-full aspect-square max-w-md bg-surface-container-lowest rounded-lg ambient-shadow flex items-center justify-center p-12 group transition-all hover:scale-[1.01]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-lg pointer-events-none"></div>
            {/* Placeholder for QR Code (Pure CSS/Visual) */}
            <div className="w-full h-full relative p-4 bg-white border-8 border-white rounded-xl">
              <img alt="minimalist high resolution QR code" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Q_ovE102ERgxdoBaU3v3JChqkG7dHPuQUG_k_cD1ucAIPKiLBnVceD0kcLZ2-6foMnK4mzfA2XAmwfoKhMk9CqEbuFqWRfN8GlyHIry5R-jG1mB3mu6TDOGuisVpG56MgGrdqEH91uk5c78U1WJFFdmLTth2w5MRt-vW_qnlRFFKjb7RswqNmgz8ipylBoyesGkdnojSHPZhTdXpA6I2aPgOzBn9TZIvE530rJ3LwtPAHTRwcncqmPB5UHJ9oHuCdZNoS1GtiX0" />
              {/* Floating Side Toggle */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                <button className="w-12 h-12 bg-surface-container-lowest ambient-shadow rounded-full flex items-center justify-center text-primary hover:bg-primary-fixed transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">settings_suggest</span>
                </button>
              </div>
            </div>
          </div>

          {/* Customization Panel (Floating Sidebar Style) */}
          <div className="mt-12 w-full max-w-md bg-surface-container-low p-6 rounded-lg ghost-border">
            <div className="flex justify-between items-center mb-6">
              <span className="font-headline font-bold">Customize Design</span>
              <span className="text-xs font-label uppercase tracking-widest text-outline">Pro Feature</span>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="h-10 w-10 rounded-full bg-slate-900 ring-2 ring-offset-2 ring-primary cursor-pointer"></div>
              <div className="h-10 w-10 rounded-full bg-blue-600 cursor-pointer"></div>
              <div className="h-10 w-10 rounded-full bg-indigo-500 cursor-pointer"></div>
              <div className="h-10 w-10 rounded-full border-2 border-dashed border-outline-variant flex items-center justify-center text-outline cursor-pointer">
                <span className="material-symbols-outlined text-sm">add</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-lg border border-primary/10">
              <span className="material-symbols-outlined text-primary">add_photo_alternate</span>
              <div className="flex-1">
                <p className="text-sm font-semibold">Upload Brand Logo</p>
                <p className="text-[10px] text-outline uppercase tracking-wider">SVG, PNG or JPEG</p>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mt-12 w-full max-w-md">
            <button className="primary-gradient w-full py-6 rounded-full text-white font-headline font-bold text-xl ambient-shadow hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 cursor-pointer">
              Download QR
              <span className="material-symbols-outlined">download</span>
            </button>
            <p className="mt-4 text-center text-xs text-on-surface-variant font-label tracking-wide uppercase opacity-60">High Resolution Vector (SVG, PDF, PNG)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernQrGenerator;
