var React = require('react');
var uuid = require('node-uuid');

var AddContact = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var contactName = this.refs.contactName.value;
    var contactCompany = this.refs.contactCompany.value;
    var contactCity = this.refs.contactCity.value;
    var contactState = this.refs.contactState.value;
    var contactPhone = this.refs.contactPhone.value;

    if (contactName.length > 0) {
      this.refs.contactName.value = '';
      this.refs.contactCompany.value = '';
      this.refs.contactCity.value = '';
      this.refs.contactState.value = '';
      this.refs.contactPhone.value = '';

      var addContact = {
        id: uuid(),
        name: contactName,
        company: contactCompany,
        location: {
          city: contactCity,
          state: contactState
        },
        isFavourite: false,
        phone: contactPhone
      }
      this.props.onAddContact(addContact);
    } else {
      this.refs.contactName.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="name" ref="contactName" placeholder="Name"/>
          <input type="company" ref="contactCompany" placeholder="Company"/>
          <input type="city" ref="contactCity" placeholder="City"/>
          <input type="state" ref="contactState" placeholder="State"/>
          <input type="phone" ref="contactPhone" placeholder="Phone"/>
          <button className="button expanded">Add Contact</button>
        </form>
      </div>
    );
  }
});

module.exports = AddContact;
