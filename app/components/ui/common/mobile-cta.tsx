"use client";

import Link from "next/link";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
      <Link
        href="tel:+1234567890"
        className="bg-[var(--color-primary)] text-white text-lg px-8 py-4 rounded-full shadow-lg hover:bg-secondary transition-colors font-semibold flex items-center space-x-2"
      >
        <span>📞</span>
        <span className="whitespace-nowrap">Call Now to Practice</span>
      </Link>
    </div>
  );
};

export default MobileCTA;
