import React, { Component } from "react";
import './Result.scss';

const Search = () => {
  return (
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <strong>
              <i class="fa fa-table"></i> Top Articles</strong>
          </div>
          <div class="card-body" id="article-section">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;