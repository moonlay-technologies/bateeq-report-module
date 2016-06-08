var helper = require('../helper');


var initializeServer = function () {
    return new Promise((resolve, reject) => {

        var express = require('express');
        var app = express(); 

        var bodyParser = require('body-parser');
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        var morgan = require('morgan');
        app.use(morgan('dev')); 

        var SalesReportControllers = require('../../src/controllers/sales-report-controller');
        app.use('/sales/reports', new SalesReportControllers(helper.config).router); 

        var port = process.env.PORT || 3060;
        app.listen(port);
        console.log("Express server listening on port %d in %s mode", port, 'unit-testing');
        resolve(null);
    });
}

before('initialize server', function (done) {
    initializeServer()
        .then(result => {
            done();
        })
        .catch(e => done(e));
})

var test = helper.test; 
test('@sales-report controller', './controllers/sales-report-controller.test'); 