import Link from 'next/link'
import Image from 'next/image'

export default function Component() {
  const crafts = [
    {
      id: 1,
      title: "Long-Tail Fishing Boat",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Place%20Bid-5-NTi0c6dvban8ZIy53GMuKG7zf9O9zw.png",
      creator: "Chai",
      country: "Thailand",
      city: "Ban Khlong Rua"
    },
    {
      id: 2,
      title: "Damar Kurung: Indonesian Lanterns",
      image: "/placeholder.svg?height=300&width=400",
      creator: "Jasmine",
      country: "Indonesia",
      city: "Gresik"
    }
  ]

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold">
          Explore Endangered Crafts all over the Globe & Support Fellow Humans ❤️
        </h1>
        
        <div className="space-y-4">
          {crafts.map((craft) => (
            <Link href={`/craft/${craft.id}`} key={craft.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow">
                <Image
                  src={craft.image}
                  alt={craft.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h2 className="text-xl font-bold">{craft.title}</h2>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    <span>{craft.creator}</span>
                  </div>
                  <div className="flex justify-between text-sm text-blue-500">
                    <div>
                      <span className="text-gray-500">Country</span>
                      <p>{craft.country}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">City</span>
                      <p>{craft.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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