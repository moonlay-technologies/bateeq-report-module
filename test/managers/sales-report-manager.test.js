var should = require('should');
var helper = require('../helper');
var manager;

before('#00 - Initialization', function () {
    manager = helper.getSalesReportManager();
})


it('#01 - Get sales report by branch', function (done) {
    var branchCode;
    manager.getSalesReport(branchCode, new Date(2016, 01, 07), new Date(2016, 01, 07))
        .then(data => {

            data.should.not.null();

            var table = data.toTable();

            table.should.have.property('rows');

            for (var row of table.rows) {
                // row[0].should.equal('kodecabang', "kode cabang tidak sama");
            }

            done();
        })
        .catch(e => {
            done(e);
        })
})