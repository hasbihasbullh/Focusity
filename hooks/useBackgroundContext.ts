import { useContext } from 'react';
import { BackgroundContext } from '@/common/components/BackgroundProvider';

export const useBackgroundContext = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackgroundContext must be used within a BackgroundProvider');
  }
  return context;
};