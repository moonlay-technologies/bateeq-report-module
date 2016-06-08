'use strict'

var sql = require('sql-driver');

module.exports = class SalesReportManager {
    constructor(config) {
        this.sqlConfig = config;
    }

    getConnection() {
        return new sql.SqlConnection(this.sqlConfig);
    }

    getSalesReport(branchCode, dateFrom, dateTo) {
        return new Promise((resolve, reject) => {
            this.getConnection()
                .execSP({
                    sp_name: "SP_SalesReport",
                    params: {
                        dateFrom: dateFrom,
                        dateTo: dateTo,
                        branch: branchCode
                    }
                })
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    reject(e);
                });
        });
    }

}