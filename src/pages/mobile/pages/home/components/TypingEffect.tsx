import { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed }: { text: string; speed: number }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let intervalId: NodeJS.Timeout;

    intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(intervalId); // Clear interval when done
      }
    }, speed);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [text, speed]);

  return (
    <p className="text-sm sm:text-base md:text-lg font-medium px-3 sm:px-6 mt-6 md:mt-16">
      {displayedText}
    </p>
  );
};

export default TypingEffect;
