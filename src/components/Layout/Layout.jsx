import React, { useEffect } from "react";
import Routers from "../../routes/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import authenticate from "../../Authenticate.js"
import { useState } from "react";

const Layout = () => {
    const [auth , setAuth] = useState(false);
    useEffect(() => {
        let auth = authenticate();
        if(auth){
            setAuth(true)
        }
    }, [])
    return (
    <div>
        {auth === true &&<Header /> }
        <div>
            <Routers />
        </div>
        {auth === true && <Footer /> }
        </div>
  );
};

export default Layout;
