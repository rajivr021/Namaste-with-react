import "../index.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurnetMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import  UserContext  from "./utils/UserContext";

const App = () => {
  const [userName, setUserName] = useState('rajiv');
  useEffect(() => {
    const data = {
      name: "Rajiv",
    };
    setUserName(data.name);
  }, []);

  return (
    <div className="app h-screen overflow-hidden">
      <UserContext.Provider value={{name:userName,setUserName}}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/restaurent/:resId", element: <RestaurnetMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
