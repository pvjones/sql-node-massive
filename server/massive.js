const massive = require('massive');
const connectionString = 'postgres://postgres:postgres@localhost/product';
const massiveInstance = massive.connectSync({connectionString:connectionString});

module.exports = massiveInstance;