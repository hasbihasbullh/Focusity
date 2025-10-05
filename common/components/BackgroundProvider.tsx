"use client";
import React from 'react';
import { useBackground } from '@/hooks/useBackground';

interface BackgroundProviderProps {
  children: React.ReactNode;
}

export const BackgroundContext = React.createContext<ReturnType<typeof useBackground> | null>(null);

export default function BackgroundProvider({ children }: BackgroundProviderProps) {
  const background = useBackground();

  return (
    <BackgroundContext.Provider value={background}>
      <div className={`min-h-screen transition-all duration-500 ${background.backgroundClass}`}>
        {children}
      </div>
    </BackgroundContext.Provider>
  );
}