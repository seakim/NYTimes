import React, { Component } from "react";
import './Search.scss';

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      q: "",
      sort: "newest",
      page: 0,
      begin_date: "",
      end_date: ""
    }
  }

	onQChage(q) {
		this.setState({ q });
		// this.props.onSearchTermChange(q);
  }
  onSortChage(sort) {
		this.setState({ sort });
  }
  onPageChage(page) {
		this.setState({ page });
  }
  onBeginDateChage(begin_date) {
		this.setState({ begin_date });
  }
  onEndDateChage(end_date) {
		this.setState({ end_date });
  }
  // onClear() {
  //   this.setState({
  //     q: "",
  //     sort: "newest",
  //     page: 1,
  //     begin_date: "",
  //     end_date: ""
  //   });
  // }
  render() {
    return (
      <div className="search col-sm-12 col-md-6">
        <div className="card">
          <div className="card-header">
            <strong>
              <i className="fa fa-list-alt"></i> Search Parameters</strong>
          </div>
          <div className="card-body">
            <form role="form">
              <div className="form-group">
                <label htmlFor="search">Search Term:</label>
                <input type="text" className="form-control" id="search-term" 
                  value = {this.state.q}
                  onChange = {event => this.onQChage(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sort">Sort Result:</label>
                <select id="sort" className="custom-select" aria-labelledby="dropdownMenuButton"
                  value = {this.state.sort}
                  onChange = {event => this.onSortChage(event.target.value)}
                >
                  <option value="newest">Newest</option>
                  <option value="oldest" >Oldest</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="page">Result Page:</label>
                <select id="article-count" className="custom-select" aria-labelledby="dropdownMenuButton"
                  value = {this.state.page}
                  onChange = {event => this.onPageChage(event.target.value)}
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
              <div className="form-group">
                <label htmlFor="start-year">Start Date (Optional):</label>
                <input type="text" className="form-control" id="start-year" placeholder="20181010"
                  value = {this.state.begin_date}
                  onChange = {event => this.onBeginDateChage(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="end-year">End Date (Optional):</label>
                <input type="text" className="form-control" id="end-year" placeholder="20181231"
                  value = {this.state.end_date}
                  onChange = {event => this.onEndDateChage(event.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
        q = {this.state.q} |
        sort = {this.state.sort} |
        page = {this.state.page} |
        begin = {this.state.begin_date} |
        end = {this.state.end_date}
      </div>
    )
  }

}

export default Search;
