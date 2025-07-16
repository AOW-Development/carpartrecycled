import { SearchForm } from "@/components/search-form";
import { FeaturedCategories } from "@/components/featured-categories";
import { BrandLogos } from "@/components/brand-logos";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/car_banner.jpg"
            alt="Engine background"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Quality Engines & Transmissions
          </h1>
          <p className="mb-8 text-xl text-white md:text-2xl">
            Find the perfect engine or transmission for your vehicle
          </p>

          <div className="w-full max-w-7xl rounded-lg bg-black/70 p-6">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <BrandLogos />
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Popular Categories
          </h2>
          <FeaturedCategories />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose Used Auto Parts Pro
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Tested & Verified</h3>
              <p className="text-gray-600">
                All engines and transmissions thoroughly tested before listing
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                Save up to 70% compared to new OEM engines and transmissions
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Warranty Included</h3>
              <p className="text-gray-600">
                All engines and transmissions come with 30-120 day warranties
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Fast Shipping</h3>
              <p className="text-gray-600">
                Nationwide delivery with tracking for all engines and
                transmissions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Need Help Finding the Right Part?
          </h2>
          <p className="mb-8 text-lg">
            Call us today at (800) 838-3058 for expert assistance
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="tel:+18008383058"
              className="rounded-md bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="rounded-md border border-white bg-transparent px-6 py-3 font-semibold text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
