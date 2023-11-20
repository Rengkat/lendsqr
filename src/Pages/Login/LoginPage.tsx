import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import "./Style.scss";
import logo from "../../assets/Union.png";
import banner from "../../assets/lendsqr.png";
import welcomImage from "../../assets/pablo-sign-in 1.png";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../Redux/Features/LoginSlice";
import { AppContext } from "../../Context/AppContext";

// === Form input field types ===

const LoginPage = () => {
  const dispatch = useDispatch();
  const { getLoginUser } = useContext(AppContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password && email) {
      dispatch(updateUser({ email, password }));
      getLoginUser({ email, password });
      navigate("/");
    } else {
      return;
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div className="login-page">
      <div className="container">
        <div className="banner">
          <div>
            {/* ===logo=== */}
            <div className="logo-wrapper">
              <img className="logo" src={logo} alt="logo" />
              <img className="brand-name" src={banner} alt="brand name" />
            </div>
            {/* == lage image == */}
            <img className="welcomImage" src={welcomImage} alt="welcom image" />
          </div>
        </div>
        {/* ==left side with login part== */}
        <div className="login">
          <div className="loginContainer">
            <div className="welcomText">
              <h1>Welcome!</h1>
              <p>Enter details to login.</p>
            </div>
            <form onSubmit={handleSubmit}>
              {/* ==input == */}
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
              <p>Forgot password?</p>
              <div className="login-btn">
                <button type="submit">LOG IN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
