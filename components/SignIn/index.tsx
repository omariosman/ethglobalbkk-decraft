"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import { useRouter } from 'next/router';

export const SignIn = () => {
  const router = useRouter(); // Initialize useRouter

  const handleExploreClick = () => {
    router.push('/home');
  };
  
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          borderTop: '1px solid #ddd',
          paddingTop: '16px'
        }}>
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              marginRight: "10px"
            }}
            onClick={handleExploreClick} // Call handleExploreClick on click
          >
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
      </>
    );
  } else {
    return (
      <>
        Not signed in <br />
        <button
          onClick={() => signIn()}
          className="text-white py-5 px-10 bg-black" // White text, padding of 20px
        >
          Sign in with World ID
        </button>
      </>
    );
  }
};
