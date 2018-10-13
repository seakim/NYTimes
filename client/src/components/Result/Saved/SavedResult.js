import React from "react";
import "../Result.scss";
import SavedResultItem from "./SavedResultItem";

const SavedResult = props => {
  const ArticleList = props.favArticles.map(article => {
    return (
      <SavedResultItem
        onFavoriteClick={props.onFavoriteClick}
        key={article._id}
        id={article._id}
        headline={article.headline}
        byline={article.byline}
        snippet={article.snippet}
        url={article.url}
        pubDate={article.pubDate}
      />
    );
  });

  return (
    <div className="saved-result col-sm-6">
      <div className="card">
        <div className="card-header">
          <strong>
            <i className="fa fa-table" /> Saved Articles
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

export default SavedResult;
