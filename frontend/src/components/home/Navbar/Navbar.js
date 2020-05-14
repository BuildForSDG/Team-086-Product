import React from 'react';

import Auxiliary from "../../../hoc/Auxiliary";
import {Container, NavLink} from 'reactstrap';

const NavBar = (props) => (
  <Auxiliary>
    <header
      className="site-navbar py-4 bg-white js-sticky-header site-navbar-target"
      role="banner"
    >
      <Container>
        <div className="row align-items-center">
          <div className="col-6 col-xl-2">
            <h1 className="mb-0 site-logo">
              <a href="index.html" className="text-black mb-0">
                SME Tracker<span className="text-primary">.</span>{" "}
              </a>
            </h1>
          </div>
          <div className="col-12 col-md-10 d-none d-xl-block">
            <nav
              className="site-navigation position-relative text-right"
              role="navigation"
            >
              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li>
                  <NavLink href="#home-section" rel="noopener noreferrer">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#products-section" rel="noopener noreferrer">
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#about-section" rel="noopener noreferrer">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#testimonials-section"
                    rel="noopener noreferrer"
                  >
                    Testimonials
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#contact-section" rel="noopener noreferrer">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className="col-6 d-inline-block d-xl-none ml-md-0 py-3"
            style={{ position: "relative", top: "3px" }}
          >
            <a
              href="#"
              className="site-menu-toggle js-menu-toggle text-black float-right"
            >
              <span className="icon-menu h3"></span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  </Auxiliary>
);

export default NavBar;