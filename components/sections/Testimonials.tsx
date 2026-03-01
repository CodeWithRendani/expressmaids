"use client";

import Image from "next/image";

const logos = [
  { src: "/images/boldpearl.png", alt: "Bold Pearl" },
  { src: "/images/southpoint.png", alt: "South Point" },
];

// repeat to look like many
const repeated = Array.from({ length: 10 }).flatMap(() => logos);

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold text-red-600">Our Clients</p>
        <h2 className="mt-2 text-3xl font-extrabold text-blue-900 md:text-4xl">
          Trusted By Leading Brands
        </h2>

        <div className="relative mt-12 w-full overflow-hidden">
          {/* soft edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent" />

          {/* Track A */}
          <div className="marquee-track marquee-a">
            {repeated.map((l, i) => (
              <Logo key={`a-${i}`} src={l.src} alt={l.alt} />
            ))}
          </div>

          {/* Track B (same items, offset) */}
          <div className="marquee-track marquee-b">
            {repeated.map((l, i) => (
              <Logo key={`b-${i}`} src={l.src} alt={l.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-6 inline-flex items-center justify-center rounded-2xl bg-white px-10 py-6 shadow-sm ring-1 ring-black/5">
      <Image
        src={src}
        alt={alt}
        width={180}
        height={80}
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}