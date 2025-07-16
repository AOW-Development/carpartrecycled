"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X, User, Search } from "lucide-react";
import { useCart } from "@/context/cart-context";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/parts-selection" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo_PR.svg"
              alt="Used Car Parts Recycled LLC"
              width={230}
              height={50}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-base font-bold transition-colors hover:text-primary ${
                  pathname === item.path ? "text-primary" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/search" className="text-gray-700 hover:text-primary">
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Link>
            <Link href="/account" className="text-gray-700 hover:text-primary">
              <User className="h-6 w-6" />
              <span className="sr-only">Account</span>
            </Link>
            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-primary"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-black">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="ml-2 rounded-md p-2 text-gray-700 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  pathname === item.path
                    ? "bg-primary text-black"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
