import React, { Component } from "react";
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
      articles: [],
      selectedArticle: ""
    };
  }

  articleSearch(article) {
    API.getArticles(article.q, article.begin_date, article.end_date, article.sort, article.page)
      .then(data => {
        console.log(data.data.response.docs)
        this.setState({articles: data.data.response.docs})
      });
  }
  render() {
    return (
      <div className="container">
        <Title />
        <div className="row">
          <Search onSearchTermChange={term => this.articleSearch(term)}/>
        </div>
        <br />
        <div className="row">
          <SearchResult articles={this.state.articles}/>
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
