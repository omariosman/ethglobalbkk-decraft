// @ts-nocheck
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Component() {
    const router = useRouter();
    const { craft } = router.query;
  
    const selectedCraft = craft ? JSON.parse(craft) : null;
  
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
        <Link href="#" style={{
          color: '#1677ff',
          textDecoration: 'none',
          fontSize: '18px'
        }}>
          ← Back
        </Link>
      </div>

      <h1 style={{
        fontSize: '32px',
        fontWeight: '600',
        marginBottom: '32px',
        lineHeight: '1.2'
      }}>
        {selectedCraft.name || "Thai Long-Tail Fishing Boat Building"}
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