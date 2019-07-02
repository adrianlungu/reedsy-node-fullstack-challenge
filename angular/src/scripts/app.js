/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/
import HomeController from './controllers/HomeController';
import BookService from './services/BookService';

angular.module('myApp', [])
	.controller('HomeController', HomeController)
	.service('BookService', BookService);
