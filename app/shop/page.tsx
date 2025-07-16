"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ShopPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/parts-selection")
  }, [router])

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-center">Redirecting to parts selection...</p>
    </div>
  )
}

