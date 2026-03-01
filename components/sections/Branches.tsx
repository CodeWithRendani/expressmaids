"use client";

import { useEffect, useRef, useState } from "react";

const branches = [
  {
    name: "Gauteng (Head Office)",
    address: "13 Starmvrug Street HB Forum, Watermeyer, Pretoria, 0002",
    phone: "+27 (0) 87 711 0227",
  },
  {
    name: "Polokwane Branch",
    address: "Limpopo Province, South Africa",
    phone: "+27 (0) 72 488 2037",
  },
  {
    name: "Burgersfort Branch",
    address: "Limpopo Province, South Africa",
    phone: "+27 (0) 72 488 2037",
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
        obs.disconnect();
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

export default function Branches() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section id="branches" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold text-red-600">Our Locations</p>
          <h2 className="mt-2 text-3xl font-extrabold text-blue-900 md:text-4xl">
            Our Branches Across South Africa
          </h2>
        </div>

        <div ref={ref} className="mt-12 grid gap-8 md:grid-cols-3">
          {branches.map((b, i) => (
            <div
              key={b.name}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={[
                "rounded-2xl bg-gray-50 p-6 shadow-md transition duration-700",
                "hover:-translate-y-2 hover:shadow-xl",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              ].join(" ")}
            >
              <h3 className="text-lg font-bold text-blue-900">{b.name}</h3>
              <p className="mt-3 text-sm text-gray-600">{b.address}</p>
              <p className="mt-2 text-sm font-semibold text-red-600">
                {b.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
