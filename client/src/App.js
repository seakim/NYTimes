import React, { Component } from "react";
import "./App.scss";

import Title from './components/Title/Title';
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Title />
        <Search />
        <br />
        <Result />
        <Footer />
      </div>

    );
  }
}

export default App;
