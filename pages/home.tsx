
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Component() {
  const [data, setData] = useState([]);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const fetchData = async () => {
      const urls = [
        'https://worldchain-sepolia.explorer.alchemy.com/api/v2/tokens/0xEA9005764CF22392501B1b19B1451cdD64a2cba6/instances/0',
        'https://worldchain-sepolia.explorer.alchemy.com/api/v2/tokens/0xEA9005764CF22392501B1b19B1451cdD64a2cba6/instances/1'
      ];
      try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const results = await Promise.all(responses.map(res => res.json()));
        console.log(`results: ${JSON.stringify(results, null, 2)}`);
        setData((results as any).map((result: { metadata: { name: any; description: any; attributes: any[]; }; image_url: any; })  => ({
          name: result.metadata.name,
          description: result.metadata.description,
          image: result.image_url,
          country: result.metadata.attributes.find(attr => attr.trait_type === 'Country')?.value,
          city: result.metadata.attributes.find(attr => attr.trait_type === 'City')?.value,
          raisedAmount: result.metadata.attributes.find(attr => attr.trait_type === 'Raised Amount')?.value,
          likes: result.metadata.attributes.find(attr => attr.trait_type === 'Number of likes')?.value,
          craftStory: result.metadata.attributes.find(attr => attr.trait_type === 'Craft Story')?.value,
        })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle the click to navigate to the story page and pass the NFT details
  const handleNFTClick = (item: any) => {
    // Serializing item to pass as query parameter
    router.push({
      pathname: '/story',
      query: { nftData: JSON.stringify(item) }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#fdf6ec',
        minHeight: '100vh',
        maxWidth: '430px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontSize: '24px',
          fontWeight: '600',
          textAlign: 'left',
          width: '100%',
          marginBottom: '20px',
          paddingRight: '20px',
        }}
      >
        Explore Endangered Crafts all over the Globe & Support Fellow Humans ❤️
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#1a2634',
            }}
            onClick={() => handleNFTClick(item)} // Handle click to navigate
          >
            <Image
              src={(item as any).image}
              alt={(item as any).name}
              width={390}
              height={250}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
            <div style={{ padding: '16px', color: 'white' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>{(item as any).name}</h2>
              <p>{(item as any).description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <div>
                  <span style={{ color: '#4a9eff' }}>Country</span>
                  <br />
                  <span>{(item as any).country}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ color: '#4a9eff' }}>City</span>
                  <br />
                  <span>{(item as any).city}</span>
                </div>
              </div>
              <div style={{ marginTop: '12px' }}>
                <p>
                  <strong>Raised Amount:</strong> {(item as any).raisedAmount}
                </p>
              </div>
            </div>
          </div>
        ))}
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
          onClick={() => router.push('map')}
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
  );
}
