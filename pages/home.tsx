import Image from 'next/image'

export default function Component() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#fdf6ec',
      minHeight: '100vh',
      maxWidth: '430px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: '600',
        textAlign: 'left',
        width: '100%',
        marginBottom: '20px',
        paddingRight: '20px'
      }}>
        Explore Endangered Crafts all over the Globe & Support Fellow Humans ❤️
      </h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%'
      }}>
        {/* First Card */}
        <div style={{
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: '#1a2634'
        }}>
          <Image
            src="/images/ship.png?height=250&width=390"
            alt="Long-Tail Fishing Boat"
            width={390}
            height={250}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
          <div style={{
            padding: '16px',
            color: 'white'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '12px'
            }}>Long-Tail Fishing Boat</h2>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px'
            }}>
              <Image
                src="/assets/avatars/avatar1.png?height=30&width=30"
                alt="Chai's profile"
                width={32}
                height={32}
                style={{
                  borderRadius: '50%',
                  marginRight: '8px'
                }}
              />
              <span style={{ fontSize: '16px' }}>Chai</span>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '14px'
            }}>
              <div>
                <span style={{ color: '#4a9eff' }}>Country</span>
                <br />
                <span>Thailand</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: '#4a9eff' }}>City</span>
                <br />
                <span>Ban Khlong Hua</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div style={{
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: '#1a2634'
        }}>
          <Image
            src="/images/ship.png?height=250&width=390"
            alt="Damar Kurung: Indonesian Lanterns"
            width={390}
            height={250}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
          <div style={{
            padding: '16px',
            color: 'white'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '12px'
            }}>Damar Kurung: Indonesian Lanterns</h2>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px'
            }}>
              <Image
                src="/assets/avatars/avatar2.png?height=30&width=30"
                alt="Jasmine's profile"
                width={32}
                height={32}
                style={{
                  borderRadius: '50%',
                  marginRight: '8px'
                }}
              />
              <span style={{ fontSize: '16px' }}>Jasmine</span>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '14px'
            }}>
              <div>
                <span style={{ color: '#4a9eff' }}>Country</span>
                <br />
                <span>Indonesia</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: '#4a9eff' }}>City</span>
                <br />
                <span>Gresik</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '32px',
        marginTop: '24px',
        width: '100%'
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
            color: '#000',
            fontWeight: '500'
          }}>Explore</span>
          <div style={{
            width: '32px',
            height: '4px',
            backgroundColor: '#000',
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
            color: '#000',
            fontWeight: '500'
          }}>Daily Story</span>
        </div>
      </div>
    </div>
  )
}