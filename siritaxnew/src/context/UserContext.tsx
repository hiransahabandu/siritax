import React, { useState, createContext, useContext } from 'react';
type UserRole = 'guest' | 'premium' | null;
interface UserContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
}
const UserContext = createContext<UserContextType | undefined>(undefined);
export const UserProvider: React.FC<{
  children: ReactNode;
}> = ({
  children
}) => {
  const [userRole, setUserRole] = useState<UserRole>(null);
  return <UserContext.Provider value={{
    userRole,
    setUserRole
  }}>
      {children}
    </UserContext.Provider>;
};
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};