'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  gap: boolean;
  setGap: (gap: boolean) => void;
  grayscale: boolean;
  setGrayscale: (grayscale: boolean) => void;
  hueFilters: {
    grays: boolean;
    yellows: boolean;
    reds: boolean;
    purples: boolean;
    blues: boolean;
    greens: boolean;
  };
  setHueFilter: (group: keyof AppContextType['hueFilters'], value: boolean) => void;
  sidebarsVisible: boolean;
  setSidebarsVisible: (visible: boolean) => void;
  squashed: boolean;
  setSquashed: (squashed: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [gap, setGap] = useState(true);
  const [grayscale, setGrayscale] = useState(true);
  const [hueFilters, setHueFilters] = useState({
    grays: true,
    yellows: true,
    reds: true,
    purples: true,
    blues: true,
    greens: true,
  });
  const [sidebarsVisible, setSidebarsVisible] = useState(true);
  const [squashed, setSquashed] = useState(false);

  const setHueFilter = (group: keyof AppContextType['hueFilters'], value: boolean) => {
    setHueFilters(prev => ({ ...prev, [group]: value }));
  };

  return (
    <AppContext.Provider value={{ 
      gap, 
      setGap, 
      grayscale, 
      setGrayscale, 
      hueFilters, 
      setHueFilter,
      sidebarsVisible,
      setSidebarsVisible,
      squashed,
      setSquashed
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
} 