"use client"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart()

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 15.99 : 0
  const tax = subtotal * 0.0825 // 8.25% tax rate
  const total = subtotal + shipping + tax

  // Handle quantity changes
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity)
    }
  }

  // Handle item removal
  const handleRemoveItem = (id: string) => {
    removeFromCart(id)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold md:text-3xl">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 py-12">
          <ShoppingBag className="mb-4 h-16 w-16 text-gray-400" />
          <h2 className="mb-2 text-xl font-semibold">Your cart is empty</h2>
          <p className="mb-6 text-center text-gray-600">Looks like you haven't added any parts to your cart yet.</p>
          <Link href="/shop">
            <Button>Browse Parts</Button>
          </Link>
        </div>
      ) : (
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="hidden border-b border-gray-200 bg-gray-50 p-4 sm:grid sm:grid-cols-[3fr_1fr_1fr_auto]">
                <div className="text-sm font-medium text-gray-700">Product</div>
                <div className="text-sm font-medium text-gray-700">Price</div>
                <div className="text-sm font-medium text-gray-700">Quantity</div>
                <div className="w-10"></div>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 border-b border-gray-200 p-4 last:border-0 sm:grid-cols-[3fr_1fr_1fr_auto]"
                >
                  <div className="mb-4 flex items-center sm:mb-0">
                    <div className="relative mr-4 h-16 w-16 shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-600">
                        <span className="rounded-full bg-gray-100 px-2 py-0.5">
                          {item.condition.charAt(0).toUpperCase() + item.condition.slice(1)}
                        </span>
                        {item.mileage && (
                          <span className="rounded-full bg-gray-100 px-2 py-0.5">
                            {item.mileage.toLocaleString()} miles
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 flex items-center sm:mb-0">
                    <span className="text-sm font-medium sm:hidden">Price: </span>
                    <span className="font-medium">${item.price.toFixed(2)}</span>
                  </div>

                  <div className="mb-4 flex items-center sm:mb-0">
                    <span className="mr-2 text-sm font-medium sm:hidden">Quantity: </span>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 hover:bg-gray-100"
                      >
                        <Minus className="h-3 w-3" />
                        <span className="sr-only">Decrease</span>
                      </button>
                      <div className="flex h-8 w-10 items-center justify-center border border-gray-300 bg-white text-center text-sm">
                        {item.quantity}
                      </div>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 hover:bg-gray-100"
                      >
                        <Plus className="h-3 w-3" />
                        <span className="sr-only">Increase</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                    >
                      <Trash2 className="h-5 w-5" />
                      <span className="sr-only">Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/checkout">
                  <Button className="w-full">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="mt-6 rounded-md bg-gray-50 p-4">
                <h3 className="mb-2 text-sm font-medium">We Accept</h3>
                <div className="flex space-x-2">
                  <div className="h-8 w-12 rounded-md bg-gray-200"></div>
                  <div className="h-8 w-12 rounded-md bg-gray-200"></div>
                  <div className="h-8 w-12 rounded-md bg-gray-200"></div>
                  <div className="h-8 w-12 rounded-md bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

