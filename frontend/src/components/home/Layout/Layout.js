import React from 'react';

import Auxiliary from "../../../hoc/Auxiliary";
import Navbar from '../Navbar/Navbar';
import Topbar from '../Topbar/Topbar';
import Body from '../Body/Body';
import '../../../assets';

const layout = (props) => (
  <Auxiliary>
    <div className="site-wrap">
      <Topbar />
      <Navbar />
      <Body />
    </div>
  </Auxiliary>
);

export default layout;
