import React from 'react';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[100] items-end pointer-events-none">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919177317253"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 pointer-events-auto"
        aria-label="Contact us on WhatsApp"
      >
        <span className="bg-white text-green-600 px-4 py-2 rounded-full text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 hidden md:block">
          WhatsApp Us
        </span>
        <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.038 3.041l-.694 2.548 2.621-.687c.731.398 1.734.705 2.803.706l.003-.001c3.182 0 5.767-2.587 5.768-5.766 0-3.18-2.585-5.766-5.766-5.767zm3.303 8.303c-.113.318-.656.58-1.016.617-.34.034-.733.074-2.327-.539-1.7-.652-2.775-2.418-2.851-2.52s-.655-.87-.655-1.676c0-.805.42-.12.504-.21.084-.09.184-.112.246-.112.062 0 .124.001.178.006.059.005.138-.024.216.14.078.163.267.653.29.702.023.049.038.107.006.172-.032.065-.048.11-.097.16-.047.05-.1.112-.143.15-.045.044-.091.092-.039.181.052.089.231.381.497.617.342.304.63.398.718.441.087.043.138.036.19-.022.052-.058.225-.262.285-.35.06-.088.119-.074.201-.044.082.03.523.246.612.29.089.044.148.066.17.104.022.038.022.22-.091.538zM12.006 2C6.471 2 2 6.471 2 12c0 1.92.544 3.707 1.488 5.225L2 22l4.904-1.284c1.543.832 3.3 1.284 5.102 1.284l.001-.001c5.535 0 10.006-4.471 10.006-10.006 0-5.529-4.472-10-10.007-10z"/>
          </svg>
        </div>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919177317253"
        className="group flex items-center gap-3 pointer-events-auto"
        aria-label="Call us"
      >
        <span className="bg-white text-primary px-4 py-2 rounded-full text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 hidden md:block">
          Call Now
        </span>
        <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
          <span className="material-symbols-outlined text-3xl">call</span>
        </div>
      </a>
    </div>
  );
};

export default FloatingActions;
