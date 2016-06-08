
exports.test = function (name, path) {
    describe(name, function () {
        require(path);
    })
}

var config = {
    user: 'app',
    password: 'Admin-pwd',
    server: '11.11.1.32',
    // You can use 'localhost\\instance' to connect to named instance     
    port: 1435, database: 'BATEEQ_EFRATA_SIM',
    debug: false,
    options: {
        encrypt: false
        // Set this to <true> if you're on Windows Azure   
    }
};
exports.config = config;

exports.getSalesReportManager = function () {
    var SalesReportManager = require('../src/managers/sales-report-manager');
    return new SalesReportManager(config)
}