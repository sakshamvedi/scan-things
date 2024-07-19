import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AppContextInterface {
  sharedData: string;
  setSharedData: (data: string) => void;
}

const AppContext = createContext<AppContextInterface | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [sharedData, setSharedData] = useState('');

  return (
    <AppContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};