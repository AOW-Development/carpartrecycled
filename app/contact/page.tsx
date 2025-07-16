"use client";

import type React from "react";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
      });
    }, 1500);
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        Contact Us
      </h1>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-3 mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-gray-600">
                      1105 E George St
                      <br />
                      Itasca, IL 60143
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-3 mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+18008383058" className="hover:text-primary">
                        (800) 838-3058
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-3 mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:partsrecycledllc@gmail.com"
                        className="hover:text-primary"
                      >
                        partsrecycledllc@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mr-3 mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-3 font-medium">Connect With Us</h3>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "instagram", "youtube"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-primary hover:text-white"
                      >
                        <span className="sr-only">{social}</span>
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </svg>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="rounded-md bg-green-50 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-green-800">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. Our team will get back to you
                    as soon as possible.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label>Subject</Label>
                    <RadioGroup
                      value={formData.subject}
                      onValueChange={handleRadioChange}
                      className="mt-2"
                    >
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="engine" id="engine" />
                          <Label htmlFor="engine">Engine Inquiry</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="transmission"
                            id="transmission"
                          />
                          <Label htmlFor="transmission">
                            Transmission Inquiry
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="support" id="support" />
                          <Label htmlFor="support">Technical Support</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="warranty" id="warranty" />
                          <Label htmlFor="warranty">Warranty Claim</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="mr-2 h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="mb-6 text-xl font-semibold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "Do you ship engines and transmissions nationwide?",
                answer:
                  "Yes, we offer nationwide shipping for all our products. Shipping costs are calculated based on weight and destination.",
              },
              {
                question: "What warranty do you offer on your parts?",
                answer:
                  "We offer warranties ranging from 30 to 120 days depending on the part. All warranties cover defects in materials and workmanship.",
              },
              {
                question:
                  "How do I know if an engine or transmission will fit my vehicle?",
                answer:
                  "Our search system allows you to find parts specific to your vehicle's make, model, and year. If you're unsure, our technical team can help verify compatibility.",
              },
              {
                question: "What is your return policy?",
                answer:
                  "We accept returns within 30 days of purchase. The part must be in its original condition and packaging. A restocking fee may apply.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <h3 className="font-medium">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
