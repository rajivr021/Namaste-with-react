import React, { useEffect } from "react";

const User = () => {
  useEffect(() => {
    const Timer = setInterval(() => {
      console.log("rajiv");
    }, 1000);

    return () => {
      clearInterval(Timer);
      console.log("useEffect return");
    };
  }, []);
  return <div>this is User component</div>;
};

export default User;
