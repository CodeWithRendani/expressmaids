// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// const playStoreUrl =
//   "https://play.google.com/store/apps/details?id=com.afriwex.expressmaids";

// const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
//   playStoreUrl
// )}`;

// export default function AppDownloadModal() {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const hidden = localStorage.getItem("expressmaids_app_modal_hidden");

//     if (!hidden) {
//       const timer = setTimeout(() => {
//         setOpen(true);
//       }, 1000);

//       return () => clearTimeout(timer);
//     }
//   }, []);

//   const closeModal = () => {
//     setOpen(false);
//   };

//   const dontShowAgain = () => {
//     localStorage.setItem("expressmaids_app_modal_hidden", "true");
//     setOpen(false);
//   };

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
//       <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl">
//         <button
//           onClick={closeModal}
//           className="absolute right-4 top-4 rounded-full bg-gray-100 px-3 py-1 text-gray-600 hover:bg-gray-200"
//           aria-label="Close app download popup"
//         >
//           ✕
//         </button>

//         <div className="mx-auto flex justify-center">
//           <Image
//             src="/images/logo.png"
//             alt="ExpressMaids logo"
//             width={150}
//             height={50}
//             className="object-contain"
//           />
//         </div>

//         <h2 className="mt-5 text-2xl font-extrabold text-blue-900">
//           Download the ExpressMaids App
//         </h2>

//         <p className="mt-3 text-sm leading-relaxed text-gray-600">
//           Get the ExpressMaids mobile app for a faster and easier service
//           booking experience.
//         </p>

//         <div className="mt-5 flex justify-center">
//           <img
//             src={qrCodeUrl}
//             alt="Scan QR code to download ExpressMaids app"
//             width={180}
//             height={180}
//             className="rounded-xl border border-gray-200 p-2"
//           />
//         </div>

//         <a
//           href={playStoreUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-5 block rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700"
//         >
//           Download on Google Play
//         </a>

//         <button
//           onClick={dontShowAgain}
//           className="mt-4 text-sm font-semibold text-gray-500 hover:text-blue-900"
//         >
//           Don&apos;t show again
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.afriwex.expressmaids";

const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
  playStoreUrl
)}`;

export default function AppDownloadModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hidden = localStorage.getItem("expressmaids_app_modal_hidden");

    if (!hidden) {
      const timer = setTimeout(() => setOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => setOpen(false);

  const dontShowAgain = () => {
    localStorage.setItem("expressmaids_app_modal_hidden", "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/55 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-[360px] rounded-3xl bg-white p-5 shadow-2xl md:max-w-[680px] md:p-6">
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 hover:bg-gray-200"
          aria-label="Close app download popup"
        >
          ×
        </button>

        <div className="grid items-center gap-5 md:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center md:text-left">
            <Image
              src="/images/logo.png"
              alt="ExpressMaids logo"
              width={95}
              height={40}
              className="mx-auto h-auto md:mx-0"
            />

            <h2 className="mt-4 text-2xl font-extrabold leading-tight text-blue-900 md:text-3xl">
              Download the ExpressMaids App
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Book services, shop products and get cleaning tips from your phone.
            </p>

            <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row md:items-center">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download ExpressMaids on Google Play"
              >
                <Image
                  src="/images/google-play-badge.webp"
                  alt="Get it on Google Play"
                  width={155}
                  height={46}
                  className="h-auto w-[155px]"
                />
              </a>

              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scan QR code to download ExpressMaids app"
              >
                <img
                  src={qrCodeUrl}
                  alt="QR code to download ExpressMaids app"
                  width={105}
                  height={105}
                  className="rounded-xl border border-gray-200 p-1"
                />
              </a>
            </div>

            <button
              onClick={dontShowAgain}
              className="mt-4 text-sm font-semibold text-gray-500 hover:text-blue-900"
            >
              Don&apos;t show again
            </button>
          </div>

          <div className="hidden justify-center md:flex">
            <Image
              src="/images/app-phone.png"
              alt="ExpressMaids mobile app screen"
              width={190}
              height={310}
              className="h-auto w-[185px] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}