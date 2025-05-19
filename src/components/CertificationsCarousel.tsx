'use client';

import Image from 'next/image';

export default function CertificationsCarousel() {

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-accent via-primary to-accent text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Certifications</h2>
        <div className="mt-10 flex justify-center">
          <a
            href="https://www.credly.com/badges/a674301e-8cc2-4f89-aeff-407012af1ae3/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-3xl p-6 transform transition-transform duration-300 hover:scale-105 text-center text-primary"
          >
            <Image
              src="/images/ccna-badge.jpg"
              alt="CCNA Certification Badge"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="text-xl font-bold mt-4">Cisco Certified Network Associate (CCNA)</h3>
          </a>
        </div>
      </div>
    </section>

);
}

{/* <section className="py-20 px-6 bg-gradient-to-r from-accent via-primary to-accent text-white">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold">Certifications</h2>

    <div className="relative mt-10">
      <div
        id="cert-carousel"
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 w-full px-2 pb-4 scrollbar-hide"
      >
        <a
          href="https://www.credly.com/badges/a674301e-8cc2-4f89-aeff-407012af1ae3/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-md rounded-3xl p-6 min-w-[280px] flex-shrink-0 snap-center transform transition-transform duration-300 hover:scale-105 text-center text-primary"
        >
          <Image
            src="/images/ccna-badge.jpg"
            alt="CCNA Certification Badge"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h3 className="text-xl font-bold mt-4">Cisco Certified Network Associate (CCNA)</h3>
        </a>

        <div className="bg-white shadow-md rounded-3xl p-6 min-w-[280px] flex-shrink-0 snap-center text-center animate-pulse opacity-80">
          <Image
            src="/images/ccnp-badge.png"
            alt="CCNP Badge Placeholder"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h3 className="text-xl font-bold mt-4 text-gray-600">CCNP — In Progress</h3>
          <p className="text-sm text-gray-400 mt-2">Studying hard... 📚</p>
        </div>
      </div>

    </div>
  </div>
</section> */}