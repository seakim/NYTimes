import React from "react";
import './SearchResult.scss';
import SearchResultItem from "./SearchResultItem"
const SearchResult = ({articles}) => {

  console.log(articles)
  const ArticleList = articles.map( article => {
    return (
      <SearchResultItem 
        key = {article._id}
        id = {article._id}
        headline = {article.headline.main}
        byline = {article.byline.original}
        snippet = {article.snippet}
        url = {article.web_url}
        pubDate = {article.pub_date}
      />
    )
  })

  return (
    <div className="search-result col-sm-12 col-md-6">
      <div className="card">
        <div className="card-header">
          <strong>
            <i className="fa fa-table"></i> Top Articles</strong>
        </div>
        <div className="card-body" id="article-section">
          <div id="scroll">
            <ul>{ArticleList}</ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SearchResult;