import Cards from "../components/cards";
// import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import policyService from "./pages/policyService";
//Main Menu
function Menu() {
    return (
      <div className="Menu">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        {/* <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button> */}



      </div>
    );
  }
  
  export default Menu;