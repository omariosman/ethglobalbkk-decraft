import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Component() {
    const router = useRouter();
    const { craft } = router.query;
  
    const selectedCraft = craft ? JSON.parse(craft as any) : 
    {
        name: "Thai Long-Tail Fishing Boat Building!",
        map_spot: 0,
        imgs: ["craft_img1.png", "craft_img2.png", "craft_img3.png", "craft_img4.png"],
        country: "Thailand",
        city: "Ban Khlong Rua Village",
        imagesIdx: 0,
        longStory: "Rua hua tong are traditional fishing boats only used in the Andaman Sea. Boats are matched to the seas they sail on. For example, the boat used in Pattani province is called rua ko rair, which is flatter, allowing it to sail along smaller but choppy wave crests in the lower Gulf of Thailand. Rua hua tong have different features — a spherical shape in front, and a rising prow, unique features that can withstand huge strong tidal waves in the Andaman Sea.\n\nBan Khlong Rua's boats are famous for quality, endurance and beauty. It is not only fishermen that come to the village for boats. Hotels and the tourism industry on the Andaman Sea order boatbuilders to make larger vessels with special features to carry tourists for sightseeing. Supad, known among locals as Bung Reen, has been commissioned to make boats with fancy details, such as the prow being in Nordic Viking-style, or large tourist boats that can accommodate up to 100 people.\n\nThe rua hua tong have become a symbol for the tourism industry in Krabi, and often appear in promotional pictures, thanks to the photogenic nature of the boat. Since 2013, Krabi has promoted the annual fishermen's worship of rua hua tong as a tourism event. Satun province runs the annual Rua Hua Tong Fishing Event to encourage tourism."
      };
  
    const handleDailyStoryClick = () => {
        router.push('/lets_go'); // Navigate to "lets_go" page
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
        marginBottom: '32px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
        }}>
          <button
            onClick={() => router.push('/home')}
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
      </div>

      <h1 style={{
        fontSize: '32px',
        fontWeight: '600',
        marginBottom: '32px',
        lineHeight: '1.2'
      }}>
        {selectedCraft.name}
      </h1>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '24px'
      }}>
        <div>
          <div style={{ color: '#1677ff', fontSize: '14px', marginBottom: '4px' }}>Country</div>
          <div style={{ fontSize: '16px', fontWeight: '500' }}>{selectedCraft.country}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: '#1677ff', fontSize: '14px', marginBottom: '4px' }}>City</div>
          <div style={{ fontSize: '16px', fontWeight: '500' }}>{selectedCraft.city}</div>
        </div>
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        color: '#666',
        fontSize: '16px',
        lineHeight: '1.6',
        marginBottom: '32px'
      }}>
        <p>
        {selectedCraft.longStory}
        </p>
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
}