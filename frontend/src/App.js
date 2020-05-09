import React, { Component } from 'react';

import Layout from './components/home/Layout/Layout';

class App extends Component{
  componentDidMount (){
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    script.src = "./assets/js/owl.carousel.min.js";
    script2.src = "./assets/js/aos.js";
    script.async = true;
    script2.async = true;
    document.body.appendChild(script);
    document.body.appendChild(script2);
  }

  render() {
    return (
      <div>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;
