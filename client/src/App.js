import React, { Component } from "react";
// import NYT from "nyt";
import API from "./utils/API"
import "./App.scss";
import Title from './components/Title/Title';
import Search from './components/Search/Search';
import SearchResult from './components/SearchResult/SearchResult';
import SavedResult from './components/SavedResult/SavedResult';
import Footer from './components/Footer/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
    this.ArticleSearch("test");
  }

  ArticleSearch(term) {
    // API.getArticles()
    API.getRandomDog().then( res => console.log(res));
  }

  render() {
    return (
      <div className="container">
        <Title />
        <div className="row">
          {/* <Search onSearchTermChange = {ArticleSearch} /> */}
          <Search />
          <SearchResult />
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
