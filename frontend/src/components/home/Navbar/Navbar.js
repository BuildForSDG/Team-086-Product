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
                Selling<span className="text-primary">.</span>{" "}
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
                  <NavLink>Home</NavLink>
                </li>
                <li>
                  <NavLink>Products</NavLink>
                </li>
                <li>
                  <NavLink>About Us</NavLink>
                </li>
                <li>
                  <NavLink>Special</NavLink>
                </li>
                <li>
                  <NavLink>Testimonials</NavLink>
                </li>
                <li>
                  <NavLink>Blog</NavLink>
                </li>
                <li>
                  <NavLink>Contact</NavLink>
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