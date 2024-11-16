import React from 'react'
import Image from 'next/image'

export default function Component() {
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
        marginBottom: '40px'
      }}>
        <button style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '18px',
          cursor: 'pointer'
        }}>
          ← Back
        </button>
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        marginBottom: '40px'
      }}>
        <Image
          src="/assets/avatars/avatar3.png?height=200&width=200"
          alt="Pixel art heart character"
          width={200}
          height={200}
          style={{
            marginBottom: '16px'
          }}
        />

        <h1 style={{
          fontSize: '32px',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '8px'
        }}>
          Are you excited to learn about today&apos;s new craft?
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#666',
          textAlign: 'center',
          maxWidth: '320px',
          lineHeight: '1.5'
        }}>
          Your Donation will Help his Craft Thrive for More Generations to Come :)
        </p>

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
          marginTop: '24px'
        }}>
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
  )
}