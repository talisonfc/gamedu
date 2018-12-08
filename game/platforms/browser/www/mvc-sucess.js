
var controllerSucess = {

}

var viewSucess = {
    init: function(data){
        var persona = document.getElementById("personak")
        var speaktxt = document.getElementById("speaktxt")
        next(persona, 0)
        nextConteudoSucess(speaktxt,0,0)
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

function nextConteudoSucess(board,i,delay){
    setTimeout(()=>{
        if(i<modelSucess.texto.length){
            board.innerHTML = modelSucess.texto[i].conteudo
            nextConteudoSucess(board, i+1, 10000)
        }
        else{
            var btnStart = document.createElement('button')
            btnStart.innerHTML = "Parabéns"
            btnStart.className = "btn btn-primary btn-lg btn-block"
            btnStart.addEventListener('click',()=>{
                openPage('home')
            })
            board.append(btnStart)
        }
    },delay)
}