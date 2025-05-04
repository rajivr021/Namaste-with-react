import { useState } from 'react';
import { HeaderLogo } from '../utils/contants';

const Header = () => {
  const [loginbtn,setloginbtn]=useState("login")

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={HeaderLogo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Cart</li>
          <li className="nav-item" onClick={()=>loginbtn==="login"? setloginbtn('logout'): setloginbtn('login')}>{loginbtn}</li>
          
        </ul>
      </div>
    </header>
  );
};

export default Header;
