var $ = require('jquery');
var contactsList = [
  {
    id: 1213,
    name: 'Suyash Goel',
    company: 'Moody \'s Analytics',
    location: {
      city: 'Mountain View',
      state: 'California'
    },
    isFavourite: false,
    phone: '213-820-9643'
  },
  {
    id: 2323,
    name: 'Shivam Gupta',
    company: 'GoDaddy',
    location: {
      city: 'Mountain View',
      state: 'California'
    },
    isFavourite: false,
    phone: '213-820-9641'
  },
  {
    id: 2321,
    name: 'Thao Bach',
    company: 'GoDaddy',
    location: {
      city: 'Palo Alto',
      state: 'California'
    },
    isFavourite: false,
    phone: '213-820-9642'
  }
];
module.exports = {
  updateContacts: function (contacts){
    if ($.isArray(contacts)) {
      contactsList = contacts;
      return contacts;
    }
  },
  getContacts: function (){
    return contactsList;
  },
  filterContacts: function (contacts, showFavourites, searchText) {
    var filteredContacts = contacts;

    // Filter by showFavourites
    filteredContacts = filteredContacts.filter((contact) => {
      if(showFavourites){
        return contact.isFavourite;
      }
      return true;
    });

    // Filter by name
    filteredContacts = filteredContacts.filter((contact) => {
      var name = contact.name.toLowerCase();
      var company = contact.company.toLowerCase();
      return searchText.length === 0 || name.indexOf(searchText) > -1 || company.indexOf(searchText) > -1;
    });

    // Sort contacts with non-favourite first
    filteredContacts.sort((a, b) => {
      if (!a.isFavourite && b.isFavourite) {
        return -1;
      } else if (a.isFavourite && !b.isFavourite) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredContacts;
  }
};
