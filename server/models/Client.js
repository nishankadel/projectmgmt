const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({

// write schemas here
name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },

});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;