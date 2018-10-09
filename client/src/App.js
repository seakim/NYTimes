import React, { Component } from "react";
// import NYT from "nyt";
// import API from "./utils/API"
import "./App.scss";
import Title from './components/Title/Title';
import Search from './components/Search/Search';
import SearchResult from './components/SearchResult/SearchResult';
import SavedResult from './components/SavedResult/SavedResult';
import Footer from './components/Footer/Footer';

import sampleData from './components/sample.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      articles: []
    }
  }

  componentWillMount() {
    const sample = sampleData.response.docs;
    this.setState({
      articles: sample
    })
  }

  render() {
    return (
      <div className="container">
        <Title />
        <div className="row">
          <Search />
          {/* <Search articleSearch = {this.getArticles}/> */}
          <SearchResult articles={this.state.articles}/>
        </div>
        <br />
        <div className="row">
          <SavedResult />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
