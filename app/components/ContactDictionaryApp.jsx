var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var ContactList = require('ContactList');
var AddContact = require('AddContact');
var ContactSearch = require('ContactSearch');
var ContactsAPI = require('ContactsAPI');

var ContactDictionaryApp = React.createClass({
  getInitialState: function () {
    // initial state of teh app with empt search text and showfavourites as false. 
    return {
      showFavourites: false,
      searchText: '',
      contacts: ContactsAPI.getContacts()
    };
  },
  componentDidUpdate: function () {
    ContactsAPI.updateContacts(this.state.contacts);
  },
  handleAddContact: function (newContact) {
    /*
    {
      id: uuid(),
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: undefined
    }
    */
    this.setState({
      contacts: [
        ...this.state.contacts,
        newContact
      ]
    });
  },
  handleToggle: function (id) {
    var updatedContacts = this.state.contacts.map((contact) => {
      if (contact.id === id) {
        contact.isFavourite = !contact.isFavourite;
      }

      return contact;
    });

    this.setState({contacts: updatedContacts});
  },
  handleSearch: function (showFavourites, searchText) {
    this.setState({
      showFavourites: showFavourites,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {contacts, showFavourites, searchText} = this.state;
    var filteredContacts = ContactsAPI.filterContacts(contacts, showFavourites, searchText);

    return (
      <div>
        <h1 className="page-title">Contact Dictionary</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <ContactSearch onSearch={this.handleSearch}/>
              <ContactList contacts={filteredContacts} onToggle={this.handleToggle}/>
              <AddContact onAddContact={this.handleAddContact}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ContactDictionaryApp;
