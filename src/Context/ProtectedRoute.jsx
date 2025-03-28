import React from "react";
import { useState, useEffect, useContext, createContext } from "react";
const AuthContext = createContext();
function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    checkAuth();
  }, []);
  const checkAuth = async () => {
    try {
      const response = await Instance.get("/auth/checkToken");
      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log("error found!!");
      setIsAuthenticated(false);
    }
  };

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
