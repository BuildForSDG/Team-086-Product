import React from 'react';

import Auxiliary from "../../../hoc/Auxiliary";
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import "../../../assets/css/style.css";

const layout = (props) => (
  <Auxiliary>
    <div className="site-wrap">
      <Navbar />
      <Body />
    </div>
  </Auxiliary>
);

export default layout;
