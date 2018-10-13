import React from "react";
import "../Result.scss";
import SearchResultItem from "./SearchedResultItem";

const SearchResult = props => {
  const ArticleList = props.articles.map(article => {
    let byline = "";
    if (article.byline) {
      byline = article.byline.original;
    }
    return (
      <SearchResultItem
        onFavoriteClick={props.onFavoriteClick}
        key={article._id}
        id={article._id}
        headline={article.headline.main}
        byline={byline}
        snippet={article.snippet}
        url={article.web_url}
        pubDate={article.pub_date}
      />
    );
  });

  return (
    <div className="search-result col-sm-12 col-md-6">
      <div className="card">
        <div className="card-header">
          <strong>
            <i className="fa fa-table" /> Top Articles
          </strong>
        </div>
        <div className="card-body" id="article-section">
          <div id="scroll">
            <ul>{ArticleList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
