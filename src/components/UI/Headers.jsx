import React from "react";
import { NavLink } from "react-router-dom";
const Headers = () => {
  return (
    <>
      <nav>
        <div className="container-header">
            <div className="logo">
              <NavLink to="/">
                <h1> WORLD-ATLAS</h1>
              </NavLink>
            </div>
            <div className="list">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/country">Country</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          
        </div>
      </nav>
    </>
  );
};

export default Headers;
