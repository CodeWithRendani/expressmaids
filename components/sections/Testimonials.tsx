"use client";

import Image from "next/image";

type ClientLogo = {
  src: string;
  alt: string;
};

const logos: ClientLogo[] = [
  { src: "/images/boldpearl.png", alt: "Bold Pearl" },
  { src: "/images/southpoint.png", alt: "South Point" },
  { src: "/images/tugela.png", alt: "Tugela" },
  { src: "/images/dmsa.jpg", alt: "DMSA" },
  { src: "/images/aeci.jpg", alt: "AECI" },
  { src: "/images/ers.PNG", alt: "ERS" },
  { src: "/images/firmenich.png", alt: "Firmenich" },
  { src: "/images/rexroth.PNG", alt: "Rexroth" },
  { src: "/images/hytec.PNG", alt: "Hytec" },
  { src: "/images/metrofibre.jpg", alt: "Metrofibre" },
  { src: "/images/srs.PNG", alt: "SRS" },
  { src: "/images/dymont.PNG", alt: "Dymont" },
  { src: "/images/health.png", alt: "Health" },
];

// repeat a lot so it looks like many
const row = Array.from({ length: 12 }).flatMap(() => logos);

// duplicate again so the animation is seamless
const track = [...row, ...row];

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-blue-900/5 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold text-red-600">Our Clients</p>
        <h2 className="mt-2 text-2xl font-extrabold text-blue-900 md:text-3xl">
          Trusted By Leading Brands
        </h2>

        <div className="relative mt-8 w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-blue-900/5 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-blue-900/5 to-transparent" />

          <div
            className="flex w-max items-center client-marquee-local"
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
          >
            {track.map((logo, index) => (
              <Logo
                key={`${logo.alt}-${index}`}
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .client-marquee-local {
          animation: clientMarqueeLeft 1000s linear infinite;
          will-change: transform;
        }

        @keyframes clientMarqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

function Logo({ src, alt }: ClientLogo) {
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