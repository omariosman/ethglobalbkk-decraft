import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Component() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();
  const { craft } = router.query;

  const selectedCraft = craft ? JSON.parse(craft) : null;
  // Array of image sources
  const images = [
    [
      "/assets/imgs/craft_img1.png",
      "/assets/imgs/craft_img2.png",
      "/assets/imgs/craft_img3.png",
      "/assets/imgs/craft_img4.png"
    ],
    [
      "/assets/imgs/sword1.png",
      "/assets/imgs/sword2.png",
      "/assets/imgs/sword3.png",
      "/assets/imgs/sword4.png"
    ]
  ];

  // Change image index
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images[selectedCraft.imagesIdx].length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images[selectedCraft.imagesIdx].length) % images[selectedCraft.imagesIdx].length);
  };

  const handleDailyStoryClick = () => {
    router.push('/lets_go'); // Navigate to "lets_go" page
  };

  const handleExploreClick = () => {
    router.push('/home');
  };

  if (selectedCraft) {
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
          <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '16px',
            overflow: 'hidden'
          }}>
            {/* Image carousel */}
            <Image
              src={images[selectedCraft.imagesIdx][currentImageIndex]}
              alt="Boat building process"
              width={400}
              height={400}
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
            
            {/* Carousel navigation buttons */}
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              ←
            </button>
            
            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              →
            </button>
  
            {/* Image indicators */}
            <div style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              marginTop: '12px'
            }}>
              {images.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: currentImageIndex === index ? '#000' : '#ccc',
                    cursor: 'pointer'
                  }}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
  
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '14px',
            marginBottom: '16px'
          }}>
            <div>
              <div style={{ color: '#1677ff', marginBottom: '4px' }}>Country</div>
              <div style={{ fontSize: '16px', fontWeight: '500' }}>{selectedCraft.country || ""}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#1677ff', marginBottom: '4px' }}>City</div>
              <div style={{ fontSize: '16px', fontWeight: '500' }}>{selectedCraft.city || ""}</div>
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
              Today&apos;s Craft is <span style={{ fontWeight: '600' }}>{selectedCraft.name}</span>!
            </p>
            <Image
              src="/assets/avatars/avatar3.png?height=32&width=32"
              alt="Craftsman avatar"
              width={32}
              height={32}
            />
          </div>
  
          <button style={{
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
          }}>
            <b>Read the Story</b>
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
          gap: '4px',
          marginRight: "10px"
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            opacity: 0.5,
            cursor: 'pointer',
          }}
          onClick={handleDailyStoryClick} // Attach the click handler
        >
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
    )
  } else {
 return 
  <></>
  }
}
