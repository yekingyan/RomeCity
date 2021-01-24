const IP = "127.0.0.1"
const PORT = "7777"
const VERSION = "0.0.1"

const DB_HOST = "127.0.0.1"
const DB_USER = "root"
const DB_PASSWORD = "MYSQL"
const DB_NAME = "rome"
const DB_PORT = 3306

exports.getConfig = () => {
    return {
        PORT,
        IP,
        VERSION,
        DB_HOST,
        DB_USER,
        DB_PASSWORD,
        DB_NAME,
        DB_PORT,
    }
}
