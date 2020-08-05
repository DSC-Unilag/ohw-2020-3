const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const contactsSchema = new Schema({
  name: {
  	type: String,
  	default: 'Anonymous',
  },
  email: {
  	type: String,
  	required: true
  },
  message: {
  	type: String,
  	required: true
  }
}, {
	timestamps: true
});

const Contact = mongoose.model('Contact', contactsSchema);

module.exports = Contact;