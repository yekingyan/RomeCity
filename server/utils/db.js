const MYSQL = require("mysql")
let pool = null


exports.query = (sql) => {
    return new Promise ((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                throw err
            }
            conn.query(sql, (qerr, vals, fields) => {
                if (qerr) {
                    throw qerr
                }
                conn.release()
                resolve(vals)
            })
        })
    })
}


exports.init = (config) => {
    pool = MYSQL.createPool({
        host: config.DB_HOST,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DB_NAME,
        port: config.DB_PORT,
    })
}


exports.getNameByUserId = (userId) => {
    return new Promise ((resolve, reject) => {
        userId = parseInt(userId)
        if (!userId) {
            reject(null)
            return
        }
        let sql = `
            SELECT name
            FROM user
            WHERE id = ${userId};
        `
        console.log("sql", sql)
        this.query(sql).then((vals) => {
            console.log("q then", vals)
            // console.log("then", arguments)
            if (vals && vals[0].name) {
                resolve(vals[0].name)
            } else {
                resolve(null)
            }
        }).catch(err => {
            throw err
        })
    })
}
