import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="mb-4 font-bold inline-block">
              {/* <Image
                src="/images/recycled_logo.svg"
                alt="Used Car Parts Recycled LLC"
                width={180}
                height={40}
              /> */}
              Parts Recycled LLC
            </Link>
            <p className="mb-4 text-gray-400">
              Your trusted source for quality used auto parts at competitive
              prices.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          {/* Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              INFORMATION
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600"></span>
            </h3>
            <ul className="space-y-3">
              {/* <li>
                <Link
                  href="/about"
                  className="text-red-600 hover:text-red-400 transition-colors"
                >
                  About Us
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/contact"
                  className="text-red-600 hover:text-red-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li> */}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-red-600 hover:text-red-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/shipping-policy"
                  className="text-red-600 hover:text-red-400 transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-red-600 hover:text-red-400 transition-colors"
                >
                  Refund/Return Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-red-600 hover:text-red-400 transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          {/* <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-primary">
                  Shop All Parts
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop/engine-parts"
                  className="text-gray-400 hover:text-primary"
                >
                  Engine Parts
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/transmission"
                  className="text-gray-400 hover:text-primary"
                >
                  Transmission
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/body-parts"
                  className="text-gray-400 hover:text-primary"
                >
                  Body Parts
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/electrical"
                  className="text-gray-400 hover:text-primary"
                >
                  Electrical
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/interior"
                  className="text-gray-400 hover:text-primary"
                >
                  Interior
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span className="text-gray-400">
                  1105 E George St
                  <br />
                  Itasca, IL 60143
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <a
                  href="tel:+18005551234"
                  className="text-gray-400 hover:text-primary"
                >
                  (800) 838-3058
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <a
                  href="mailto:info@usedcarpartsrecycled.com"
                  className="text-gray-400 hover:text-primary"
                >
                  partsrecycledllc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Used Car Parts Recycled LLC. All
              rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-400 hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                href="/shipping-policy"
                className="text-sm text-gray-400 hover:text-primary"
              >
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
