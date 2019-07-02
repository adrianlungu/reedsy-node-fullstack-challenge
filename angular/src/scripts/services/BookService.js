import * as Api from '../api/api';

export default class BookService {

	/*
	  The below annotation will be processes by ngAnnotate, which
	  will annotate the constructor after compiling for minification.
	*/
	/*@ngInject;*/
	constructor($q) {
		// this._$q = $q;
	}

	get(page, size) {
		//return this._$q.when(new Person());
		return Api.getBooks(page, size);
	}
}
