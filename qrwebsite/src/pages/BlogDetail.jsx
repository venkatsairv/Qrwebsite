import React from 'react';

const BlogDetail = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
      {/* Article Content */}
      <article className="lg:col-span-8 lg:col-start-2">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Marketing</span>
            <span className="text-on-surface-variant text-sm font-medium">5 min read</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-8">
            5 Ways to Use QR Codes in Marketing
          </h1>
          <div className="flex items-center gap-4 py-6 border-y border-outline-variant/20">
            <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
              <img alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4bIVeCgL0ebAxTAZ5pUf2M-q9fSklvisUqGJLGTWv9KIZkk8gQnlLG9PJ2EplcfRjNH7Hrr3l1-2WwbQ3Q3C-Q39966TfcSr2isO0S3GiTZvI4rTM5521JXqmp-9r54UehEv2bEGLjtmMGyShVBoVt2R3nR1AocSFwfdhX7Py0t-Zvi3DwUkn5hpKTK_xv41_SET1d9DanXUUfaIhvRrHSVTD4W2iAcl5sSDsPgGkQgxaOYPzuHBD8YhMjouC0RFrQjKLwJajIs8"/>
            </div>
            <div>
              <p className="text-on-surface font-bold">Julian Sterling</p>
              <p className="text-on-surface-variant text-sm italic">Published on May 24, 2024</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 bg-surface-container-low">
          <img alt="" className="w-full aspect-video object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-FHV5Zkb1eMcM3fEh0YxTiqXM1OVz2pV5Pg677_fNmMnMmSTkZYVxF-d_4cSC0tSCRP1DTbKXfp2qCPh4LkX9AyD6PzrLxiXsGdAdy8DK9-ghaamUGvV9_O-_9VdX1BLJUWnnxZ2PHCh2K-B7gS3gEJy6y7PV5m3ehFMSoQuij__0xRp4TH1cTIzM1HL8Q9GcCcPp09a4u_D4llQURjrWbfUW5AM4A-bkfZNv6qe5gZqkhNJaBMcfvYI4T0axEu6Kwlg4T_7NsKc"/>
        </div>

        {/* Body */}
        <div className="prose prose-lg max-w-none text-on-surface-variant space-y-8 leading-relaxed">
          <p className="text-xl leading-relaxed text-on-surface font-medium italic mb-12">
            QR codes have evolved from simple utility tools into powerful digital artifacts that bridge the gap between physical reality and digital experiences. Here is how you can leverage them to curate high-end customer journeys.
          </p>
          <h2 className="text-3xl font-bold text-on-surface mt-12 mb-4 tracking-tight">1. Enhancing Product Packaging</h2>
          <p>
            Modern luxury is about transparency and storytelling. By placing a minimal, aesthetically pleasing QR code on your product packaging, you allow customers to dive into the digital heritage of their purchase. Link them to high-definition videos showing the craftsmanship process or the sustainable sourcing of materials.
          </p>
          <h2 className="text-3xl font-bold text-on-surface mt-12 mb-4 tracking-tight">2. Contactless Experience Integration</h2>
          <p>
            In an era where convenience is the ultimate luxury, QR codes facilitate seamless interactions. From digital restaurant menus with real-time updates to interactive hotel room guides, the goal is to provide information without friction.
          </p>
          <div className="my-16 grid grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden bg-surface-container-low">
              <img alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3hH6oz70V43aZOFjA4mxMEICDG4OneMb2KARVdhTB43Ls3PCGIiD_4oUfyHmeUseLXfOlRcDqOlvKkEcbqSzYOg2uHh6_PnFkoFORAGeV3Gx4mIs_gssu7VIZyDg97VyAyyM6V89w9RJs7pbKLfMLUP_O-EQqM_GHT6oYxirAZE-mGfvz7T-DhkxYYSNXTjbfGvtkK0f0DR89SKH-DLpBVp3OVIiTQbroJuHvtV6QeYDWs_DcsPAB2mAz0PM1nKcQA3x-g-YdcWM"/>
            </div>
            <div className="rounded-xl overflow-hidden bg-surface-container-low">
              <img alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ9OmSwMYV9OTLa_oma0Xx50dSG4nsjqfTYc8KUm1dsf-NpTL7Lqd8ZJOjucpYhku5ru0CTa-T8pNexuExSkyHJ7wfaO2uNrGtVi8JFldqEksBhAGXDPGTirrNfCGkFDuUi67sQzFQbV_9pmAEgq-n6Rp8M0lAfQhVCuFtCGIUedqp21yyQgxXGxa9WsAnA_LVBpMiE7jNfRUu2pLPg5b3ya3g63fj8Znl7AfyG3wEk2CZFYC20wzqqiRwi6iL0bVR49r4n7MUCzM"/>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-on-surface mt-12 mb-4 tracking-tight">3. Gamifying Physical Locations</h2>
          <p>
            Transform a standard retail space into a digital scavenger hunt. By hiding "easter egg" QR codes throughout your store, you can offer exclusive digital artifacts, limited-time discounts, or access to private collections, turning shopping into a curated exploration.
          </p>
          <h2 className="text-3xl font-bold text-on-surface mt-12 mb-4 tracking-tight">4. Streamlining Social Proof</h2>
          <p>
            Encourage reviews and user-generated content at the point of delight. A strategically placed QR code at a checkout counter or on a delivery receipt can direct users straight to a feedback portal, capturing sentiment while the experience is fresh.
          </p>
          <h2 className="text-3xl font-bold text-on-surface mt-12 mb-4 tracking-tight">5. Event Access and Networking</h2>
          <p>
            Digital artifacts aren't just for products—they're for people. Use personalized QR codes on event badges to facilitate instant networking or on invitations to manage RSVPs with absolute precision and security.
          </p>
        </div>
      </article>

      {/* Sidebar CTA */}
      <aside className="lg:col-span-3 space-y-8">
        <div className="sticky top-32">
          <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 shadow-2xl shadow-primary/5">
            <div className="mb-6">
              <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>qr_code_2</span>
              <h3 className="text-2xl font-bold text-on-surface tracking-tight mb-3">Ready to create your own?</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Start generating professional, secure QR codes for free today. No hidden costs, just pure digital utility.
              </p>
            </div>
            <button className="w-full bg-[#2563EB] text-white py-4 px-6 rounded-xl font-bold text-lg hover:opacity-90 active:scale-[0.97] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 cursor-pointer">
              Go to Generator
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="mt-8 p-8 rounded-2xl bg-surface-container-low">
            <h4 className="font-bold text-on-surface mb-4">Related Articles</h4>
            <ul className="space-y-4">
              <li>
                <a className="group block cursor-pointer">
                  <p className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">The Security of Dynamic QR Codes</p>
                  <p className="text-xs text-on-surface-variant">3 min read</p>
                </a>
              </li>
              <li>
                <a className="group block cursor-pointer">
                  <p className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Designing Scannable Artifacts</p>
                  <p className="text-xs text-on-surface-variant">7 min read</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogDetail;
