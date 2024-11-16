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
    imagesIdx: 0,
    longStory: "Rua hua tong are traditional fishing boats only used in the Andaman Sea. Boats are matched to the seas they sail on. For example, the boat used in Pattani province is called rua ko rair, which is flatter, allowing it to sail along smaller but choppy wave crests in the lower Gulf of Thailand. Rua hua tong have different features — a spherical shape in front, and a rising prow, unique features that can withstand huge strong tidal waves in the Andaman Sea.\n\nBan Khlong Rua's boats are famous for quality, endurance and beauty. It is not only fishermen that come to the village for boats. Hotels and the tourism industry on the Andaman Sea order boatbuilders to make larger vessels with special features to carry tourists for sightseeing. Supad, known among locals as Bung Reen, has been commissioned to make boats with fancy details, such as the prow being in Nordic Viking-style, or large tourist boats that can accommodate up to 100 people.\n\nThe rua hua tong have become a symbol for the tourism industry in Krabi, and often appear in promotional pictures, thanks to the photogenic nature of the boat. Since 2013, Krabi has promoted the annual fishermen's worship of rua hua tong as a tourism event. Satun province runs the annual Rua Hua Tong Fishing Event to encourage tourism."
  },
  {
    name: "English Swordsmithing",
    map_spot: 1,
    imgs: ["sword1.png", "sword2.png", "sword3.png", "sword4.png"],
    country: "United Kingdom",
    city: "London",
    imagesIdx: 1,
    longStory: "With the invention of bronze, first swords originated from copper daggers, with bronze being a harder metal than copper and enabling the extended length. However, swords in the shape and length we think of today originated with the development of iron, around 12th-13th BC.\n\nWhile sword making was popular in continental Europe through the middle ages, the history of sword making in the UK is dated to begin in the early 17th Century in the area of Hounslow and has been powered by the demand of the civil war. It has steadily been developing from then and becoming a competing force to the products manufactured on the continent (particularly in Germany). Perhaps, the most notable British maker of swords is the Wilkinson Swords, a company that rose to prominence using a rigorous technique of blade bending to ensure high quality of the swords produced.\n\nEven though the presence of English swords and blades on the market was growing, it wasn’t until 1908 when the British War Office Committee patented the British Cavalry Troopers’ Sword which was a triumph of design but in terms of combat came a little too late to become a favoured weapon. Wilkinson Sword continued to provide weapons to the British market and abroad during the rest of the 20th Century, catering for the British cavalry and to British officers who were required to carry swords. It was only in 2005 when Wilkinson Swords ceased their functioning as sword makers instead focusing on making razor blades.\n\nSwords have been made of different materials over the centuries – copper, bronze or steel and are still produced using the traditional methods by blacksmiths in a process referred to as bladesmithing. The most basic techniques are forging and stock removal. Forging means forming the sword’s blade to shape by heating the blade material to be flexible enough to then hammer it to shape using hammer and anvil together. There are four main criteria to evaluate a sword – strength, flexibility, hardness and balance"
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
