import React from "react";

const SavedResultItem = props => {
  const fav = <i className="fav fa fa-minus" onClick={() => props.onFavoriteClick(props)}/>;

  return (
    <li className="list-group-item">
      <div className="media-body">
        {fav}
        <div className="media-heading">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.headline}
          </a>
        </div>
        <small className="text-muted">
          {props.byline} ({props.pubDate})
        </small>
        <div>{props.snippet}</div>
      </div>
    </li>
  );
};

export default SavedResultItem;
