"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { Star, ShoppingCart, AlertTriangle } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PartsSelectionPage() {
  const searchParams = useSearchParams();
  const { addToCart } = useCart();

  // Get search parameters
  const partType = searchParams.get("part") || "";

  // Get specifications from URL
  const engineSize = searchParams.get("engineSize") || "";
  const fuelType = searchParams.get("fuelType") || "";
  const cylinders = searchParams.get("cylinders") || "";
  const transmissionType = searchParams.get("transmissionType") || "";
  const gears = searchParams.get("gears") || "";

  // State for form values
  const [formValues, setFormValues] = useState({
    make: searchParams.get("make") || "",
    model: searchParams.get("model"),
    year: searchParams.get("year"),
    partType,
    subSpecification: searchParams.get("subSpecification"),
  });

  // Sample data for dropdowns
  const makes = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Nissan",
  ];
  const models =
    {
      Toyota: ["Camry", "Corolla", "RAV4", "Highlander", "Tacoma"],
      Honda: ["Civic", "Accord", "CR-V", "Pilot", "Odyssey"],
      Ford: ["F-150", "Escape", "Explorer", "Mustang", "Focus"],
      Chevrolet: ["Silverado", "Equinox", "Malibu", "Tahoe", "Suburban"],
      BMW: ["3 Series", "5 Series", "X3", "X5", "7 Series"],
      "Mercedes-Benz": ["C-Class", "E-Class", "GLC", "GLE", "S-Class"],
      Audi: ["A4", "A6", "Q5", "Q7", "A8"],
      Nissan: ["Altima", "Rogue", "Sentra", "Pathfinder", "Murano"],
    }[formValues.make] || [];

  const years = Array.from({ length: 30 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );

  const partTypes = ["Engine", "Transmission"];

  // Specifications based on part type
  const specifications =
    {
      Engine: [
        "2.0L 4-cylinder Gasoline",
        "2.5L 4-cylinder Gasoline",
        "3.0L 6-cylinder Gasoline",
        "3.5L 6-cylinder Gasoline",
        "4.0L 8-cylinder Gasoline",
        "2.0L 4-cylinder Diesel",
        "2.5L 4-cylinder Hybrid",
      ],
      Transmission: [
        "5-Speed Manual",
        "6-Speed Manual",
        "4-Speed Automatic",
        "6-Speed Automatic",
        "8-Speed Automatic",
        "CVT Automatic",
        "Dual-Clutch Automatic",
      ],
    }[formValues.partType] || [];

  // Sample product variants based on specifications and part ID
  const productVariants = [
    {
      id: searchParams.get("partId") === "part1" ? "variant1" : "variant3",
      name: `${partType} Assembly - ${
        searchParams.get("partId") === "part1" ? "Low Mileage" : "Premium"
      }`,
      mileage: searchParams.get("partId") === "part1" ? 45000 : 35000,
      price: searchParams.get("partId") === "part1" ? 899.99 : 1099.99,
      condition: searchParams.get("partId") === "part1" ? "Good" : "Excellent",
      image: "/placeholder.svg?height=300&width=300",
      warranty: searchParams.get("partId") === "part1" ? "90 days" : "120 days",
      rating: searchParams.get("partId") === "part1" ? 4.5 : 4.8,
      reviews: searchParams.get("partId") === "part1" ? 12 : 15,
      inStock: true,
      compatibility: `${formValues.make} ${formValues.model} ${formValues.year}`,
      description: `Quality used ${partType.toLowerCase()} with ${
        searchParams.get("partId") === "part1" ? "low" : "very low"
      } mileage. Thoroughly tested and guaranteed to work.`,
    },
    {
      id: searchParams.get("partId") === "part2" ? "variant2" : "variant4",
      name: `${partType} Assembly - ${
        searchParams.get("partId") === "part2" ? "Standard" : "Economy"
      }`,
      mileage: searchParams.get("partId") === "part2" ? 75000 : 95000,
      price: searchParams.get("partId") === "part2" ? 699.99 : 599.99,
      condition: searchParams.get("partId") === "part2" ? "Fair" : "Acceptable",
      image: "/placeholder.svg?height=300&width=300",
      warranty: searchParams.get("partId") === "part2" ? "60 days" : "30 days",
      rating: searchParams.get("partId") === "part2" ? 4.2 : 3.9,
      reviews: searchParams.get("partId") === "part2" ? 8 : 5,
      inStock: searchParams.get("partId") === "part2",
      compatibility: `${formValues.make} ${formValues.model} ${formValues.year}`,
      description: `Affordable used ${partType.toLowerCase()} with ${
        searchParams.get("partId") === "part2" ? "moderate" : "higher"
      } mileage. Tested and in working condition.`,
    },
  ];

  // Handle form input changes
  const handleInputChange = (name: string, value: string) => {
    setFormValues((prev) => {
      // If changing part type, reset specification
      if (name === "partType") {
        return {
          ...prev,
          [name]: value,
          specification: "",
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // Handle adding product to cart
  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      condition: product.condition,
      mileage: product.mileage,
    });
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Parts Selection</h1>
        <p className="text-gray-600">
          Select from available {partType} options for {formValues.make}{" "}
          {formValues.model} {formValues.year}
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-8">
        {/* Filters sidebar */}
        <div className="mb-8 rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:mb-0">
          <h2 className="mb-4 text-lg font-semibold">
            Vehicle & Part Specifications
          </h2>

          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="make">Make</Label>
              <Select
                value={formValues.make}
                onValueChange={(value) => handleInputChange("make", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select make" />
                </SelectTrigger>
                <SelectContent>
                  {makes.map((make) => (
                    <SelectItem key={make} value={make}>
                      {make}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="model">Model</Label>
              <Select
                value={formValues.model}
                onValueChange={(value) => handleInputChange("model", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  {models.map((model) => (
                    <SelectItem key={model} value={model}>
                      {model}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="year">Year</Label>
              <Select
                value={formValues.year}
                onValueChange={(value) => handleInputChange("year", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="partType">Part Type</Label>
              <Select
                value={formValues.partType}
                onValueChange={(value) => handleInputChange("partType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select part type" />
                </SelectTrigger>
                <SelectContent>
                  {partTypes.map((part) => (
                    <SelectItem key={part} value={part}>
                      {part}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="specification">Specification</Label>
              <Select
                value={formValues.subSpecification || ""}
                onValueChange={(value) =>
                  handleInputChange("specification", value)
                }
                disabled={!formValues.partType || specifications.length === 0}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select specification" />
                </SelectTrigger>
                <SelectContent>
                  {specifications.map((spec) => (
                    <SelectItem key={spec} value={spec}>
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full mt-6">Update Search</Button>
          </div>
        </div>

        {/* Results */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-gray-600">
              {productVariants.length} products found
            </p>

            <div className="flex items-center">
              <label
                htmlFor="sort"
                className="mr-2 whitespace-nowrap text-sm font-medium"
              >
                Sort by:
              </label>
              <select
                id="sort"
                className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="mileage-low">Lowest Mileage</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {productVariants.map((product) => (
              <div
                key={product.id}
                className={`overflow-hidden rounded-lg border ${
                  !product.inStock
                    ? "border-red-200 bg-red-50"
                    : "border-gray-200 bg-white"
                } shadow-sm transition-shadow hover:shadow-md`}
              >
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className={`object-cover ${
                        !product.inStock ? "opacity-70" : ""
                      }`}
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="rounded-md bg-red-600 px-3 py-1 text-sm font-bold text-white">
                          OUT OF STOCK
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col p-4">
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          <Link
                            href={`/product/${product.id}`}
                            className="hover:text-primary"
                          >
                            {product.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-600">
                          Fits: {product.compatibility}
                        </p>
                      </div>
                      <p className="text-xl font-bold">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="mb-2 flex items-center flex-wrap gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : i < product.rating
                                ? "fill-yellow-400 text-yellow-400 opacity-50"
                                : "fill-none text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-sm text-gray-600">
                          ({product.reviews})
                        </span>
                      </div>
                      <div className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        {product.condition}
                      </div>
                      <div className="text-sm text-gray-600">
                        {product.mileage.toLocaleString()} miles
                      </div>
                    </div>

                    <p className="mb-4 text-sm text-gray-700">
                      {product.description}
                    </p>

                    {!product.inStock && (
                      <div className="mb-4 flex items-center rounded-md bg-red-100 p-2 text-sm text-red-800">
                        <AlertTriangle className="mr-2 h-4 w-4" />
                        This item is currently out of stock. Please check back
                        later or browse similar products.
                      </div>
                    )}

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium">
                          Warranty:{" "}
                          <span className="text-gray-600">
                            {product.warranty}
                          </span>
                        </p>
                        <p
                          className={`text-sm font-medium ${
                            product.inStock ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </p>
                      </div>

                      <Button
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        className="flex items-center"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
