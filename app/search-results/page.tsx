"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchForm } from "@/components/search-form";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { Star, ChevronDown, ShoppingCart } from "lucide-react";

// Sample product data - in a real app, this would come from an API
const sampleProducts = [
  {
    id: "1",
    name: "Engine Assembly 2.5L",
    description: "Complete engine assembly, 2.5L 4-cylinder",
    price: 1299.99,
    condition: "used",
    mileage: 65000,
    compatibility: "Toyota Camry 2018-2020",
    warranty: "90 days",
    images: ["/placeholder.svg?height=300&width=300"],
    rating: 4.5,
    reviews: 12,
    inStock: true,
    specifications: {
      engineSize: "2.5L",
      cylinders: "4",
      fuelType: "Gasoline",
    },
  },
  {
    id: "2",
    name: "Engine Assembly 2.5L",
    description: "Complete engine assembly, 2.5L 4-cylinder",
    price: 1099.99,
    condition: "used",
    mileage: 85000,
    compatibility: "Toyota Camry 2018-2020",
    warranty: "60 days",
    images: ["/placeholder.svg?height=300&width=300"],
    rating: 4.2,
    reviews: 8,
    inStock: true,
    specifications: {
      engineSize: "2.5L",
      cylinders: "4",
      fuelType: "Gasoline",
    },
  },
  {
    id: "3",
    name: "Transmission Assembly",
    description: "Automatic transmission, 6-speed",
    price: 899.99,
    condition: "refurbished",
    mileage: 45000,
    compatibility: "Toyota Camry 2018-2020",
    warranty: "120 days",
    images: ["/placeholder.svg?height=300&width=300"],
    rating: 4.7,
    reviews: 15,
    inStock: true,
    specifications: {
      transmissionType: "Automatic",
      gears: "6",
    },
  },
  {
    id: "4",
    name: "Front Bumper Cover",
    description: "OEM front bumper cover, minor scratches",
    price: 249.99,
    condition: "used",
    mileage: null,
    compatibility: "Toyota Camry 2018-2020",
    warranty: "30 days",
    images: ["/placeholder.svg?height=300&width=300"],
    rating: 4.0,
    reviews: 6,
    inStock: true,
    specifications: {
      color: "Black",
      side: "Front",
    },
  },
  {
    id: "5",
    name: "Alternator",
    description: "OEM alternator, tested and working",
    price: 129.99,
    condition: "used",
    mileage: 55000,
    compatibility: "Toyota Camry 2018-2020",
    warranty: "60 days",
    images: ["/placeholder.svg?height=300&width=300"],
    rating: 4.3,
    reviews: 9,
    inStock: true,
    specifications: {
      amperage: "130A",
    },
  },
  {
    id: "6",
    name: "Wheel Set (4)",
    description: "Set of 4 OEM wheels, minor curb rash",
    price: 399.99,
    condition: "used",
    mileage: null,
    compatibility: "Toyota Camry 2018-2020",
    warranty: "30 days",
    images: ["/placeholder.svg?height=300&width=300"],
    rating: 4.1,
    reviews: 7,
    inStock: true,
    specifications: {
      diameter: "17",
      width: "7.5",
      boltPattern: "5x114.3",
    },
  },
];

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const { addToCart } = useCart();

  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [sortOption, setSortOption] = useState("relevance");
  const [filtersVisible, setFiltersVisible] = useState(true);

  // Get search parameters
  const make = searchParams.get("make");
  const model = searchParams.get("model");
  const year = searchParams.get("year");
  const part = searchParams.get("part");
  const productId = searchParams.get("productId");

  // Additional specifications from search
  const engineSize = searchParams.get("engineSize");
  const fuelType = searchParams.get("fuelType");
  const cylinders = searchParams.get("cylinders");
  const transmissionType = searchParams.get("transmissionType");
  const gears = searchParams.get("gears");
  const color = searchParams.get("color");
  const side = searchParams.get("side");
  const condition = searchParams.get("condition");

  // Sort products based on selected option
  useEffect(() => {
    let sorted = [...sampleProducts];

    switch (sortOption) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "mileage-low":
        sorted = sorted
          .filter((p) => p.mileage !== null)
          .sort((a, b) => (a.mileage || 0) - (b.mileage || 0))
          .concat(sorted.filter((p) => p.mileage === null));
        break;
      default:
        // Default sorting (relevance) - no change
        break;
    }

    setFilteredProducts(sorted);
  }, [sortOption]);

  // Handle adding product to cart
  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      condition: product.condition,
      mileage: product.mileage,
    });
  };

  // Toggle filters visibility on mobile
  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Search Results</h1>
        <p className="text-gray-600">
          Results for {make} {model} ({year}) {part}
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-8">
        {/* Mobile filter toggle */}
        <div className="mb-4 lg:hidden">
          <Button
            variant="outline"
            onClick={toggleFilters}
            className="w-full justify-between"
          >
            {filtersVisible ? "Hide Filters" : "Show Filters"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                filtersVisible ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>

        {/* Filters sidebar */}
        {filtersVisible && (
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:mb-0">
            <h2 className="mb-4 text-lg font-semibold">Refine Your Search</h2>

            <div className="mb-6">
              <SearchForm />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Condition</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    Used
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    Refurbished
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    New Aftermarket
                  </label>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-medium">Price Range</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="min-price" className="sr-only">
                      Min Price
                    </label>
                    <input
                      type="number"
                      id="min-price"
                      placeholder="Min"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="max-price" className="sr-only">
                      Max Price
                    </label>
                    <input
                      type="number"
                      id="max-price"
                      placeholder="Max"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-medium">Mileage</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    Under 50,000 miles
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    50,000 - 100,000 miles
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    Over 100,000 miles
                  </label>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-medium">Warranty</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    30 days
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    60 days
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    90 days or more
                  </label>
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>
        )}

        {/* Results */}
        <div>
          <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-gray-600">
              {filteredProducts.length} results found
            </p>

            <div className="flex w-full items-center justify-between sm:w-auto sm:justify-start">
              <label
                htmlFor="sort"
                className="mr-2 whitespace-nowrap text-sm font-medium"
              >
                Sort by:
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="mileage-low">Lowest Mileage</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
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
                          {product.compatibility}
                        </p>
                      </div>
                      <p className="text-xl font-bold">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="mb-2 flex items-center">
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
                      <div className="ml-4 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        {product.condition.charAt(0).toUpperCase() +
                          product.condition.slice(1)}
                      </div>
                      {product.mileage && (
                        <div className="ml-2 text-sm text-gray-600">
                          {product.mileage.toLocaleString()} miles
                        </div>
                      )}
                    </div>

                    <p className="mb-4 text-sm text-gray-700">
                      {product.description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium">
                          Warranty:{" "}
                          <span className="text-gray-600">
                            {product.warranty}
                          </span>
                        </p>
                        <p className="text-sm font-medium text-green-600">
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </p>
                      </div>

                      <Button
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        className="flex items-center"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
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
