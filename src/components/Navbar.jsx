import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <dv className="logo">
          <img src={Logo} />
        </dv>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=sex">
            <h6>SEX</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <Link className="link" to="/?cat=entertainment">
            <h6>ENTERTAINMENT</h6>
          </Link>
          <Link className="link" to="/?cat=life">
            <h6>LIFE</h6>
          </Link>
          <Link className="link" to="/?cat=tecnology">
            <h6>TECNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=pet">
            <h6>PET</h6>
          </Link>
          <span>Chain</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
