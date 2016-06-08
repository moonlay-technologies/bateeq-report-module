'use strict'

var express = require('express');

var SalesReportManager = require('../managers/sales-report-manager');

module.exports = class SalesReportController {

    constructor(config) {
        this.manager = new SalesReportManager(config);
        this.router = express.Router();
        this.initializeRouter(this.router);
    }

    initializeRouter(router) {
        // Parameter checks.        
        router.param('branch', (request, response, next, value) => {
            next();
        });

        router.param('from', (request, response, next, value) => {
            next();
        });

        router.param('to', (request, response, next, value) => {
            next();
        });

        // Routes.
        router.get('/:from/:to/:branch', (request, response, next) => {
            var branch = request.params.branch;
            var from = request.params.from;
            var to = request.params.to;
            var dateFrom = new Date(from);
            var dateTo = new Date(to);

            this.manager.getSalesReport(branch, dateFrom, dateTo)
                .then(data => {
                    var table = data.toTable();
                    var result = [];
                    for (var row of table.rows) {
                        var item = {}
                        var colIndex = 0;
                        for (var col of table.columns) {
                            item[col.name] = row[colIndex++];
                        }
                        result.push(item);
                    }
                    response.send(result);
                })
                .catch(e => {
                    throw e;
                })
        });
        
        // Routes.
        router.get('/:from/:to', (request, response, next) => {
            var branch = request.params.branch;
            var from = request.params.from;
            var to = request.params.to;
            var dateFrom = new Date(from);
            var dateTo = new Date(to);

            this.manager.getSalesReport('', dateFrom, dateTo)
                .then(data => {
                    var table = data.toTable();
                    var result = [];
                    for (var row of table.rows) {
                        var item = {}
                        var colIndex = 0;
                        for (var col of table.columns) {
                            item[col.name] = row[colIndex++];
                        }
                        result.push(item);
                    }
                    response.send(result);
                })
                .catch(e => {
                    throw e;
                })
        });
    }
};