"use client"
import { X } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface SpecificationsModalProps {
  partType: string
  onCancel: () => void
}

export function SpecificationsModal({ partType, onCancel }: SpecificationsModalProps) {
  const router = useRouter()

  // Generate sample parts based on part type
  const sampleParts = [
    {
      id: "part1",
      name: `${partType} Assembly`,
      mileage: 45000,
      price: 899.99,
      condition: "Good",
      image: "/placeholder.svg?height=200&width=200",
      warranty: "90 days",
    },
    {
      id: "part2",
      name: `${partType} Assembly`,
      mileage: 75000,
      price: 699.99,
      condition: "Fair",
      image: "/placeholder.svg?height=200&width=200",
      warranty: "60 days",
    },
  ]

  // Handle part selection
  const handlePartSelect = (partId: string) => {
    // Build query string
    const params = new URLSearchParams()
    params.append("partType", partType)
    params.append("partId", partId)

    // Redirect to parts selection page
    router.push(`/parts-selection?${params.toString()}`)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Select {partType} Options</h2>
          <button onClick={onCancel} className="rounded-full p-1 hover:bg-gray-100">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <p className="mb-4 text-gray-600">
          We found 2 {partType.toLowerCase()} options that match your vehicle. Select one to continue.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {sampleParts.map((part) => (
            <div
              key={part.id}
              onClick={() => handlePartSelect(part.id)}
              className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-4 h-40 w-40">
                  <Image src={part.image || "/placeholder.svg"} alt={part.name} fill className="object-contain" />
                </div>

                <h3 className="mb-1 text-lg font-semibold">{part.name}</h3>
                <p className="mb-1 text-gray-600">{part.mileage.toLocaleString()} miles</p>
                <p className="mb-2 text-xl font-bold">${part.price.toFixed(2)}</p>

                <div className="mb-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  {part.condition}
                </div>

                <p className="text-sm text-gray-600">Warranty: {part.warranty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          Click on a part to view more details and purchase options
        </div>
      </div>
    </div>
  )
}

