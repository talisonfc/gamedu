// respostas: [{
//     iduser: '',
//     perguntaID: '',
//     respostaIndex: ''
// }

var modelQuiz = {
    grupoID: '',
    perguntas: [],
    respostas: [],
    indexShowQuestion: 0
}

var controllerQuiz = {
    setRespostaCorreta: function (indexResposta) {
        modelQuiz.perguntas[modelQuiz.indexShowQuestion].respostas[indexResposta].correta = true
        controllerQuiz.searchRespostaByPerguntaID(modelQuiz.perguntas[modelQuiz.indexShowQuestion].id, (rp) => {
            rp.respostaIndex = indexResposta
        })
    },
    setAllRespostasAllFalse: function () {
        modelQuiz.perguntas[modelQuiz.indexShowQuestion].respostas.forEach(rep => {
            rep.correta = false
        })
    },
    searchRespostaByPerguntaID(perguntaID, cb) {
        modelQuiz.respostas.forEach(rp => {
            if (rp.perguntaID === perguntaID) {
                cb(rp)
            }
        })
    },
    send() {
        let credentials = {
            nome: "gamedu"
        }
        post("/usuarios", JSON.stringify(credentials), (res) => {
            let userID = JSON.parse(res).id
            // console.log(userID)

            modelQuiz.respostas.forEach(resp => {
                resp.userID = userID

                post("/resposta", JSON.stringify(resp), (res) => {
                    // console.log(res)
                })
            })
        })
    }
}

var enunciado
var respostas

var viewQuiz = {
    init: (data) => {
        enunciado = document.getElementById('enunciado')
        enunciado.style.textAlign = 'justify'
        respostas = document.getElementById('respostas')

        get(`/pergunta?filter[where][grupoID]=${data.grupoID}`, (res) => {
            modelQuiz.grupoID = data.grupoID
            modelQuiz.perguntas = JSON.parse(res)
            modelQuiz.respostas = []
            modelQuiz.perguntas.forEach(pergunta => {
                modelQuiz.respostas.push({
                    userID: '',
                    grupoID: modelQuiz.grupoID,
                    perguntaID: pergunta.id,
                    respostaIndex: -1
                })
            })
            modelQuiz.indexShowQuestion = 0
            viewQuiz.renderQuestion()
        })

    },
    renderQuestion: () => {
        var index = modelQuiz.indexShowQuestion

        while (respostas.children.length > 0) {
            respostas.removeChild(respostas.children[0])
        }

        if (modelQuiz.perguntas.length > 0) {
            enunciado.innerHTML = modelQuiz.perguntas[index].enunciado
            modelQuiz.perguntas[index].respostas.forEach((resp, idrpt) => {
                var rp = document.createElement('div')
                rp.className = 'resposta'
                rp.style.textAlign = 'justify'
                rp.innerHTML = resp.resposta
                resp.correta && modelQuiz.respostas[index].respostaIndex != -1 ? rp.style.background = '#ccc' : rp.style.background = 'white'


                rp.addEventListener('click', () => {
                    controllersQuestions()
                    var N = respostas.children.length
                    for (var i = 0; i < N; i++) {
                        respostas.children[i].style.background = 'white'
                        respostas.children[i].style.color = 'black'
                    }

                    // console.log(modelQuiz.perguntas[index].respostas[idrpt].correta)
                    if (modelQuiz.perguntas[index].respostas[idrpt].correta) {
                        rp.style.background = 'green'
                        rp.style.color = 'white'
                    }
                    else {
                        rp.style.background = 'red'
                        rp.style.color = 'white'
                    }


                    let rptt = {
                        userID: '',
                        grupoID: modelQuiz.grupoID,
                        perguntaID: modelQuiz.perguntas[index].id,
                        respostaIndex: idrpt
                    }


                    // controllerQuiz.setAllRespostasAllFalse()
                    controllerQuiz.setRespostaCorreta(idrpt)
                })
                respostas.appendChild(rp)
            });
        }

    }
}

function controllersQuestions() {
    setTimeout(() => {
        if (modelQuiz.indexShowQuestion < modelQuiz.perguntas.length - 1) {
            modelQuiz.indexShowQuestion++
            viewQuiz.renderQuestion()
        }
        else if (modelQuiz.indexShowQuestion == modelQuiz.perguntas.length - 1) {
            controllerQuiz.send()
            openPage('quiz-grupos', { grupoID: modelQuiz.grupoID })
        }
    }, 1000)

    // var controllersQuiz = document.getElementById('controllersQuiz')
    // cleanElement(controllersQuiz)

    // var nextQuestion = document.createElement('button')
    // var prevQuestion = document.createElement('button')

    // nextQuestion.innerHTML = 'Próxima'
    // nextQuestion.className = 'btn btn-primary btn-lg btn-block'
    // prevQuestion.innerHTML = 'Anterior'
    // prevQuestion.className = 'btn btn-lg btn-block'

    // nextQuestion.addEventListener('click', () => {
    //     if (modelQuiz.indexShowQuestion < modelQuiz.perguntas.length - 1) {
    //         modelQuiz.indexShowQuestion++
    //         viewQuiz.renderQuestion()
    //     }
    //     else if (modelQuiz.indexShowQuestion == modelQuiz.perguntas.length - 1) {
    //         // modelQuiz.indexShowQuestion++
    //         // console.log(modelQuiz)
    //         controllerQuiz.send()
    //         openPage('quiz-grupos', { grupoID: modelQuiz.grupoID })
    //     }
    //     controllersQuiz.removeChild(nextQuestion)
    //     controllersQuiz.removeChild(prevQuestion)
    // })

    // prevQuestion.addEventListener('click', () => {
    //     if (modelQuiz.indexShowQuestion > 0) {
    //         modelQuiz.indexShowQuestion--
    //         viewQuiz.renderQuestion()
    //     }
    //     controllersQuiz.removeChild(nextQuestion)
    //     controllersQuiz.removeChild(prevQuestion)
    // })

    // controllersQuiz.appendChild(nextQuestion)
    // controllersQuiz.appendChild(prevQuestion)
}