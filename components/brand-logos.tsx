import Image from "next/image";
import Link from "next/link";

export function BrandLogos() {
  const brands = [
    { name: "Toyota", logo: "/images/logo_1.png", href: "/shop?make=Toyota" },
    {
      name: "Honda",
      logo: "/images/logo_2.png",
      href: "/shop?make=Honda",
    },
    { name: "Ford", logo: "/images/logo_6.png", href: "/shop?make=Ford" },
    {
      name: "Chevrolet",
      logo: "/images/logo_3.png",
      href: "/shop?make=Chevrolet",
    },
    { name: "BMW", logo: "/images/logo_4.png", href: "/shop?make=BMW" },
    {
      name: "Mercedes-Benz",
      logo: "/images/logo_5.png",
      href: "/shop?make=Mercedes-Benz",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {brands.map((brand) => (
        <Link
          key={brand.name}
          href={brand.href}
          className="grayscale transition-all hover:grayscale-0"
        >
          <div className="relative h-12 w-24">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>
          <span className="sr-only">{brand.name}</span>
        </Link>
      ))}
    </div>
  );
}
