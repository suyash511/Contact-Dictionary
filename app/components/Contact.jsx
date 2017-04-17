var React = require('react');
var moment = require('moment');

var Contact = React.createClass({
  render: function () {
    var {id, name, company, location, isFavourite, phone} = this.props;
    var contactClassName = isFavourite ? 'todo' : 'todo';
    var renderContact = () => {
      var message = 'Works at  ' + company;

      return message;
    };

    return (
      <div className={contactClassName} onClick={() => {
          this.props.onToggle(id);
        }}>
        <div>
          <input type="checkbox" checked={isFavourite}/>
        </div>
        <div>
          <p>{name}</p>
          <p className="todo__subtext">{renderContact()}</p>
        </div>
      </div>
    )
  }
});

module.exports = Contact;