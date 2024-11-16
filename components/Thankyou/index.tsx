import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <header className="p-4">
        <Link href="/home" className="flex items-center gap-2 text-xl">
          <ChevronLeft /> Back
        </Link>
      </header>

      <div className="flex flex-col items-center justify-center p-4 space-y-6">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Place%20Bid-1-mENdOXI4P5QbDrNR6shJ0dIdGaU262.png"
          alt="Thank you heart character"
          width={200}
          height={200}
          className="w-48 h-48 object-contain"
        />

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Thank You For Helping a Fellow Human!</h1>
          <p className="text-gray-500">
            Your Donation will Help his Craft Thrive for More Generations to Come :)
          </p>
        </div>

        <Link
          href="/home"
          className="w-full max-w-md bg-blue-500 text-white rounded-full py-4 text-center text-lg font-medium"
        >
          Continue Exploring!
        </Link>
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