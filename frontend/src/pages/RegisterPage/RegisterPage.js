import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import "./RegisterPage.css";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div className="register-container">
      <form className="" onSubmit={handleSubmit}>
        <div className="reg-contain">
          <div>
            <label className="reg-label-un">Username:{" "} </label>
            <input type="text" className = "reg-input-un" name="username" value={formData.username} onChange={handleInputChange}/>      
          </div>
          <div>
            <label className="reg-label">First Name:{" "}</label>
            <input type="text" className = "reg-input" name="firstName" value={formData.firstName} onChange={handleInputChange}/>
          </div>
            <label className="reg-label">Last Name:{" "} </label>
            <input type="text" className = "reg-input-ln" name="lastName" value={formData.lastName} onChange={handleInputChange}/>
          <div>
            <label className="reg-label-em">Email:{" "}</label>
            <input type="text" className = "reg-input-em" name="email" value={formData.email} onChange={handleInputChange}/>
          </div>
          <div>
            <label className="reg-label-pw">Password:{" "} </label>
            <input type="text" className = "reg-input" name="password" value={formData.password} onChange={handleInputChange}/>
          </div>
          <div>
            <p className="reg-font"> NOTE: Enter an uncommon password (e.g. characters, numbers, and special characters)</p>
          </div>
          <div className="reg-button-contain">
            <button className="reg-button">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;