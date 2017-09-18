var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
    useMongoClient: true
}).catch(err => {
    console.error('Connection fails');
    process.exit(1);
});

module.exports = {mongoose};