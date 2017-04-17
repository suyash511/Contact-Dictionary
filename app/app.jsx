var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ContactDictionaryApp = require('ContactDictionaryApp');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <ContactDictionaryApp/>,
  document.getElementById('app')
);
