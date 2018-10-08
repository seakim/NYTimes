import React from "react";
import './SearchResult.scss';

const SearchResult = () => {
  return (
    <div className="search-result col-sm-12 col-md-6">
      <div className="card">
        <div className="card-header">
          <strong>
            <i className="fa fa-table"></i> Top Articles</strong>
        </div>
        <div className="card-body" id="article-section">
        </div>
      </div>
    </div>
  )
}

export default SearchResult;