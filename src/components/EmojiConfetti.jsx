import React, { useState, useEffect } from "react";

const EmojiConfetti = () => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    const emojiInterval = setInterval(() => {
      const randomEmoji = getRandomEmoji();
      const emojiElement = createEmojiElement(randomEmoji);
      setEmojis((prevEmojis) => [...prevEmojis, emojiElement]);

      setTimeout(() => {
        setEmojis((prevEmojis) =>
          prevEmojis.filter((emoji) => emoji !== emojiElement)
        );
      }, 2000);
    }, 100);

    return () => {
      clearInterval(emojiInterval);
    };
  }, []);

  const createEmojiElement = (emoji) => {
    return (
      <div key={Math.random()} className="falling-emojis">
        {emoji}
      </div>
    );
  };

  const getRandomEmoji = () => {
    const emojis = ["😀", "💩", "🎉", "💩", "🎈"];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  return (
    <div className="emoji-confetti-container">
      {emojis.map((emojiElement) => emojiElement)}
    </div>
  );
};

export default EmojiConfetti;
