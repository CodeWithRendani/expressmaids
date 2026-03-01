"use client";

import Image from "next/image";

const logos = [
  { src: "/images/boldpearl.png", alt: "Bold Pearl" },
  { src: "/images/southpoint.png", alt: "South Point" },
];

// repeat a lot so it looks like many
const row = Array.from({ length: 12 }).flatMap(() => logos);
// duplicate again so the animation is seamless
const track = [...row, ...row];

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

          {/* Continuous moving track */}
          <div className="client-marquee flex w-max items-center">
            {track.map((l, i) => (
              <Logo key={i} src={l.src} alt={l.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-4 flex h-20 w-44 items-center justify-center rounded-2xl bg-white px-6 shadow-sm ring-1 ring-black/5">
      <Image
        src={src}
        alt={alt}
        width={200}
        height={100}
        className="max-h-14 w-auto object-contain"
      />
    </div>
  );
}