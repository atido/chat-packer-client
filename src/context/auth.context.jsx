import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import myaxios from "../../myaxios";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function storeToken(token) {
    localStorage.setItem("authToken", token);
  }

  async function login(email, password) {
    return myaxios
      .post(`/api/users/login`, { email, password })
      .then((response) => {
        storeToken(response.data.authToken);
        return refreshUser();
      })
      .catch((err) => {
        console.log("error while logining");
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(false);
        throw err;
      });
  }

  async function refreshUser() {
    return myaxios
      .get("/api/user")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log("Error while refreshing the user");
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(false);
        throw err;
      });
  }

  function logout() {
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/auth/login");
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
        setUser,
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
