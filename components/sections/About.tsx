import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-blue-900 md:text-4xl">
            About Expressmaids
          </h2>
        </div>

        {/* Row 1: Image left, text + mission right */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
            <div className="relative h-[320px] w-full">
              <Image
                src="/images/about-1.jpg"
                alt="ExpressMaids team and services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/25 to-transparent" />
            </div>
          </div>

          {/* Text + Mission Card */}
          <div>
            <p className="text-gray-600 leading-relaxed">
              Express Business Services (Pty) Ltd trading as ExpressMaids is a
              professional facilities services company providing cleaning,
              hygiene and pest control solutions across residential, commercial
              and industrial sectors.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We are committed to delivering reliable, compliant and high-quality
              services tailored to meet each client’s requirements, with a strong
              focus on professionalism, supervision and consistent standards.
            </p>

            {/* Mission Card */}
            <div className="mt-6 rounded-2xl bg-gray-50 p-6 shadow-md ring-1 ring-black/5">
              <p className="text-sm font-semibold text-red-600">Our Mission</p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                To provide reliable, high-quality cleaning and facilities services
                that promote safe, hygienic and productive environments through
                professionalism and excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Text left, image right */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl font-bold text-blue-900">
              Quality. Compliance. Customer Satisfaction.
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With a focus on continuous improvement, ExpressMaids ensures every
              project is handled with efficiency, attention to detail and industry
              best practices. We work closely with clients to maintain clean, safe
              and well-managed environments.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-900/10 px-4 py-2 text-sm font-semibold text-blue-900">
                Professional Team
              </span>
              <span className="rounded-full bg-blue-900/10 px-4 py-2 text-sm font-semibold text-blue-900">
                Structured Supervision
              </span>
              <span className="rounded-full bg-blue-900/10 px-4 py-2 text-sm font-semibold text-blue-900">
                Consistent Standards
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
            <div className="relative h-[320px] w-full">
              <Image
                src="/images/about-2.jpg"
                alt="Professional cleaning in progress"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/15 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
