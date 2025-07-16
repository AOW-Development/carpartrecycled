import Image from "next/image";
import Link from "next/link";

export function FeaturedCategories() {
  const categories = [
    {
      name: "Gasoline Engines",
      description: "Quality used gasoline engines for all makes and models",
      image: "/images/1.jpg?height=300&width=400",
      href: "/parts-selection?partType=Engine",
    },
    {
      name: "Diesel Engines",
      description: "Reliable diesel engines with warranty",
      image: "/images/2.jpg?height=300&width=400",
      href: "/parts-selection?partType=Engine",
    },
    {
      name: "Automatic Transmissions",
      description: "Tested automatic transmissions for various vehicles",
      image: "/images/3.jpg?height=300&width=400",
      href: "/parts-selection?partType=Transmission",
    },
    {
      name: "Manual Transmissions",
      description: "Quality manual transmissions at competitive prices",
      image: "/images/4.jpg?height=300&width=400",
      href: "/parts-selection?partType=Transmission",
    },
    {
      name: "Hybrid Engines",
      description: "Specialized engines for hybrid vehicles",
      image: "/images/5.jpg?height=300&width=400",
      href: "/parts-selection?partType=Engine",
    },
    {
      name: "CVT Transmissions",
      description: "Continuously variable transmissions for fuel efficiency",
      image: "/images/6.jpg?height=300&width=400",
      href: "/parts-selection?partType=Transmission",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
