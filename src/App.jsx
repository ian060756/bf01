import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import React from "react";
import { Outlet } from "react-router-dom";
export default function App(){
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}