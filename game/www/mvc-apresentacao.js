
var controllerApresentacao = {
    indexConteudo: 0,
    showConteudo: (element) => {
        
        var btnNext = document.createElement('button')
        btnNext.innerHTML = 'Próximo'
        btnNext.className = 'btn btn-pramary btn-lg btn-block'
        btnNext.addEventListener('click', () => {
            controllerApresentacao.showConteudo(element)
        })

        if (controllerApresentacao.indexConteudo < modelApresentacao.texto.length) {
            cleanElement(element)
            var paragraph = document.createElement('p')
            paragraph.style.textAlign = 'justify'
            paragraph.innerHTML = modelApresentacao.texto[controllerApresentacao.indexConteudo].conteudo

            element.appendChild(paragraph)
            element.appendChild(btnNext)
            controllerApresentacao.indexConteudo++
        }
        else {
            cleanElement(element)
            var paragraph = document.createElement('p')
            paragraph.style.textAlign = 'justify'
            paragraph.innerHTML = modelApresentacao.texto[controllerApresentacao.indexConteudo-1].conteudo

            var btnStart = document.createElement('button')
            btnStart.innerHTML = "Começar"
            btnStart.className = "btn btn-danger btn-lg btn-block"
            btnStart.addEventListener('click', () => {
                openPage('game')
            })
            
            element.appendChild(paragraph)
            element.appendChild(btnStart)
        }
    }
}

var viewApresentacao = {
    init: function () {
        var persona = document.getElementById("personak")
        var speaktxt = document.getElementById("speaktxt")
        next(persona, 0)
        controllerApresentacao.showConteudo(speaktxt)
    },
    render: function () {

    }
}

var imgs = ['persona.png', 'persona1.png', 'persona2.png']

function next(img, i) {
    setTimeout(() => {
        img.src = './assets/cena/' + imgs[i]
        next(img, (i + 1) % 3)
    }, 1000)
}

function nextConteudoApresentacao(board, i, delay) {
    // console.log(modelSucess)
    setTimeout(() => {
        if (i < modelApresentacao.texto.length) {
            board.innerHTML = modelApresentacao.texto[i].conteudo
            nextConteudoApresentacao(board, i + 1, 10000)
        }
        else {
            var btnStart = document.createElement('button')
            btnStart.innerHTML = "Começar"
            btnStart.className = "btn btn-danger btn-lg btn-block"
            btnStart.addEventListener('click', () => {
                openPage('game')
            })
            board.append(btnStart)
        }
    }, delay)
}

function cleanElement(element){
    while(element.children.length>0){
        element.removeChild(element.children[0])
    }
}