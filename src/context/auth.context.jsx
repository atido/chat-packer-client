import React, { useEffect, useState } from "react";
import myaxios from "../../myaxios";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  function storeToken(token) {
    localStorage.setItem("authToken", token);
  };

  function login(email, password) {
    return myaxios
      .post(`/api/sessions`, { email, password })
      .then((response) => {
        storeToken(response.data.authToken);
        return refreshUser();
      })
      .catch((err) => {
        console.log("error while logining");
        throw err
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(false);
      });
  }

  function refreshUser() {
    return myaxios
      .get("/api/user")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log("error while refreshing the user");
        throw err
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(false);
      });
  }

  function logout() {
    localStorage.removeItem("authToken");
    setUser(null);
  }

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        login,
        refreshUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
