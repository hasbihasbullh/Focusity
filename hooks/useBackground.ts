import { useState, useEffect } from 'react';

export const BACKGROUNDS = {
  'default': 'bg-black',
  'aura-twilight': 'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500',
  'peach-aura': 'bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200',
  'light-pink': 'bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300',
  'fiero': 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-500',
  'lava-lamp': 'bg-gradient-to-br from-purple-600 via-pink-600 to-red-600',
  'ocean': 'bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500',
  'forest': 'bg-gradient-to-br from-green-400 via-green-500 to-emerald-600',
  'sunset': 'bg-gradient-to-br from-orange-300 via-red-400 to-purple-500',
  'midnight': 'bg-gradient-to-br from-gray-800 via-gray-900 to-black',
} as const;

export type BackgroundId = keyof typeof BACKGROUNDS;

export const useBackground = (initialBackground: BackgroundId = 'default') => {
  const [currentBackground, setCurrentBackground] = useState<BackgroundId>(initialBackground);

  const getBackgroundClass = (): string => {
    return BACKGROUNDS[currentBackground];
  };

  const changeBackground = (backgroundId: BackgroundId) => {
    setCurrentBackground(backgroundId);
  };

  // Optional: Save to localStorage for persistence
  useEffect(() => {
    const saved = localStorage.getItem('focusity-background');
    if (saved && saved in BACKGROUNDS) {
      setCurrentBackground(saved as BackgroundId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('focusity-background', currentBackground);
  }, [currentBackground]);

  return {
    currentBackground,
    backgroundClass: getBackgroundClass(),
    changeBackground,
    availableBackgrounds: BACKGROUNDS,
  };
};
