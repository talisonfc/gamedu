var fs = require("fs")

fs.readFile('resultado.json', {}, (error, data)=>{
    if(error) return error
    let resultado = JSON.parse(data)
    // console.log(resultado)
    let resumo = resultado.reduce(processarResposta)
    let users = Object.keys(resumo)
    // console.log(users.length)
    // fs.writeFile('resultado-processado.json',JSON.stringify(resumo), (err)=>{
    //     if(err) return err
    //     console.log('resumo salvo')
    // })
})

function processarResposta(respostas, resposta){
    if(respostas[resposta.userID]===undefined){
        respostas[resposta.userID] = {
            respostas: []
        }
    }
    
    let userID = resposta.userID
    let respostaProcessada = Object.assign({}, resposta, cleanResposta(resposta))
    respostas[userID].respostas.push(respostaProcessada)
    
    return respostas
}

function cleanResposta(resposta){
    delete resposta.userID
    delete resposta.id 
    return resposta
}