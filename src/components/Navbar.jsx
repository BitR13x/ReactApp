import React from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <React.Fragment>
            <header style={{display: "flex"}}>
              <nav className='App-navbar'>
                <ul>  
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                  <li>
                    <Link to="#">Support</Link>
                  </li>
                </ul>
              </nav>
            </header>
        </React.Fragment>
    );
}

export default NavbarComponent;