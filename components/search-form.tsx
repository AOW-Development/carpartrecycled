"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpecificationsModal } from "@/components/specifications-modal";

export function SearchForm(searchpage: any) {
  const router = useRouter();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [partType, setPartType] = useState("");
  const [subspecification, setSubspecification] = useState("");
  const [showSpecsModal, setShowSpecsModal] = useState(false);

  // Sample data - in a real app, these would come from an API
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
  const models = make
    ? {
        Toyota: ["Camry", "Corolla", "RAV4", "Highlander", "Tacoma"],
        Honda: ["Civic", "Accord", "CR-V", "Pilot", "Odyssey"],
        Ford: ["F-150", "Escape", "Explorer", "Mustang", "Focus"],
        Chevrolet: ["Silverado", "Equinox", "Malibu", "Tahoe", "Suburban"],
        BMW: ["3 Series", "5 Series", "X3", "X5", "7 Series"],
        "Mercedes-Benz": ["C-Class", "E-Class", "GLC", "GLE", "S-Class"],
        Audi: ["A4", "A6", "Q5", "Q7", "A8"],
        Nissan: ["Altima", "Rogue", "Sentra", "Pathfinder", "Murano"],
      }[make]
    : [];

  const years = Array.from({ length: 30 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );

  const partTypes = ["Engine", "Transmission"];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!make || !model || !year || !partType) {
      alert("Please fill in all required fields");
      return;
    }

    // Show specifications modal for Engine and Transmission
    // if (partType === "Engine" || partType === "Transmission") {
    //   setShowSpecsModal(true);
    // } else {
    // For other part types, redirect directly to search results
    const params = new URLSearchParams();
    params.append("make", make);
    params.append("model", model);
    params.append("year", year);
    params.append("part", partType);
    params.append("subSpecification", subspecification);

    // router.push(`/search-results?${params.toString()}`);
    router.push(`/parts-selection?${params.toString()}`);

    // }
  };

  return (
    <>
      <form onSubmit={handleSearch} className="grid gap-4 md:grid-cols-5">
        <div className="relative">
          <select
            className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            value={make}
            onChange={(e) => {
              setMake(e.target.value);
              setModel("");
            }}
            required
          >
            <option value="">Select Make</option>
            {makes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          {/* <span className="absolute left-3 top-[-10px] bg-white px-1 text-xs font-medium text-gray-500">
            2. Make
          </span> */}
        </div>

        <div className="relative">
          <select
            className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            disabled={!make}
            required
          >
            <option value="">Select Model</option>
            {models.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          {/* <span className="absolute left-3 top-[-10px] bg-white px-1 text-xs font-medium text-gray-500">
            3. Model
          </span> */}
        </div>
        <div className="relative">
          <select
            className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          >
            <option value="">Select Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          {/* <span className="absolute left-3 top-[-10px] bg-white px-1 text-xs font-medium text-gray-500">1. Year</span> */}
        </div>
        <div className="relative">
          <select
            className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            value={partType}
            onChange={(e) => setPartType(e.target.value)}
            required
          >
            <option value="">Select Part</option>
            {partTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          {/* <span className="absolute left-3 top-[-10px] bg-white px-1 text-xs font-medium text-gray-500">
            4. Part
          </span> */}
        </div>

        <div className="relative">
          <select
            className="min-w-[220px] w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            value={subspecification}
            onChange={(e) => setSubspecification(e.target.value)}
            required
          >
            <option value="">Select SubSpecification</option>
            <option
              key={`${partType} assembly (45000 mile)`}
              value={`${partType} assembly (45000 mile)`}
            >
              {`${partType} assembly (45000 mile)`}
            </option>
            <option
              key={`${partType} assembly (55000 mile)`}
              value={`${partType} assembly (55000 mile)`}
            >
              {`${partType} assembly (55000 mile)`}
            </option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          {/* <span className="absolute left-3 top-[-10px] bg-white px-1 text-xs font-medium text-gray-500">
            4. Part
          </span> */}
        </div>

        <div className="md:col-span-5">
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
          >
            <Search className="mr-2 h-4 w-4" />
            Search Parts
          </Button>
        </div>
      </form>
      {/* 
      {showSpecsModal && (
        <SpecificationsModal
          partType={partType}
          onCancel={() => setShowSpecsModal(false)}
        />
      )} */}
    </>
  );
}
