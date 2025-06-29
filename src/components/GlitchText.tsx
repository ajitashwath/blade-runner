import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*(){}[]|\\:";\'<>?,./~`';
  
  const createGlitch = (originalText: string) => {
    return originalText
      .split('')
      .map(char => {
        if (Math.random() < 0.1) {
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        return char;
      })
      .join('');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.05) { // 5% chance to glitch
        setIsGlitching(true);
        setDisplayText(createGlitch(text));
        
        setTimeout(() => {
          setDisplayText(text);
          setIsGlitching(false);
        }, 100);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span 
      className={`
        ${className} 
        ${isGlitching ? 'animate-pulse text-red-500' : ''} 
        transition-all duration-100 font-space-grotesk
      `}
      style={{
        textShadow: isGlitching 
          ? '2px 0 #ff0000, -2px 0 #00ffff, 0 2px #ff00ff' 
          : 'none'
      }}
    >
      {displayText}
    </span>
  );
}