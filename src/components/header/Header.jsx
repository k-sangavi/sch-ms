import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="box">
            <div className="header">
              <div className="left">
                <Link to="/about">
                  <button>About</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
