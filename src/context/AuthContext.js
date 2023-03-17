import React from 'react';


export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = React.useState(undefined);


  function login(userData) {
    setAuth(userData)
  }
  function logout() {
    setAuth(undefined)
  }

  const valueContext = {
    auth,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  )
}