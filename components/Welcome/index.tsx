"use client";

const WelcomeComponent = () => {
  return (
    <>
      <img
        src="./images/planet-366-noBG.svg"
        alt="World-De-Crafts"
        className="mb-4 w-48 h-48 object-cover rounded-full"
      />
      <p
        style={{
          fontSize: '2rem', // Set desired font size (e.g., 2rem for larger text)
          fontWeight: 'bold', 
          textAlign: 'center',
          color: '#4a4a4a', // Equivalent to gray-800
          margin: 0, // Ensure no margin
        }}
      >
        Welcome to
      </p>
      <p
        style={{
          fontSize: '1.5rem', // Slightly smaller for the next line
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#4a4a4a',
        }}
      >
        World-De-Crafts
      </p>
      <span
        style={{
          fontSize: '1rem', // Adjust as per your preference
          fontWeight: '500',
          textAlign: 'center',
          color: '#a0a0a0', // Equivalent to gray-400
          display: 'block', // Ensures span is block for proper alignment
        }}
      >
        Where You Will Explore and Support Endangered Crafts All Over the World.
      </span>
    </>
  );
};

export default WelcomeComponent;
