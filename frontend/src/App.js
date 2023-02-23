// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> testing abc.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import { Policy } from "./pages/Policy";
import { Auth } from "./pages/Auth";
import { Rating } from "./pages/Rating";
import { Insurance } from "./pages/Insurance";
import { Link } from 'react-router-dom';
import api from "./components/api(temp)";
// import React, { useState } from "react";
// import menu from "./pages/menu";
import Cards from "./components/cards";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const res = await api.get('http://localhost:9898/services/check-rating-engine')
  //       console.log(res.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchPosts();
  // })

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/policy">Policy</Link></li>
          <li><Link to="/auth">Auth</Link></li>
          <li><Link to="/rating">Rating</Link></li>
          <li><Link to="/insurance">Insurance</Link></li>
        </ul>
      </nav>
      <Cards></Cards>
      <Routes>
        <Route path="/policy" element={<Policy /> } />
        <Route path="/auth" element={<Auth /> } />
        <Route path="/rating" element={<Rating /> } />
        <Route path="/insurance" element={<Insurance /> } />
      </Routes>
    </>

  );
}
export default App; 