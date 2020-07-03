import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    value: "",
  };

  timeout = null;
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 500);
  };

  render() {
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <i className="fas rmdb-fa-search fa-search" />
          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="Search"
            onChange={this.onChange}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}
export default SearchBar;
