import React from "react";

const SearchResultItem = (props) => {
  console.log(props)
  return (
		<li className="list-group-item">
      <div className="media-body">
        <a id="fav" href="#!"><i className="fa fa-plus"></i></a>
        <div className="media-heading"><a href={props.url} target="_blank" rel="noopener noreferrer">{props.headline}</a></div>
        <small className="text-muted">{props.byline}  ({props.pubDate})</small>
        <div>{props.snippet}</div>
      </div>
    </li>
  )
}

export default SearchResultItem;