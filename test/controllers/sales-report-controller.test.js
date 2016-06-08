var request = require('supertest');
var should = require('should');

it('#01. Get report by branch', function (done) {
    request('localhost:3060')
        .get('/sales/reports/2016-jan-07/2016-jan-07/jkt.02')
        .expect(200)
        .end(function (err, response) {
            if (err)
                done(err);
            else {
                var result = response.body; 
                result.should.be.instanceOf(Array);
                done();
            }
        })

})

it('#02. Get report without branch', function (done) {
    request('localhost:3060')
        .get('/sales/reports/2016-jan-07/2016-jan-07')
        .expect(200)
        .end(function (err, response) {
            if (err)
                done(err);
            else {
                var result = response.body; 
                result.should.be.instanceOf(Array);
                done();
            }
        })

})