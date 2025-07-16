import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
          About Us
        </h1>

        <div className="mb-12 overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=400&width=1000"
            alt="Our warehouse"
            width={1000}
            height={400}
            className="w-full object-cover"
          />
        </div>

        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">
            About Used Auto Parts Pro
          </h2>
          <p className="mb-6 text-gray-700">
            At Used Auto Parts Pro, we specialize in providing high quality used
            OEM automotive parts and accessories. We have a team of experts who
            are always available to provide quick, real-time advice, and we
            strive to offer the best parts at the most competitive prices.
            Contact us today for all your automotive replacement part needs.
          </p>
          <p className="mb-6 text-gray-700 text-lg font-medium">
            Call now at (800) 838-3058 and join the thousands of satisfied Used
            Auto Parts Pro customers.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">About Our Company</h2>
          <h3 className="mb-4 text-xl font-medium">
            Your Trusted Source for Quality Vehicle Parts
          </h3>
          <p className="mb-6 text-gray-700">
            At usedautoparts.pro, we stand as a pillar of trust in the world of
            automotive solutions. With an extensive inventory of top-tier
            vehicle parts, we're your dependable partner in keeping your
            vehicles running smoothly.
          </p>

          <h3 className="mb-4 text-xl font-medium">
            Why Choose Us for Your Automotive Needs?
          </h3>
          <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Unmatched Trust:</span>{" "}
              usedautoparts.pro has earned its name by consistently delivering
              reliable solutions. When you choose us, you're choosing peace of
              mind.
            </li>
            <li>
              <span className="font-medium">
                Vast Stocks, Instant Availability:
              </span>{" "}
              Searching for the right part ends here. Our substantial inventory
              ensures you get the parts you need, precisely when you need them.
            </li>
            <li>
              <span className="font-medium">Seamless Shipping:</span> Distance
              is no barrier. Our efficient shipping ensures that your required
              parts reach your doorstep promptly.
            </li>
            <li>
              <span className="font-medium">Committed to Quality:</span> Each
              part in our stock has met stringent quality standards. We believe
              in providing nothing less than excellence.
            </li>
          </ul>

          <h3 className="mb-4 text-xl font-medium">
            Your Journey, Our Priority
          </h3>
          <p className="mb-4 text-gray-700">
            Whether you're a car enthusiast, a mechanic, or someone needing a
            quick fix, we have your back. OurCompany.com isn't just a name; it's
            a commitment to quality, reliability, and your satisfaction.
          </p>
          <p className="text-gray-700">
            Experience the difference of working with a trusted name in the
            industry. Your journey deserves the best, and that's exactly what we
            offer.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Our Specialties</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-medium text-primary">Engines</h3>
              <p className="text-gray-700">
                We offer a wide selection of quality tested engines for all
                major vehicle makes and models. Each engine undergoes rigorous
                testing to ensure reliability and performance.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-medium text-primary">
                Transmissions
              </h3>
              <p className="text-gray-700">
                Our inventory includes automatic and manual transmissions for
                various vehicles. All transmissions are thoroughly inspected and
                tested before being made available for purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
