import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Component() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();
  const { craft } = router.query;

  const selectedCraft = craft ? JSON.parse(craft as any) : null;

  // Array of image sources
  const images = [
    [
      "/assets/imgs/craft_img1.png",
      "/assets/imgs/craft_img2.png",
      "/assets/imgs/craft_img3.png",
      "/assets/imgs/craft_img4.png",
    ],
    [
      "/assets/imgs/sword1.png",
      "/assets/imgs/sword2.png",
      "/assets/imgs/sword3.png",
      "/assets/imgs/sword4.png",
    ],
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images[selectedCraft.imagesIdx].length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images[selectedCraft.imagesIdx].length) % images[selectedCraft.imagesIdx].length);
  };

  const handleReadStoryClick = () => {
    router.push({
      pathname: '/long_story',
      query: { craft: JSON.stringify(selectedCraft) },
    });
  };

  const handleBackClick = () => {
    router.push('/home'); // Redirect to /home when "Back" is clicked
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
        fontFamily: 'system-ui, sans-serif',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
        }}>
          <button
            onClick={handleBackClick}
            style={{
              color: '#1677ff',
              background: 'none',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
            }}
          >
            ← Back
          </button>
        </div>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '16px',
            overflow: 'hidden',
          }}>
            <Image
              src={images[selectedCraft.imagesIdx][currentImageIndex]}
              alt="Boat building process"
              width={400}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
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
                cursor: 'pointer',
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
                cursor: 'pointer',
              }}
            >
              →
            </button>
          </div>

          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '14px',
            marginBottom: '16px',
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

          <button
            onClick={handleReadStoryClick}
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
              marginBottom: '32px',
            }}
          >
            <b>Read the Story</b>
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
