import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="logo-brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h1>HUNTR</h1>
          </Link>
      </div>
      <div>
          {user ? (
            <button className = 'login-button' onClick={logoutUser}>Logout</button>
          ) : (
            <button className = 'login-button' onClick={() => navigate("/login")}>Login</button>
            
          )}
      </div>
    </div>
  );
};

export default Navbar;