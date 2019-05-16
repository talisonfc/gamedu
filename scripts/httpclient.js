const https = require('http')
const fs = require('fs')
//ref: https://flaviocopes.com/node-http-post/

exports.get = async function(host, port, path) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: host,
            port: port,
            path: path,
            method: 'GET'
        }

        let data = ""

        const req = https.request(options, (res) => {
            res.on('data', (d) => {
                data += d
            })

            res.on("end", () => {
                resolve(data)
            })
        })

        req.on('error', (error) => {
            reject(error)
        })

        req.end()
    })
}

/*
get('betsoeste.net.br','/apostas/futebol').then(res=>{
    fs.writeFile('./index.html',res)
})
*/

exports.post = async function(host, port, path, body) {
    return new Promise((resolve, reject) => {
        let dados = JSON.stringify(body)
        const options = {
            hostname: host,
            port: port,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        let responseData = ""

        const req = https.request(options, (res) => {
            res.on('data', (piece) => {
                responseData += piece
            })

            res.on("end", () => {
                resolve(responseData)
            })
        })

        req.on('error', (error) => {
            reject(error)
        })

        req.write(dados)
        req.end()
    })
}

exports.put = async function(host, port, path, body) {
    return new Promise((resolve, reject) => {
        let dados = JSON.stringify(body)
        const options = {
            hostname: host,
            port: port,
            path: path,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        let responseData = ""

        const req = https.request(options, (res) => {
            res.on('data', (piece) => {
                responseData += piece
            })

            res.on("end", () => {
                resolve(responseData)
            })
        })

        req.on('error', (error) => {
            reject(error)
        })

        req.write(dados)
        req.end()
    })
}

exports.delete = async function(host, port, path) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: host,
            port: port,
            path: path,
            method: 'DELETE'
        }

        let data = ""

        const req = https.request(options, (res) => {
            res.on('data', (d) => {
                data += d
            })

            res.on("end", () => {
                resolve(data)
            })
        })

        req.on('error', (error) => {
            reject(error)
        })

        req.end()
    })
}

/*
post('localhost', 3000, '/campeonato', {nome: 'teste'}).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
*/

/*
get('www.google.com',80,'').then(res=>{
    console.log("sucess")
}).catch("err")
*/