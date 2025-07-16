"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CreditCard, Truck, ShieldCheck } from "lucide-react"

export default function CheckoutPage() {
  const { cartItems } = useCart()
  const [step, setStep] = useState(1)

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 15.99 : 0
  const tax = subtotal * 0.0825 // 8.25% tax rate
  const total = subtotal + shipping + tax

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    sameAsBilling: true,
    shippingAddress: "",
    shippingCity: "",
    shippingState: "",
    shippingZipCode: "",
    paymentMethod: "credit-card",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  // Handle radio input changes
  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      paymentMethod: value,
    })
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (step === 1) {
      setStep(2)
      window.scrollTo(0, 0)
    } else {
      // Process payment and order (would connect to payment processor in real app)
      alert("Order placed successfully!")
      // Redirect to confirmation page in a real app
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Checkout</h1>
        <div className="mt-4 flex items-center">
          <div className="flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step >= 1 ? "bg-primary text-black" : "bg-gray-200 text-gray-600"
              }`}
            >
              1
            </div>
            <span className="ml-2 font-medium">Shipping</span>
          </div>
          <div className={`mx-4 h-0.5 w-8 ${step >= 2 ? "bg-primary" : "bg-gray-200"}`}></div>
          <div className="flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step >= 2 ? "bg-primary text-black" : "bg-gray-200 text-gray-600"
              }`}
            >
              2
            </div>
            <span className="ml-2 font-medium">Payment</span>
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">Shipping Information</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Label htmlFor="address">Billing Address</Label>
                  <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" name="state" value={formData.state} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="sameAsBilling"
                      name="sameAsBilling"
                      checked={formData.sameAsBilling}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          sameAsBilling: checked as boolean,
                        })
                      }
                    />
                    <Label htmlFor="sameAsBilling">Shipping address is the same as billing address</Label>
                  </div>
                </div>

                {!formData.sameAsBilling && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="shippingAddress">Shipping Address</Label>
                      <Input
                        id="shippingAddress"
                        name="shippingAddress"
                        value={formData.shippingAddress}
                        onChange={handleInputChange}
                        required={!formData.sameAsBilling}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <Label htmlFor="shippingCity">City</Label>
                        <Input
                          id="shippingCity"
                          name="shippingCity"
                          value={formData.shippingCity}
                          onChange={handleInputChange}
                          required={!formData.sameAsBilling}
                        />
                      </div>
                      <div>
                        <Label htmlFor="shippingState">State</Label>
                        <Input
                          id="shippingState"
                          name="shippingState"
                          value={formData.shippingState}
                          onChange={handleInputChange}
                          required={!formData.sameAsBilling}
                        />
                      </div>
                      <div>
                        <Label htmlFor="shippingZipCode">ZIP Code</Label>
                        <Input
                          id="shippingZipCode"
                          name="shippingZipCode"
                          value={formData.shippingZipCode}
                          onChange={handleInputChange}
                          required={!formData.sameAsBilling}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  <Link href="/cart">
                    <Button variant="outline" type="button">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Cart
                    </Button>
                  </Link>
                  <Button type="submit">Continue to Payment</Button>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">Payment Method</h2>

                <RadioGroup value={formData.paymentMethod} onValueChange={handleRadioChange} className="space-y-4">
                  <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 [&:has(:checked)]:border-primary [&:has(:checked)]:bg-primary/5">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex flex-1 items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Credit or Debit Card
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 [&:has(:checked)]:border-primary [&:has(:checked)]:bg-primary/5">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex flex-1 items-center">
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19.5 8.5H18.5C18.5 5.74 16.26 3.5 13.5 3.5H7.5C6.12 3.5 5 4.62 5 6V18C5 19.1 5.9 20 7 20H13C14.1 20 15 19.1 15 18V14.5H19.5C20.88 14.5 22 13.38 22 12V11C22 9.62 20.88 8.5 19.5 8.5Z"
                          fill="#0070BA"
                        />
                        <path d="M15 8.5H16.5C17.33 8.5 18 9.17 18 10V10.5H15V8.5Z" fill="#0070BA" />
                        <path d="M2 6V18C2 19.1 2.9 20 4 20H7V3.5H4C2.9 3.5 2 4.4 2 6Z" fill="#003087" />
                      </svg>
                      PayPal
                    </Label>
                  </div>
                </RadioGroup>

                {formData.paymentMethod === "credit-card" && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required={formData.paymentMethod === "credit-card"}
                      />
                    </div>

                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required={formData.paymentMethod === "credit-card"}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required={formData.paymentMethod === "credit-card"}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required={formData.paymentMethod === "credit-card"}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" type="button" onClick={() => setStep(1)}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Shipping
                  </Button>
                  <Button type="submit">Place Order</Button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-3 border-t border-gray-200 pt-4">
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

            <div className="mt-6 space-y-4 rounded-md bg-gray-50 p-4">
              <div className="flex items-start">
                <Truck className="mr-3 mt-0.5 h-5 w-5 text-gray-600" />
                <div>
                  <h3 className="font-medium">Shipping</h3>
                  <p className="text-sm text-gray-600">Standard shipping (3-5 business days)</p>
                </div>
              </div>

              <div className="flex items-start">
                <ShieldCheck className="mr-3 mt-0.5 h-5 w-5 text-gray-600" />
                <div>
                  <h3 className="font-medium">Warranty</h3>
                  <p className="text-sm text-gray-600">All parts include standard warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

