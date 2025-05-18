import { useState } from "react";
import { HeaderLogo } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");
  const onlineStatus = useOnlineStatus();

  const handleLoginToggle = () => {
    setLoginBtn(prev => (prev === "login" ? "logout" : "login"));
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={HeaderLogo} alt="App Logo" />
      </div>
      <nav className="nav-items">
        <ul className="nav-list">
          <li className="containerOnlineOfflineDot">
            <div
              className={`statusDot ${onlineStatus ? "green" : "red"}`}
              title={onlineStatus ? "Online" : "Offline"}
            ></div>
          </li>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item">Cart</li>
          <li className="nav-item" onClick={handleLoginToggle}>
            {loginBtn}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
