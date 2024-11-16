import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const crafts = [
  {
    name: "Thai Long-Tail Fishing Boat Building!",
    map_spot: 0,
    imgs: ["craft_img1.png", "craft_img2.png", "craft_img3.png", "craft_img4.png"],
    country: "Thailand",
    city: "Ban Khlong Rua Village",
    imagesIdx: 0
  },
  {
    name: "English Swordsmithing",
    map_spot: 1,
    imgs: ["sword1.png", "sword2.png", "sword3.png", "sword4.png"],
    country: "United Kingdom",
    city: "London",
    imagesIdx: 1
  }
];

export default function Component() {
  const [randomIndex, setRandomIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * crafts.length);
    setRandomIndex(randomNumber);
  }, []);

  const selectedCraft = crafts[randomIndex];

  const handleContinueExploring = () => {
    router.push({
      pathname: '/craft',
      query: { craft: JSON.stringify(selectedCraft) }, // Pass selected craft as a query parameter
    });
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fdf6ec',
      minHeight: '100vh',
      maxWidth: '430px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <Link href="#" style={{
          color: '#1677ff',
          textDecoration: 'none',
          fontSize: '18px'
        }}>
          ← Back
        </Link>
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        <Image
          src={`/assets/map_spots/${selectedCraft.map_spot}.png?height=500&width=400`}
          alt="Map with location marker"
          width={400}
          height={500}
          style={{
            width: '100%',
            height: 'auto',
            marginBottom: '24px'
          }}
        />

        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '14px',
          marginBottom: '16px'
        }}>
          <div>
            <div style={{ color: '#1677ff', marginBottom: '4px' }}>Country</div>
            <div style={{ fontSize: '16px', fontWeight: '500' }}>{selectedCraft.country}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#1677ff', marginBottom: '4px' }}>City</div>
            <div style={{ fontSize: '16px', fontWeight: '500' }}>{selectedCraft.city}</div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '16px',
          borderRadius: '12px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px'
        }}>
          <p style={{ fontSize: '16px', margin: 0 }}>
            Hello Explorer! Today&apos;s Craft is in <span style={{ fontWeight: '600' }}>{selectedCraft.country}</span>!
          </p>
          <Image
            src={`/assets/avatars/avatar${randomIndex}.png?height=32&width=32`}
            alt="Explorer avatar"
            width={32}
            height={32}
          />
        </div>

        <button
          onClick={handleContinueExploring}
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: '#1677ff',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            marginBottom: '32px'
          }}
        >
          <b>Continue Exploring !</b>
        </button>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        borderTop: '1px solid #ddd',
        paddingTop: '16px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <Image
            src="/assets/icons/explore.png?height=24&width=24"
            alt="Explore icon"
            width={24}
            height={24}
          />
          <span style={{
            fontSize: '14px',
            color: '#1677ff',
            fontWeight: '500'
          }}>Explore</span>
          <div style={{
            width: '32px',
            height: '2px',
            backgroundColor: '#1677ff',
            borderRadius: '2px'
          }} />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          opacity: 0.5
        }}>
          <Image
            src="/assets/icons/daily_story.png?height=24&width=24"
            alt="Daily Story icon"
            width={24}
            height={24}
          />
          <span style={{
            fontSize: '14px',
            fontWeight: '500'
          }}>Daily Story</span>
        </div>
      </div>
    </div>
  );
}
