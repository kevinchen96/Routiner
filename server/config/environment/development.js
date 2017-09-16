'use strict';
/*eslint noprocessenv:0*/

// Development specific configuration
// ==================================
module.exports = {

// MongoDB connection options
	mongo: {
	 uri: 'mongodb://localhost/routinerdev'
	},

	// Seed database on startup
	seedDB: true

};
