"use client";

import Image from "next/image";

const logos = [
  { src: "/images/boldpearl.png", alt: "Bold Pearl" },
  { src: "/images/southpoint.png", alt: "South Point" },
];

// Repeat to look like many clients
const repeated = Array.from({ length: 12 }).flatMap(() => logos);

export default function Testimonials() {
  return (
    <section className="overflow-hidden py-12 bg-blue-900/5">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold text-red-600">Our Clients</p>
        <h2 className="mt-2 text-2xl font-extrabold text-blue-900 md:text-3xl">
          Trusted By Leading Brands
        </h2>

        <div className="relative mt-8 w-full overflow-hidden">
          {/* soft edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-blue-900/5 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-blue-900/5 to-transparent" />

          {/* Track A */}
          <div className="marquee-track marquee-a">
            {repeated.map((l, i) => (
              <Logo key={`a-${i}`} src={l.src} alt={l.alt} />
            ))}
          </div>

          {/* Track B */}
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
    <div className="mx-4 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 shadow-sm ring-1 ring-black/5">
      <Image
        src={src}
        alt={alt}
        width={180}
        height={80}
        className="h-9 w-auto object-contain"
      />
    </div>
  );
}