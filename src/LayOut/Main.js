import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Analytics from "../components/Analytics";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Analytics></Analytics>
    </div>
  );
};

export default Main;
