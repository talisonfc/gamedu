const request = require("./httpclient");
const fs = require("fs");

const host = "ec2-18-191-247-51.us-east-2.compute.amazonaws.com";
const port = "3100";

function obterPerguntas() {
  request.get(host, port, "/api/pergunta").then(res => {
    let data = JSON.parse(res);
    let idx = indexRespostaCorreta(data[0].respostas)
    console.log(idx)
  });
}

function indexRespostaCorreta(respostas) {
  respostas.forEach((resposta, index) => {
    console.log(resposta.correta);
    if (resposta.correta) {
      console.log(index)
      return index;
    }
  });
  console.log("teste");
  // return undefined;
}

obterPerguntas();

function obterRespostas() {
  request.get(host, port, "/api/resposta").then(res => {
    const result = JSON.parse(res);
    // console.log(result)
    fs.writeFile("scripts/resultado.json", JSON.stringify(result), err => {
      if (err) console.error(err);
      else {
        console.log("salvo com sucesso");
      }
    });
  });
}

function deleteAllRespostas(respostas) {
  respostas.forEach(resp => {
    // console.log(resp.id)
    request.delete(host, port, `/api/resposta/${resp.id}`).then(rr => {
      console.log(rr);
    });
  });
}
