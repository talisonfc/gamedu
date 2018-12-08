
var controllerApresentacao = {

}

var viewApresentacao = {
    init: function(){
        var persona = document.getElementById("personak")
        var speaktxt = document.getElementById("speaktxt")
        next(persona, 0)
        nextConteudoApresentacao(speaktxt,0,0)
    },
    render: function(){

    }
}

var imgs = ['persona.png','persona1.png','persona2.png']

function next(img,i){
    setTimeout(()=>{
        img.src = './assets/cena/'+imgs[i]
        next(img, (i+1)%3)
    },1000)
}

function nextConteudoApresentacao(board,i,delay){
    console.log(modelSucess)
    setTimeout(()=>{
        if(i<modelApresentacao.texto.length){
            board.innerHTML = modelApresentacao.texto[i].conteudo
            nextConteudoApresentacao(board, i+1, 10000)
        }
        else{
            var btnStart = document.createElement('button')
            btnStart.innerHTML = "Começar"
            btnStart.className = "btn btn-danger btn-lg btn-block"
            btnStart.addEventListener('click',()=>{
                openPage('game')
            })
            board.append(btnStart)
        }
    },delay)
}