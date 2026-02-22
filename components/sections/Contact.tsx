// "use client";

// import { useEffect, useRef, useState } from "react";

// function useInView(options?: IntersectionObserverInit) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const obs = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setInView(true);
//         obs.disconnect();
//       }
//     }, options);

//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [options]);

//   return { ref, inView };
// }

// export default function Contact() {
//   const { ref, inView } = useInView({ threshold: 0.15 });

//   return (
//     <section id="contact" className="bg-gray-50">
//       <div className="mx-auto max-w-6xl px-6 py-20">
//         <div className="text-center">
//           <p className="text-sm font-semibold text-red-600">Get In Touch</p>
//           <h2 className="mt-2 text-3xl font-extrabold text-blue-900 md:text-4xl">
//             Tell Us About Your Needs
//           </h2>
//         </div>

//         <div
//           ref={ref}
//           className={[
//             "mt-12 grid gap-10 md:grid-cols-2 transition duration-700",
//             inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
//           ].join(" ")}
//         >
//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-bold text-blue-900">
//               Contact Information
//             </h3>

//             <p className="mt-4 text-gray-600">
//               Reach out to Expressmaids for professional cleaning, hygiene and
//               pest control services tailored to your needs.
//             </p>

//             <div className="mt-6 space-y-4 text-sm">
//               <p><strong>📞 Phone:</strong> +27 (0) 11 029 8744</p>
//               <p><strong>📱 Mobile:</strong> +27 (0) 72 488 2037</p>
//               <p><strong>✉ Email:</strong> info@expressmaids.co.za</p>
//               <p><strong>✉ Email:</strong> vicky@expressmaids.co.za</p>
//               <p><strong>📍 Address:</strong> 61 Ann Road, Clayville East, Olifantsfontein</p>
//             </div>

//             {/* WhatsApp Button */}
//             <a
//               href="https://wa.me/27724882037"
//               target="_blank"
//               className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>

//           {/* Contact Form */}
//           <div className="rounded-2xl bg-white p-6 shadow-md">
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//               />

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//               />

//               <textarea
//                 rows={4}
//                 placeholder="Your Message"
//                 className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//               />

//               <button
//                 type="submit"
//                 className="w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

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

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section id="contact" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold text-red-600">Get In Touch</p>
          <h2 className="mt-2 text-3xl font-extrabold text-blue-900 md:text-4xl">
            Tell Us About Your Needs
          </h2>
        </div>

        <div
          ref={ref}
          className={[
            "mt-12 grid gap-10 md:grid-cols-2 transition duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-900">
              Contact Information
            </h3>

            {/* Make this clearer on mobile, keep desktop same */}
            <p className="mt-4 text-gray-900 md:text-gray-600">
              Reach out to Expressmaids for professional cleaning, hygiene and
              pest control services tailored to your needs.
            </p>

            {/* Make contact details darker on mobile so they are readable */}
            <div className="mt-6 space-y-4 text-sm text-gray-900 md:text-gray-700">
              <p>
                <strong className="text-gray-900 md:text-gray-800">📞 Phone:</strong>{" "}
                +27 (0) 11 029 8744
              </p>
              <p>
                <strong className="text-gray-900 md:text-gray-800">📱 Mobile:</strong>{" "}
                +27 (0) 72 488 2037
              </p>
              <p>
                <strong className="text-gray-900 md:text-gray-800">✉ Email:</strong>{" "}
                info@expressmaids.co.za
              </p>
              <p>
                <strong className="text-gray-900 md:text-gray-800">✉ Email:</strong>{" "}
                vicky@expressmaids.co.za
              </p>
              <p>
                <strong className="text-gray-900 md:text-gray-800">📍 Address:</strong>{" "}
                61 Ann Road, Clayville East, Olifantsfontein
              </p>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/27724882037"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}