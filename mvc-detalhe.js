var modelDetalhe = {

}

var controllerDetalhe = {

}

var viewDetalhe = {
    init: function(){
        var persona = document.getElementById("personak")
        next(persona, 0)

        var balao = document.getElementsByClassName('balao')[0]
        var btnNextComment = document.getElementsByClassName('btnNextComment')
    }
}

var imgs = ['persona.png','persona1.png','persona2.png']
// var imgs = ['persona.png','persona1.png']

function next(img,i){
    setTimeout(()=>{
        img.src = './assets/cena/'+imgs[i]
        next(img, (i+1)%3)
    },2000)
}

var comentarios = [
    "sakjh kdasjhd kjh aksjdh aksdjhas kdjh kjashd kasjhd aksjdh asd",
    "daslkjdalskdj lkj aslkdja lsdkj lkj lkajsd laksjd lkj lkja sldkj lkj asldkj"
]
var icomentario = 0
function nextComentario(balao){
    var div = document.createElement('div')
    div.innerHTM = comentarios[icomentario]
    balao.append(div)
    icomentario++;
}

function check(target){
    console.log("teste")
    openPage("slide", target)
}