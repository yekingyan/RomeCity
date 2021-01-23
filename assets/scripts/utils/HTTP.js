const HOST = "http://127.0.0.1:7777";


async function aRequest(method, path, data) {
    let url = `${HOST}/${path}`
    try {
        let response = await fetch(url, {
            method: method,
            body: JSON.stringify(data)
        })
        res = await response.json()
        return res
    } catch (error) {
        log('request Failed', error, method, path, data)
    }
}


function request(method, path, data) {
    return new Promise((resolve, reject) => {
        let reqData = {method: method}
        let url = `${HOST}/${path}`
        if (method !== "GET") {
            reqData.body = JSON.stringify(data)
        }
        fetch(url, reqData)
            .then(r => {
                r.json()
                    .then(res => resolve(res))
                    .catch(e => reject(e))
            })
            .catch(e => reject(e))
    })
} 


exports.HTTP = () => {
    return {
        request: request,
    }
}
