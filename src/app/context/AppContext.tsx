'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  gap: boolean;
  setGap: (gap: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [gap, setGap] = useState(true);

  return (
    <AppContext.Provider value={{ gap, setGap }}>
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