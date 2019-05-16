var persona // variavel de referencia do persona

var btnUp
var btnDown
var btnLeft
var btnRight
var btnPlay

var W, H
var ipersona // variavel para animar personagem
var x, y, l
var city // condif from city grid
var grid // grid test
var gridView

var inited = 0 // flag para marcar stado de inicializacao

function walk(direction) {
    switch (direction) {
        case 'left': {
            persona.className = 'imgMirrorLeft'
            break
        }
        case 'right': {
            persona.className = 'imgMirrorRight'
            break
        }
        case 'up': {
            persona.className = 'imgMirrorUp'
            break
        }
        case 'down': {
            persona.className = 'imgMirrorDown'
            break
        }
    }
    ipersona = 1 - ipersona
    persona.children[0].src = `./assets/persona${ipersona}.png`
}

function moveLeft() {
    walk('left')
    x--;
    if (x >= 0) {
        if (grid[y][x].status == 0 || grid[y][x].status == 2) {
            persona.style.marginLeft = x * l + 'px'
        }
        else {
            x++;
        }
    }
    else {
        x++
    }
}

function moveRight() {
    walk('right')
    x++;
    if (x * l < W) {
        if (grid[y][x].status == 0 || grid[y][x].status == 2) {
            persona.style.marginLeft = x * l + 'px'
        }
        else {
            x--;
        }
    }
    else {
        x--
    }
}

function moveUp() {
    walk('up')
    y--;
    if (y >= 0) {
        if (grid[y][x].status == 0 || grid[y][x].status == 2) {
            persona.style.marginTop = y * l + 'px'
        }
        else {
            y++;
        }
    }
    else {
        y++
    }
}

function moveDown() {
    walk('down')
    y++;
    if (y * l < H) {
        if (grid[y][x].status == 0 || grid[y][x].status == 2) {
            persona.style.marginTop = y * l + 'px'
        }
        else {
            y--;
        }
    }
    else {
        y--
    }

}

function play() {
    // console.log(`${x} - ${y}`)
    if(y==modelGame.cena1.ponto.x && x==modelGame.cena1.ponto.y){
        // console.log(`erro ${JSON.stringify(grid[y][x])}`)
        if (grid[y][x].status == 2) {
            openPage('detalhe')
        }
    }
    else if(y==modelGame.cena2.ponto.x && x==modelGame.cena2.ponto.y){
        // console.log(`erro ${JSON.stringify(grid[y][x])}`)
        if (grid[y][x].status==2){
            openPage('play')
        }
    }
    
}

/**
 * MVC
 */

var controllerGame = {
    changeDangerPlace: function (data) {
        if (data != undefined && data.done != undefined && data.done) {
            modelGame.cena1.enabled = false
        }
    }
}

var viewGame = {
    init: function (data) {
        console.log(data)
        // controllerGame.changeDangerPlace(data)

        persona = document.getElementById('persona')

        btnUp = document.getElementById('btnUp')
        btnDown = document.getElementById('btnDown')
        btnLeft = document.getElementById('btnLeft')
        btnRight = document.getElementById('btnRight')
        btnPlay = document.getElementById('btnPlay')

        gridView = document.getElementById('grid')

        btnUp.addEventListener('click', moveUp)
        btnDown.addEventListener('click', moveDown)
        btnLeft.addEventListener('click', moveLeft)
        btnRight.addEventListener('click', moveRight)
        btnPlay.addEventListener('click', play)

        if (inited == 0) {

            W = screen.width
            H = screen.height
            ipersona = 1; // variavel para animar personagem
            x = 1
            y = 1
            l = 40
            city = [
                [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
                [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
                [1, 0, 1, 2, 0, 1, 1, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
                [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 0, 2, 1, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
                [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1]
            ]
            grid = []

            inited = 1
        }

        // initGrid()
        initCity()

        // START PERSONA
        persona.children[0].src = './assets/persona1.png'
        persona.style.marginLeft = x * l + 'px'
        persona.style.marginTop = y * l + 'px'
    },
    render: function () {

    }
}

function isPermited(ix, iy) {
    if (grid[ix][iy] == 1) {
        return false
    }
    else {
        return true
    }
}

function initGrid() {
    var npx = parseInt(W / l)
    var npy = parseInt(H / l)

    for (var i = 0; i < npy; i++) {
        var itensRow = []
        for (var j = 0; j < npx; j++) {
            var item = {
                status: Math.random() < 0.3 ? 1 : 0,
                target: Math.random() > 0.5 ? 1 : 0
            }
            itensRow.push(item)
        }
        grid.push(itensRow)
    }

    for (var i = 0; i < npy; i++) {
        var row = document.createElement('div')
        row.className = 'rowGrid'
        for (var j = 0; j < npx; j++) {
            var div = document.createElement('div')
            div.className = 'itemGrid'
            div.style.height = l + 'px'
            div.style.width = l + 'px'
            if (grid[i][j].status == 1) {
                div.style.background = grid[i][j].target == 1 ? `gray` : `green`
            }
            else {
                div.style.background = `white`
            }


            row.appendChild(div)
        }
        // console.log('div')
        gridView.appendChild(row)
    }
}

function initCity() {
    var npx = parseInt(W / l)
    var npy = parseInt(H / l)

    // var npx = city[0].length
    // var npy = city.length

    for (var i = 0; i < npy; i++) {
        var itensRow = []
        for (var j = 0; j < npx; j++) {
            var item = {
                status: city[i][j],
                target: 1 - city[i][j]
            }
            itensRow.push(item)
        }
        grid.push(itensRow)
    }

    for (var i = 0; i < npy; i++) {
        var row = document.createElement('div')
        row.className = 'rowGrid'
        for (var j = 0; j < npx; j++) {
            var div = document.createElement('div')
            div.className = 'itemGrid'
            div.style.height = l + 'px'
            div.style.width = l + 'px'
            // if (city[i][j] != 0) {
            //     div.style.background = grid[i][j].target == 0 ? `gray` : `white`
            // }
            // else {
            //     div.style.background = `yellow`
            // }
            if (city[i][j] == 2) {
                // div.style.background = `gray`
                var img = document.createElement('img')
                img.src = './assets/danger.png'
                img.style.width = '100%'
                // div.appendChild(img)

                // var osc = 0
                // setInterval(() => {
                //     if (osc % 2 == 0) {
                //         div.remove(img)
                //     }
                //     else {
                //         var img = document.createElement('img')
                //         img.src = './assets/danger.png'
                //         img.style.width = '100%'
                //         div.appendChild(img)
                //         div.appendChild(img)
                //     }
                //     osc++
                // }, 200)
                if (modelGame.cena1.enabled && modelGame.cena1.ponto.x==i && modelGame.cena1.ponto.y==j) {
                    // console.log(`${i}-${j}`)
                    repeate(div, 'add')
                }

                if (modelGame.cena2.enabled && modelGame.cena2.ponto.x==i && modelGame.cena2.ponto.y==j) {
                    // console.log(`${i}-${j}`)
                    repeate(div, 'add')
                }
            }


            row.appendChild(div)
        }
        // console.log('div')
        gridView.appendChild(row)
    }
}

function repeate(pai, op) {
    setTimeout(() => {
        if (op == 'add') {
            var img = document.createElement('img')
            img.src = './assets/danger.png'
            img.style.width = '100%'
            pai.appendChild(img)
            repeate(pai, 'rm')
        }
        else {
            pai.removeChild(pai.children[0])
            repeate(pai, 'add')
        }

        // console.log(pai.children)
    }, 200)
}