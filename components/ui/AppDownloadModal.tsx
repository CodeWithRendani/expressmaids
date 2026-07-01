"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.afriwex.expressmaids";

const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
  playStoreUrl
)}`;

export default function AppDownloadModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hidden = localStorage.getItem("expressmaids_app_modal_hidden");

    if (!hidden) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setOpen(false);
  };

  const dontShowAgain = () => {
    localStorage.setItem("expressmaids_app_modal_hidden", "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl">
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 rounded-full bg-gray-100 px-3 py-1 text-gray-600 hover:bg-gray-200"
          aria-label="Close app download popup"
        >
          ✕
        </button>

        <div className="mx-auto flex justify-center">
          <Image
            src="/images/logo.png"
            alt="ExpressMaids logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        <h2 className="mt-5 text-2xl font-extrabold text-blue-900">
          Download the ExpressMaids App
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Get the ExpressMaids mobile app for a faster and easier service
          booking experience.
        </p>

        <div className="mt-5 flex justify-center">
          <img
            src={qrCodeUrl}
            alt="Scan QR code to download ExpressMaids app"
            width={180}
            height={180}
            className="rounded-xl border border-gray-200 p-2"
          />
        </div>

        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700"
        >
          Download on Google Play
        </a>

        <button
          onClick={dontShowAgain}
          className="mt-4 text-sm font-semibold text-gray-500 hover:text-blue-900"
        >
          Don&apos;t show again
        </button>
      </div>
    </div>
  );
}