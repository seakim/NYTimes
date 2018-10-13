import React, { Component } from "react";
import "./App.scss";
import API from "./utils/API"
import Title from './components/Title/Title';
import Search from './components/Search/Search';
import SearchResult from './components/Result/Searched/SearchResult';
import SavedResult from './components/Result/Saved/SavedResult';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      selectedArticle: null,
      favArticles: []
    };
  }

  componentDidMount() {
    this.loadArticles();
  }
  
  postArticle(article) {
    API.postArticleToDB(article)
      .catch( err => console.log(err) )
      .then( this.loadArticles() );
  }
  
  removeArticle(article) {
    API.removeArticleFromDB(article)
      .catch( err => console.log(err) )
      .then( this.loadArticles() );
  }

  async loadArticles() {
    const result = await API.getArticlesFromDB();
    this.setState({favArticles: result.data});
  }

  async searchArticle(article) {
    const result = await API.getArticles(article.q, article.begin_date, article.end_date, article.sort, article.page);
    this.setState({articles: result.data.response.docs});
  }



  render() {
    return (
      <div className="container">
        <Title />
        <div className="row">
          <Search onSearchTermChange = {term => this.searchArticle(term)}/>
        </div>
        <br />
        <div className="row">
          <SearchResult 
            articles = {this.state.articles}
            onFavoriteClick = {selectedArticle => this.postArticle(selectedArticle)}
          />
          <SavedResult 
            favArticles = {this.state.favArticles}
            onFavoriteClick = {selectedArticle => this.removeArticle(selectedArticle)}
          />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
