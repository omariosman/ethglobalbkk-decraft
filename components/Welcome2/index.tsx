'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Welcome to\nWorld-De-Crafts",
      subtitle: "Where You Will Explore and Support Endangered Crafts All Over the World.",
      cta: "Sign in with World ID"
    },
    {
      title: "Education Center to Learn Everyday. New Day New Story.",
      subtitle: "Where You Will Explore and Support Endangered Crafts All Over the World.",
      cta: "Next"
    },
    {
      title: "Support Crafts & Humans by Donating. Help Both Thrive.",
      subtitle: "Where You Will Explore and Support Endangered Crafts All Over the World.",
      cta: "Start Journey"
    }
  ]

  return (
    <div className="min-h-screen bg-[#FFFBF5] p-4">
      <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Welcome%201-7CRaFVzNRUkKZJlpcWHfj7v4oLCdKA.png"
          alt="Mascot character"
          width={200}
          height={200}
          className="w-48 h-48 object-contain"
        />
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold whitespace-pre-line">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-500 max-w-md mx-auto">
            {slides[currentSlide].subtitle}
          </p>
        </div>
        <div className="flex gap-2 mt-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <Link
          href={currentSlide === slides.length - 1 ? "/home" : "#"}
          onClick={() => {
            if (currentSlide < slides.length - 1) {
              setCurrentSlide(currentSlide + 1)
            }
          }}
          className="w-full max-w-md bg-blue-500 text-white rounded-full py-4 text-center text-lg font-medium"
        >
          {slides[currentSlide].cta}
        </Link>
      </div>
    </div>
  )
}