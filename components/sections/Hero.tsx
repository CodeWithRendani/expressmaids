import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="ExpressMaids cleaning services"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-900/70" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
            Cleaning • Hygiene • Pest Control
          </p>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Professional Cleaning, Hygiene & Pest Control Services
          </h1>

          <p className="mt-5 text-base leading-relaxed text-white/85 md:text-lg">
            ExpressMaids provides reliable services tailored to your needs with a
            strong focus on quality, professionalism and compliance.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700"
            >
              Request a Quote
            </a>
            <a
              href="#services"
              className="rounded-lg border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
            >
              View Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <Badge title="Professionalism" />
            <Badge title="Customer Satisfaction" />
            <Badge title="Compliance" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ title }: { title: string }) {
  return (
    <div className="rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur">
      {title}
    </div>
  );
}
