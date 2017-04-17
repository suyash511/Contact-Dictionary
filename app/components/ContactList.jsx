var React = require('react');
var Contact = require('Contact');

var ContactList = React.createClass({
  render: function () {
    var {contacts} = this.props;
    var renderContacts = () => {
      if (contacts.length === 0) {
        return (
          <p className="container__message">No Contacts</p>
        );
      }

      return contacts.map((contact) => {
        return (
          <Contact key={contact.id} {...contact} onToggle={this.props.onToggle}/>
        );
      });
    };

    return (
      <div>
        {renderContacts()}
      </div>
    )
  }
});

module.exports = ContactList;
