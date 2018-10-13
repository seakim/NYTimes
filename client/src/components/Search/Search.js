import React, { Component } from "react";
import './Search.scss';
import moment from 'moment';

class Search extends Component {
  constructor (props) {
    super(props);
    const topic = ['business','sports', 'arts', 'science', 'economic', 'politic'];
    this.state = {
      q: topic[Math.floor(Math.random()*topic.length)],
      sort: "newest",
      page: "0",
      begin_date: moment().format('YYYYMM')+'01',
      end_date: moment().format('YYYYMMDD')
    }
  }

  onEnter(event) {
    if (event.charCode === 13) {
      this.props.onSearchTermChange(this.state);
    }
  }
  render() {
    return (
      <div className="search col-sm-12 col-md-12">
        <div className="card">
          <div className="card-header">
            <strong>
              <i className="fa fa-list-alt"></i> Search</strong>
          </div>
          <div className="card-body"> 
            <div className="row">

              {/* SEARCH-TERM */}
              <div className="form-group col-md-3">
                <small className="text-muted" htmlFor="search">Search Term:</small>
                <input type="text" className="form-control" id="search-term" 
                  value = {this.state.q}
                  onChange = {event => this.setState({q: event.target.value})}
                  onKeyPress = {(event) => this.onEnter(event)}
                />
              </div>

              {/* SORT */}
              <div className="form-group col-md-2">
                <small className="text-muted" htmlFor="sort">Sort Result:</small>
                <select id="sort" className="custom-select" aria-labelledby="dropdownMenuButton"
                  value = {this.state.sort}
                  onChange = { event => this.setState({sort: event.target.value})}
                  onKeyPress = {(event) => this.onEnter(event)}
                >
                  <option value="newest">Newest</option>
                  <option value="oldest" >Oldest</option>
                </select>
              </div>

              {/* PAGE */}
              <div className="form-group col-md-2">
                <small className="text-muted" htmlFor="page">Result Page:</small>
                <select id="article-count" className="custom-select" aria-labelledby="dropdownMenuButton"
                  value = {this.state.page}
                  onChange = {event => this.setState({page: event.target.value})}
                  onKeyPress = {(event) => this.onEnter(event)}
                >
                  <option value="0">1</option>
                  <option value="1" >2</option>
                  <option value="2" >3</option>
                  <option value="3" >4</option>
                  <option value="4" >5</option>
                  <option value="5" >6</option>
                  <option value="6" >7</option>
                  <option value="7" >8</option>
                  <option value="8" >9</option>
                  <option value="9" >10</option>
                </select>
              </div>

              {/* START */}
              <div className="form-group col-md-2">
                <small className="text-muted" htmlFor="start-year">Start Date:</small>
                <input type="text" className="form-control" id="start-year" placeholder="20181010"
                  value = {this.state.begin_date}
                  onChange = {event => this.setState({begin_date: event.target.value})}
                  onKeyPress = {(event) => this.onEnter(event)}
                />
              </div>

              {/* END */}
              <div className="form-group col-md-2">
                <small className="text-muted" htmlFor="end-year">End Date:</small>
                <input type="text" className="form-control" id="end-year" placeholder="20181231"
                  value = {this.state.end_date}
                  onChange = {event => this.setState({end_date: event.target.value})}
                  onKeyPress = {(event) => this.onEnter(event)}
                />
              </div>

              {/* SUBMIT */}
              <button type="submit" className="btn btn-default btn-sm col-md-1" id="run-search"
                onClick = {() => this.props.onSearchTermChange(this.state)}
              >
                <i className="fa fa-search"></i></button>
              </div>
            </div>

            <div className="row"> 



            </div>
        </div>
      </div>
    )
  }

}

export default Search;
