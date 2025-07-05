import { useContext, useState } from "react";
import { HeaderLogo } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");
  const [active,setActive]=useState('home')
  const onlineStatus = useOnlineStatus();
  const {name}=useContext(UserContext)

  const handleLoginToggle = () => {
    setLoginBtn((prev) => (prev === "login" ? "logout" : "login"));
  };


  const cartItems= useSelector((store)=>store.cart.items);
  console.log(cartItems);
  

  return (
    <header className="flex w-full shadow-md mb-2">
      <div className="flex items-center justify-center">
        <img className="w-12" src={HeaderLogo} alt="App Logo" />
      </div>
      <nav className="flex justify-end w-full">
        <ul className="flex m-3 p-3 gap-3">
          <li className="cursor-pointer px-4 py-2"> <div>{onlineStatus?"🟢":'🔴'}</div> </li>
        <li className={`cursor-pointer px-4 py-2 rounded transition-all duration-300 ease-in-out ${active === 'home' ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => setActive('home')} > <Link to="/">Home</Link> </li>
        <li className={`cursor-pointer px-4 py-2 rounded transition-all duration-300 ease-in-out ${active === 'about' ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => setActive('about')} > <Link to="/about">About</Link> </li>
          <li className={`cursor-pointer px-4 py-2 rounded transition-all duration-300 ease-in-out ${active==='contact'?'bg-black text-white':''}`} onClick={()=>setActive('contact')}> <Link to="/contact">Contact</Link> </li>
           <li className={`cursor-pointer px-4 py-2 rounded transition-all duration-300 ease-in-out ${active==='card'?'bg-black text-white':''}`} onClick={()=>setActive('card')}><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
          <li className="cursor-pointer px-4 py-2 w-6 mr-5" onClick={handleLoginToggle}> {loginBtn} </li>
          <li className={`cursor-pointer px-4 py-2 rounded transition-all duration-300 ease-in-out ${active===`${name}`?'bg-black text-white':''}`}> {name}</li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
