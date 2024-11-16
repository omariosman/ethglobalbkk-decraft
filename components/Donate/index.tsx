'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Minus, Plus } from 'lucide-react'

export default function Component() {
  const [activeTab, setActiveTab] = useState('item')
  const [amount, setAmount] = useState(0.09)

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <header className="p-4">
        <Link href="/home" className="flex items-center gap-2 text-xl">
          <ChevronLeft /> Back
        </Link>
      </header>

      <div className="p-4 space-y-6">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Place%20Bid-5-NTi0c6dvban8ZIy53GMuKG7zf9O9zw.png"
          alt="Long-tail fishing boat"
          width={400}
          height={300}
          className="w-full h-64 object-cover rounded-2xl"
        />

        <div className="flex border-b">
          <button
            className={`flex-1 py-2 ${activeTab === 'item' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('item')}
          >
            Item
          </button>
          <button
            className={`flex-1 py-2 ${activeTab === 'story' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('story')}
          >
            Story
          </button>
        </div>

        <h1 className="text-2xl font-bold">Long-Tail Fishing Boat</h1>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full" />
          <span className="text-lg">Chai</span>
        </div>

        <div className="bg-white rounded-xl p-4 space-y-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setAmount(prev => Math.max(0, prev - 0.01))}
              className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center"
            >
              <Minus />
            </button>
            <span className="text-xl font-medium">{amount.toFixed(2)} ETH</span>
            <button 
              onClick={() => setAmount(prev => prev + 0.01)}
              className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center"
            >
              <Plus />
            </button>
          </div>
          <Link
            href="/thank-you"
            className="block w-full bg-blue-500 text-white rounded-full py-4 text-center text-lg font-medium"
          >
            Donate
          </Link>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex justify-around">
          <Link href="/explore" className="flex flex-col items-center text-blue-500">
            <div className="w-6 h-6 bg-blue-500 rounded mb-1" />
            <span className="text-sm">Explore</span>
          </Link>
          <Link href="/daily-story" className="flex flex-col items-center text-gray-400">
            <div className="w-6 h-6 bg-gray-200 rounded mb-1" />
            <span className="text-sm">Daily Story</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}