import React from 'react';

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      {/* Hero Section */}
      <section className="py-24 flex flex-col items-start max-w-3xl">
        <span className="text-primary font-bold tracking-[0.05em] text-xs uppercase mb-4 px-3 py-1 bg-primary/5 rounded-full">Resources & Insights</span>
        <h1 className="text-6xl font-extrabold tracking-tight text-on-surface mb-6">
          Insights on QR Technology
        </h1>
        <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl">
          Explore the latest trends in digital connectivity, security protocols, and creative marketing strategies through the lens of QR tech.
        </p>
      </section>

      {/* Featured Post (Editorial Layout) */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-surface-container-low rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="md:col-span-7 rounded-xl overflow-hidden editorial-shadow">
            <img alt="Featured Post" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVkqs0oH5Nt6XVm7LuvPmdojBQbRhfgZETMzseEHKT2o2QxNN2NV_6LSJcNQ2bqVt-ALoBUwZpW98HW_vNsDb0fCnKceVXq_Naangzvndr-lfkUV00hxA0eVfazbmyuNsBtYoRS49ATE3LE5S9G2z3mV0aLA6t1znHhB9Y4JOjWDA2OgM3T90ENm7yAdrPR1DFFKCWNIDiM1O0wC742HtmffUOU5iJkPM_VJQRh7ld3pKQvr_EVk9GBdGGwzU-el-wLjzOW43IYt8"/>
          </div>
          <div className="md:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-primary font-semibold text-sm">Security</span>
              <span className="text-outline-variant text-sm">•</span>
              <span className="text-on-surface-variant text-sm">Oct 24, 2024</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 leading-tight">
              The Future of Secure Data Transfer: Encrypted Dynamic QR Codes
            </h2>
            <p className="text-on-surface-variant mb-8 line-clamp-3">
              As privacy becomes the cornerstone of the digital experience, EtherQR explores how dynamic encryption is redefining the boundaries of scannable information.
            </p>
            <a className="inline-flex items-center font-bold text-primary hover:gap-2 transition-all cursor-pointer">
              Read Full Story 
              <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mb-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Recent Articles</h3>
            <div className="h-1 w-12 primary-gradient mt-2 rounded-full"></div>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/20 hover:bg-surface-container-high transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-on-surface-variant">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/20 hover:bg-surface-container-high transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {/* Card 1 */}
          <article className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-surface-container-low editorial-shadow">
              <img alt="Marketing strategy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnHdDx0dI7DQLBt3i4p3imzHOXHYKsrzG4d_X608wRn_FfOV-ArRyoj5_l0wEEhRfC664XlpVJcu8zrn2GHo8qMLaCfwBYdVTqT0fCuzrQbXKFGGmPuViRLL_8hD7M1-hh4Zi-DPEVDyzactw7g6_HLWLMSOJBVGvh-iMN36AD3O7j72TSA1dZZzSKJ0JcrJjoJrSlzozh2crWgAk0_Esr6O5b7PIQCpKJK9DMHEjqmUvOv9zOii9C1GYFr9RixD4W0GBHsgl4JA8"/>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Marketing</span>
              <h4 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                5 Ways to Use QR Codes in Marketing
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Discover how top-tier brands are leveraging bridge-technology to connect physical touchpoints with digital luxury.
              </p>
              <span className="text-primary font-semibold text-sm inline-flex items-center pt-2">
                Read More <span className="material-symbols-outlined text-[18px] ml-1">arrow_outward</span>
              </span>
            </div>
          </article>
          {/* Card 2 */}
          <article className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-surface-container-low editorial-shadow">
              <img alt="Analytics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtwRrVPClQkUcbA-1g24PKq8gz1ceZVv_DrYDWSH5n-ZYaV2V2XLEjhTHkCB7c_otXernnPmGpY1eCOwISQSZYFaInwqGCrKoLQ2JrxcL2lDWCaBhE5sOcuSe2WLqr8rkGjGRBEwqss6TTHfNLojMyeW37nzGqUr4GtqNvD0Z_5Zh5VwFVW8tONxTCr0TcrYEsoqOHZq3Rj7TpV9TbbvLIk09qRzAFNCu8shdRB5Xauigpyoj2VrLR3KtlO-mBBghOkMMpd2V0MRs"/>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Analytics</span>
              <h4 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                Real-time Tracking: More Than Just Scans
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Unlocking the behavioral patterns hidden within every scan. How to read your audience without compromising privacy.
              </p>
              <span className="text-primary font-semibold text-sm inline-flex items-center pt-2">
                Read More <span className="material-symbols-outlined text-[18px] ml-1">arrow_outward</span>
              </span>
            </div>
          </article>
          {/* Card 3 */}
          <article className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-surface-container-low editorial-shadow">
              <img alt="Hospitality" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKleU4UMTusFYknug3m7MBGQNOB5KnoE-fB5QFLwfv3v3AtbQ_Ri0YHk_1hs5KFsv7ReZU2mJlNHkFt69CejOQs_v1J2NPHjHTdUOxD9I-zprgbqf80sEfR81PLjVmtSk-jxZRP-9Mbgxvyp5IYRNcvHSwBcr_PfFc_q9M4gJKtm4nwFHg0Bh8Sai9OTCnWViJMWowMO_IfFhuVvI-OeE0ramfvOC6sCkBqZ5UvZTda16j2xXdtE2pwnWzRr84vYUNzIbTzAm8Rjg"/>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Hospitality</span>
              <h4 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                The Contactless Revolution in Fine Dining
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                How dynamic menus and instant payments are elevating the guest experience in global culinary destinations.
              </p>
              <span className="text-primary font-semibold text-sm inline-flex items-center pt-2">
                Read More <span className="material-symbols-outlined text-[18px] ml-1">arrow_outward</span>
              </span>
            </div>
          </article>

          {/* Card 4 */}
          <article className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-surface-container-low editorial-shadow">
              <img alt="Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVa6vTPb0qEY9QrkRwJM9NLET25gablIkw7puLJgap6_ka7A_JmI17t2qAsrkxGsShXTWOaq5JqSBPCtPU7qkvc0mUqrINWoqt6TvzS37aEm3dZ0Y4eUzT4wxG6l6xQ0haNkfNPFjO4Lc3Eh_jYLr93yLc4phu4LVBjNYRxbhHVRIhYdPrV9qGTuavxhIbNQmaOH3IicLmd95V6Ksxlghrb57-NSi5QUJcZuaVYxdSVLkk7RAK3cc6M49-43JrbFPnp34ggoVYiTA"/>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Design</span>
              <h4 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                Aesthetics Matter: Customizing Your QR
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Moving beyond the black and white. Learn to integrate brand identity into scannable artifacts without losing utility.
              </p>
              <span className="text-primary font-semibold text-sm inline-flex items-center pt-2">
                Read More <span className="material-symbols-outlined text-[18px] ml-1">arrow_outward</span>
              </span>
            </div>
          </article>
          {/* Card 5 */}
          <article className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-surface-container-low editorial-shadow">
              <img alt="Technology" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByjhSsHP5z-vN16_A3YJr3pLQSCFkLxYXuZ06MwBQmvYGLsGX-PeiA_vNh1qYbNa--Mv2UmMQW0seDv9vtcDAmv-DaitpfLGYtiaSwvWtITfkhBIprhqUeSk5vzcgMJHsatAcNoHcS92TWr4ZP8zHC1x9eZIK5fqH1ze2ZbTJU5nHei23_uqGGiYQxEDSuW7Djn3251K-VE86LRTkH-ykTyKnvHbku6FQMrAQHXW46_rQEHqgELwgvKQZ7tozA-hxSkYij-qVYeMQ"/>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Technology</span>
              <h4 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                The API Economy: Automating Generation
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Deep dive into EtherQR's developer tools and how to scale QR generation for massive enterprise workflows.
              </p>
              <span className="text-primary font-semibold text-sm inline-flex items-center pt-2">
                Read More <span className="material-symbols-outlined text-[18px] ml-1">arrow_outward</span>
              </span>
            </div>
          </article>
          {/* Card 6 */}
          <article className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-surface-container-low editorial-shadow">
              <img alt="E-commerce" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAD2A0Xwaeu0Pip33hTHULJ8kDNy_Z4Z0v8p549VU-DStu57e52v_8z4_NkfopGbrYVW40Spt0M14P4us_2vCxzT5Se-XoX76690Fg7rj8ta5yGnt2luP6vaNZoh0d5sHU6uthGzupL4ighypP-5i0RzAEd8irRe5NaQe5y8J4PXvcMX1ucsn0mZR8Sp5O4Ifjlt9rm6-foWzX8tQc5PEsugU8Y5lip1nisKkvIQuPYp2a28yAxIbYB3p7wK1BhqnK_rizStwa-Wk"/>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">E-commerce</span>
              <h4 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                QR Codes and the Death of the Checkout
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                How "Scan-to-Pay" is simplifying the conversion funnel and reducing cart abandonment in physical retail.
              </p>
              <span className="text-primary font-semibold text-sm inline-flex items-center pt-2">
                Read More <span className="material-symbols-outlined text-[18px] ml-1">arrow_outward</span>
              </span>
            </div>
          </article>
        </div>

        {/* Pagination/Load More */}
        <div className="mt-20 flex justify-center">
          <button className="px-10 py-4 bg-surface-container-low text-on-surface font-semibold rounded-xl hover:bg-surface-container-high transition-all editorial-shadow active:scale-95 cursor-pointer">
            Load Older Insights
          </button>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="mb-32 bg-primary rounded-[40px] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <circle cx="100" cy="0" fill="white" r="100"></circle>
          </svg>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Stay ahead of the curve.</h2>
            <p className="text-blue-100 text-lg">Receive a curated monthly digest of QR trends and digital security updates.</p>
          </div>
          <div className="w-full max-w-md">
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
              <input className="flex-1 px-6 py-4 rounded-xl bg-white border-none focus:ring-4 focus:ring-white/20 text-on-surface placeholder:text-outline outline-none" placeholder="Your work email" type="email" />
              <button className="bg-on-surface text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg active:scale-95 cursor-pointer">Subscribe</button>
            </form>
            <p className="text-blue-200 text-xs mt-4 text-center sm:text-left">By subscribing, you agree to our Privacy Policy.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
