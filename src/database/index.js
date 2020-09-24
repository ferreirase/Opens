const mongoose = require('mongoose');

const host = process.env.MONGO_URL || 'localhost';
mongoose.connect(`mongodb://${host}/opens`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
