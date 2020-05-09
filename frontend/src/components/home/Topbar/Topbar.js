import React from 'react';

import Auxiliary from "../../../hoc/Auxiliary";

const Topbar = () => (
  <Auxiliary>
    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>

    <div className="top-bar py-3 bg-light" id="home-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 text-left">
            <ul className="social-media">
              <li>
                <a href="#" className="">
                  <span className="icon-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <span className="icon-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <span className="icon-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <span className="icon-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <p className="mb-0 float-right">
              <span className="mr-3">
                <a href="tel://#">
                  {" "}
                  <span
                    className="icon-phone mr-2"
                    style={{position: 'relative', top: '2px'}}
                  ></span>
                  <span className="d-none d-lg-inline-block text-black">
                    (+1) 234 5678 9101
                  </span>
                </a>
              </span>
              <span>
                <a href="#">
                  <span
                    className="icon-envelope mr-2"
                    style={{position: 'relative', top: '2px'}}
                  ></span>
                  <span className="d-none d-lg-inline-block text-black">
                    shop@yourdomain.com
                  </span>
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Auxiliary>
);

export default Topbar;