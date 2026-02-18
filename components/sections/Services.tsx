"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Cleaning Services",
    desc: "Professional cleaning solutions for residential, commercial and industrial spaces, delivered with reliability and attention to detail.",
    img: "/images/service-cleaning.jpg",
  },
  {
    title: "Hygiene Services",
    desc: "Professional hygiene solutions for residential, commercial and industrial spaces, delivered with reliability and strict compliance standards.",
    img: "/images/service-hygiene.jpg",
  },
  {
    title: "Pest Control Services",
    desc: "Professional pest control solutions for residential, commercial and industrial spaces, delivered with reliability and effective treatment methods.",
    img: "/images/service-pest.jpg",
  },
];

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect(); // reveal once
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section id="services" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold text-red-600">What We Do</p>
          <h2 className="mt-2 text-3xl font-extrabold text-blue-900 md:text-4xl">
            Our Core Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            Tailored solutions designed to keep your environment clean, safe and compliant.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={[
                "group relative overflow-hidden rounded-2xl bg-white shadow-lg",
                "transition duration-700 ease-out will-change-transform",
                "hover:-translate-y-3 hover:shadow-2xl",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              ].join(" ")}
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-blue-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {s.desc}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-block rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Request Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
