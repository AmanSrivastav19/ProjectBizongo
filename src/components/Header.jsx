import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function () {

  const buttonon = useNavigate()

  function button(){
    buttonon("/started")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light " to="/">
            <img src="https://global-uploads.webflow.com/5fad195767bb5f0163efac7f/5fb62c989051fe737eef847a_Bizongo-logo.png"
             width="40px"
             
             
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <p className="dropdown-item">USE CASES</p>
                  <li>
                    <NavLink
                      className="dropdown-item "
                      to="/supply "
                      style={{ fontWeight: "bold" }}
                    >
                      {" "}
                      Supply Chain Financing{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/digital"
                      style={{ fontWeight: "bold" }}
                    >
                      {" "}
                      Digital Vendor Management{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/supplyautoamtion"
                      style={{ fontWeight: "bold" }}
                    >
                      {" "}
                      Supply Chain Automation
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <p className="dropdown-item"> PROCUREMENT </p>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/auction"
                      style={{ fontWeight: "bold" }}
                    >
                      {" "}
                      E-Auction
                    </NavLink>{" "}
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {" "}
                      PACKING DESIGN{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/desworks "
                      style={{ fontWeight: "bold" }}
                    >
                      {" "}
                      Desworks
                    </NavLink>{" "}
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platform
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/procure"
                      style={{ fontWeight: "bold" }}
                    >
                      Procure Live
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/partner"
                      style={{ fontWeight: "bold" }}
                    >
                      Partner Hub
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/artwork"
                      style={{ fontWeight: "bold" }}
                    >
                      Artwork Flow
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Industries
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item " href="#">
                      VIEW BY SECTOR
                    </a>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/ecommerce"
                      style={{ fontWeight: "bold" }}
                    >
                      E-Commerce & Retail
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/consumer"
                      style={{ fontWeight: "bold" }}
                    >
                      Consumer Discretionary
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      tp="/pharma"
                      style={{ fontWeight: "bold" }}
                    >
                      Pharamceutical
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/personalcare"
                      style={{ fontWeight: "bold" }}
                    >
                      Home & Personal Care
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      href="/Staples"
                      style={{ fontWeight: "bold" }}
                    >
                      Consumer Staples
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/fashion"
                      style={{ fontWeight: "bold" }}
                    >
                      Fashion & Life Style
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle  text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/customer"
                      style={{ fontWeight: "bold" }}
                    >
                      Customer Stories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/webinar"
                      style={{ fontWeight: "bold" }}
                    >
                      Webinars
                    </NavLink>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/fromtheblog"  style={{ fontWeight: "bold" }}>
                      From the blog
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  text-light" to="/catalogue">Catalogue</NavLink>
              </li>
            </ul>

            <button
              className="btn btn-outline-primary text-light " 
              onClick={button}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
