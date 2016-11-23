//dependencies
var loki = require('lokijs');

//created new db and name it
var db = new loki('db.json');

//create db collection and populate it
db.addCollection('top').insert([
  {term:'JavaScript'      , style :'warning' },
  {term:'Angular 2'       , style :'danger'  },
  {term:'NodeJS'          , style :'success' },
  {term:'Golang'          , style :'info'    },
  {term:'iOS'             , style :'default' },
  {term:'ReactJS'         , style :'warning' },
  {term:'Ionic'           , style :'info'    },
  {term:'REST'            , style :'primary' },
  {term:'Authentication'  , style :'default' },
  {term:'Android'         , style :'success'}
]);

//create searches collection
db.addCollection('searches');

//save the database
db.saveDatabase();