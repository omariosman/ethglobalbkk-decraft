import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { handlePay } from '../components/Pay/index';

export default function Component() {
  const router = useRouter();

  const [ethAmount, setEthAmount] = useState(0.09)

  const increment = () => setEthAmount(prev => Number((prev + 0.01).toFixed(2)))
  const decrement = () => setEthAmount(prev => Number((prev - 0.01).toFixed(2)))

  const handleDonate = (address: string, amount: any) => {
    handlePay(address, amount);
  }

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
<div
  onClick={() => router.push('/home')}
  style={{
    color: '#1677ff',
    textDecoration: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  }}
>
  ← Back
</div>

      <Image
        src="/images/ship.png?height=400&width=400"
        alt="Long-Tail Fishing Boat"
        width={400}
        height={400}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '16px',
          marginBottom: '24px'
        }}
      />

      <div style={{
        display: 'flex',
        borderBottom: '1px solid #ddd',
        marginBottom: '24px'
      }}>
        <div style={{
          padding: '12px 24px',
          borderBottom: '2px solid #000',
          fontWeight: '500'
        }}>
          Item
        </div>
        <div style={{
          padding: '12px 24px',
          color: '#666'
        }}>
          Story
        </div>
      </div>

      <h1 style={{
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>
        Long-Tail Fishing Boat
      </h1>

      <p style={{
        color: '#666',
        lineHeight: '1.5',
        marginBottom: '24px'
      }}>
        Together with my design team, we designed this futuristic Cyberyacht concept artwork. We wanted to create something that has not been created yet, so we started to collect ideas of how we imagine the Cyberyacht could look like in the future.
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '32px'
      }}>
        <Image
          src="/assets/avatars/avatar0.png?height=30&width=30"
          alt="Chai's profile"
          width={48}
          height={48}
          style={{
            borderRadius: '50%',
            marginRight: '12px'
          }}
        />
        <span style={{ fontSize: '18px', fontWeight: '500' }}>Chai</span>
      </div>

      <div style={{
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px'
      }}>
        <button 
          onClick={decrement}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#ff4d4f',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          -
        </button>
        <span style={{ fontSize: '20px', fontWeight: '500' }}>{ethAmount} ETH</span>
        <button 
          onClick={increment}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#52c41a',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          +
        </button>
      </div>

      <button style={{
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
      onClick={() => handleDonate("", "")}
>
        Donate
      </button>

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