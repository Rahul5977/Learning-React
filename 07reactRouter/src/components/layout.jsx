import React from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout