const IP = "127.0.0.1"
const PORT = "7777"
const VERSION = "0.0.1"

exports.userServer = () => {
    return {
        PORT,
        IP,
        VERSION,
    }
}
