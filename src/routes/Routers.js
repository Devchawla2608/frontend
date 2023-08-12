import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Market from "../pages/Market";
import Create from "../pages/Create";
import Contact from "../pages/Contact";
import SignIn from "../components/SignIn/SignIn.jsx";
import SignUp from "../components/SignUp/SignUp.jsx";
import Wallet from "../pages/Wallet";
import NftDetails from "../pages/NftDetails";
import Explore from "../pages/Explore.jsx";
import Profile from "../pages/Profile.jsx";
import Post from "../pages/Post.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/sign-up" element={ <SignUp/>} />
      <Route path="/home" element={       <PrivateRoute> <Home />  </PrivateRoute> } />
      <Route path="/market" element={<PrivateRoute> <Market />  </PrivateRoute>} />
      <Route path="/create" element={<PrivateRoute> <Create />  </PrivateRoute>} />
      <Route path="/contact" element={<PrivateRoute> <Contact />  </PrivateRoute>} />
      <Route path="/wallet" element={<PrivateRoute> <Wallet />  </PrivateRoute>} />
      <Route path="/market/:id" element={<PrivateRoute> <NftDetails />  </PrivateRoute>} />
      <Route path="/Explore" element={<PrivateRoute> <Explore />  </PrivateRoute>} />
      <Route path="/Profile" element={<PrivateRoute> <Profile />  </PrivateRoute>} />
      <Route path="/post" element={<PrivateRoute> <Post />  </PrivateRoute>} />
    </Routes>
  );
};

export default Routers;
