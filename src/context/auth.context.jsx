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

  // const authenticateUser = () => {           //  <==  ADD  
  //   // Get the stored token from the localStorage
  //   const storedToken = localStorage.getItem('authToken');
    
  //   // If the token exists in the localStorage
  //   if (storedToken) {
  //     // We must send the JWT token in the request's "Authorization" Headers
  //     axios.get(
  //       `${API_URL}/auth/verify`, 
  //       { headers: { Authorization: `Bearer ${storedToken}`} }
  //     )
  //     .then((response) => {
  //       // If the server verifies that the JWT token is valid  
  //       const user = response.data;
  //      // Update state variables        
  //       setIsLoggedIn(true);
  //       setIsLoading(false);
  //       setUser(user);        
  //     })
  //     .catch((error) => {
  //       // If the server sends an error response (invalid token) 
  //       // Update state variables         
  //       setIsLoggedIn(false);
  //       setIsLoading(false);
  //       setUser(null);        
  //     });      
  //   } else {
  //     // If the token is not available (or is removed)
  //       setIsLoggedIn(false);
  //       setIsLoading(false);
  //       setUser(null);      
  //   }   
  // }


  async function login(email, password) {
    return myaxios
      .post(`/api/users/login`, { email, password })
      .then((response) => {
        storeToken(response.data.authToken);
        setIsLoggedIn(true);
        setIsLoading(false);
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
        setIsLoggedIn(true);
        setIsLoading(false);
      })
      .catch((err) => {
<<<<<<< HEAD
        console.log("error while refreshing the user");
        setUser(false);
=======
        console.log("Error while refreshing the user");
>>>>>>> 7e0c2958d90783a79aaab2290c472cd44017589e
        setIsLoggedIn(false);
        setIsLoading(false);
        throw err;
      });
  }

  function logout() {
    localStorage.removeItem("authToken");
    setUser(null);
    setIsLoggedIn(false);
    console.log('c nul')
    navigate("/auth/login");
  }
  window.logout = logout

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
