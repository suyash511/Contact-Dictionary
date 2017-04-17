var React = require('react');

var ContactSearch = React.createClass({
  handleSearch: function () {
    var showFavourites = this.refs.showFavourites.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showFavourites, searchText);
  },
  render: function () {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search Contact" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showFavourites" onChange={this.handleSearch}/>
            Show Favourites Contacts
          </label>
        </div>
      </div>
    )
  }
});

module.exports = ContactSearch;
