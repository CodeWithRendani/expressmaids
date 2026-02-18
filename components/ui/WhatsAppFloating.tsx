"use client";

export default function WhatsAppFloating() {
  const phone = "27724882037"; // +27 72 488 2037 (no +, no spaces)

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(
        "Hi ExpressMaids, I would like to request a quote."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ExpressMaids on WhatsApp"
      className="fixed bottom-6 right-6 z-[999] group"
    >
      <div className="flex items-center gap-3 rounded-full bg-green-600 px-4 py-3 shadow-xl hover:bg-green-700 transition">
        <WhatsAppIcon />
        <span className="hidden sm:block text-sm font-semibold text-white">
          WhatsApp Us
        </span>
      </div>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="22"
      height="22"
      fill="currentColor"
      className="text-white"
      aria-hidden="true"
    >
      <path d="M19.11 17.41c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
      <path d="M16.02 3C9.39 3 4 8.38 4 15.02c0 2.12.55 4.19 1.6 6.02L4 29l8.14-1.57c1.77.97 3.77 1.48 5.88 1.48 6.63 0 12.02-5.39 12.02-12.02C30.04 8.38 22.65 3 16.02 3zm0 23.09c-1.94 0-3.84-.52-5.49-1.5l-.39-.23-4.83.93.93-4.71-.25-.41a10.15 10.15 0 0 1-1.56-5.45c0-5.59 4.55-10.14 10.14-10.14 5.59 0 10.14 4.55 10.14 10.14 0 5.59-4.55 10.14-10.14 10.14z" />
    </svg>
  );
}
