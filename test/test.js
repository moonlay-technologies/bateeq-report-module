var test = require('./helper').test;


describe('TEST:sales-report-module', function(){
    this.timeout(1 * 60000);       
    test('@sales-report-manager', './managers/sales-report-manager.test');

    test('@controllers', './controllers');
})