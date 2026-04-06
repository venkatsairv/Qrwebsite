import React from 'react';

const ContactUs = () => {
  return (
    <div className="pb-24 pt-24 px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="pb-12 text-center text-on-surface-variant">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-4">Contact Us</span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6">Get in Touch</h1>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          Whether you have questions about our API, enterprise solutions, or just want to say hello, we're here to help you curate your digital artifacts.
        </p>
      </section>

      {/* Content Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Section */}
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 md:p-12 soft-lift">
          <form className="space-y-8" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-on-surface uppercase opacity-70">Full Name</label>
                <input className="w-full px-4 py-3 bg-surface-container-low rounded-lg ghost-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-outline-variant" placeholder="Alex Rivers" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-on-surface uppercase opacity-70">Email Address</label>
                <input className="w-full px-4 py-3 bg-surface-container-low rounded-lg ghost-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-outline-variant" placeholder="alex@example.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold tracking-wide text-on-surface uppercase opacity-70">Message</label>
              <textarea className="w-full px-4 py-3 bg-surface-container-low rounded-lg ghost-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-outline-variant resize-none" placeholder="How can we help you today?" rows="6"></textarea>
            </div>
            <button className="primary-gradient text-white w-full md:w-auto px-12 py-4 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer" type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* Sidebar / Support Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface-container-low rounded-xl p-8 space-y-8 text-on-surface-variant">
            <div>
              <h3 className="text-xl font-bold text-on-surface mb-2">Direct Support</h3>
              <p className="mb-4">Our dedicated team of digital curators is available 24/7 for technical inquiries.</p>
              <a className="flex items-center gap-3 text-primary font-bold group cursor-pointer">
                <span className="material-symbols-outlined">mail</span>
                <span className="group-hover:underline">support@etherqr.com</span>
              </a>
            </div>
            <div className="pt-8 border-t border-outline-variant border-opacity-20">
              <h3 className="text-xl font-bold text-on-surface mb-2">Help Center</h3>
              <p className="mb-4">Explore our extensive documentation and frequently asked questions.</p>
              <a className="flex items-center gap-3 text-primary font-bold group cursor-pointer">
                <span className="material-symbols-outlined">help_center</span>
                <span className="group-hover:underline">Visit Help Center</span>
              </a>
            </div>
            <div className="pt-8 border-t border-outline-variant border-opacity-20">
              <h3 className="text-xl font-bold text-on-surface mb-4">Our Commitment</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                </div>
                <span className="text-sm font-medium">Privacy-First Data Handling</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                </div>
                <span className="text-sm font-medium">Response under 12 hours</span>
              </div>
            </div>
          </div>

          {/* Decorative Card */}
          <div className="relative h-64 rounded-xl overflow-hidden soft-lift">
            <img alt="Office space" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEqaxwbDveMRHe_KeuFdanrOiFdceeYF3piF52N-7mEPpRog7SwjT8nWxguIGnSj1QoTIk7Fe1d8HvvkAbQ3NOaWJNTpUAzMyC8scO_ZQYjXKBrN-16jdj8CUP3NhBK5XaSwi7X274pjoD08_jIfP5aIKpbyRvBzNexy6E9peAtPd_Txlph7t5rXS4mV-z0wmqHDbFPSJ5KKHEkC4M9Pz0k1UZtRwimSeBHznytQDRTBTMhJKYpKqkok6ywyHX4NGBdRiLCwKdvg8"/>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-6">
              <p className="text-white font-bold text-lg">Curating your connections, one pixel at a time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
