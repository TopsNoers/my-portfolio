import { useState, useEffect } from 'react';

export const useTypingAnimation = (texts, delays = {}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedTexts, setDisplayedTexts] = useState({});

  useEffect(() => {
    if (currentTextIndex >= Object.keys(texts).length) return;

    const textKeys = Object.keys(texts);
    const currentKey = textKeys[currentTextIndex];
    const currentText = texts[currentKey];
    const delay = delays[currentKey] || 100;

    if (currentCharIndex < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayedTexts(prev => ({
          ...prev,
          [currentKey]: currentText.slice(0, currentCharIndex + 1)
        }));
        setCurrentCharIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      // Move to next text
      setTimeout(() => {
        setCurrentTextIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 500); // Pause between texts
    }
  }, [currentTextIndex, currentCharIndex, texts, delays]);

  const startTyping = () => {
    setIsTyping(true);
    setCurrentTextIndex(0);
    setCurrentCharIndex(0);
    setDisplayedTexts({});
  };

  const resetTyping = () => {
    setIsTyping(false);
    setCurrentTextIndex(0);
    setCurrentCharIndex(0);
    setDisplayedTexts({});
  };

  return {
    displayedTexts,
    isTyping,
    startTyping,
    resetTyping,
    currentTextIndex,
    currentCharIndex
  };
}; 