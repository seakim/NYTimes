import React from "react";
import './SavedResult.scss';

const SavedResult = () => {
  return (
    <div className="saved-result col-sm-12">
      <div className="card">
        <div className="card-header">
          <strong>
            <i className="fa fa-table"></i> Saved Articles</strong>
        </div>
        <div className="card-body" id="article-section">
        </div>
      </div>
    </div>
  )
}

export default SavedResult;