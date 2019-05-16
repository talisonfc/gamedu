


var controllerPlay = {
    countMarks: function () {
        var qtn = 0
        objs.forEach(mk => {
            if (mk.state) qtn++
        })
        return qtn
    }
}

// all: {x: 1167, y: 837}
var objs = [
    {
        name: 'obj-1.png',
        ponto: {
            x: 293,
            y: 109
        },
        state: false
    },
    {
        name: 'obj-2.png',
        ponto: {
            x: 139,
            y: 573
        },
        state: false
    },
    {
        name: 'obj-3.png',
        ponto: {
            x: 298,
            y: 457
        },
        state: false
    },
    {
        name: 'obj-4.png',
        ponto: {
            x: 376,
            y: 501
        },
        state: false
    },
    {
        name: 'obj-5.png',
        ponto: {
            x: 626,
            y: 587
        },
        state: false
    },
    {
        name: 'obj-6.png',
        ponto: {
            x: 761,
            y: 446
        }
    }
]

var marks = [
    {
        x: 417,
        y: 163
    },
    {
        x: 261,
        y: 652
    },
    {
        x: 330,
        y: 519
    },
    {
        x: 423,
        y: 563
    },
    {
        x: 698,
        y: 662
    },
    {
        x: 938,
        y: 555
    }
]

var viewPlay = {
    init: function (data) {
        var toughArea = document.getElementById('tough-area')
        var mutation = document.getElementById('mutation')
        mutation.style.width = screen.width
        mutation.style.height = screen.height

        toughArea.addEventListener('click', (event) => {
            var fe = screen.availWidth / 1167

            var img = document.createElement('img')
            img.src = './assets/markx.jpg'
            img.style.width = '100%'

            marks.forEach((mk, i) => {
                if (distance(mk, { x: event.clientX, y: event.clientY - 80 }) < 40) {
                    objs[i].state = true

                    var mark = document.createElement('div')
                    mark.style.position = 'absolute'
                    mark.style.width = '30px'
                    mark.style.height = '30px'
                    mark.style.marginTop = `${event.clientY - 52}px`
                    mark.style.marginLeft = `${event.clientX}px`
                    mark.appendChild(img)
                    mutation.appendChild(mark)


                    var qtnFoco = document.getElementById('qtn-foco')
                    if (controllerPlay.countMarks() == 6) {
                        qtnFoco.innerHTML = `<h4>Você encontrou <b>${controllerPlay.countMarks()}</b> focos</h4>\
                        <div style='color: blue'>Parabéns, você conseguiu encontrar todos os focos</div>`
                        modelGame.cena2.enabled = false
                        openPage(`sucess-cena-2`)
                    }
                    else {
                        if (controllerPlay.countMarks() == 1) {
                            qtnFoco.innerHTML = `<h4>Você encontrou <b>${controllerPlay.countMarks()}</b> foco</h4>`
                        }
                        else {
                            qtnFoco.innerHTML = `<h4>Você encontrou <b>${controllerPlay.countMarks()}</b> focos</h4>`
                        }
                    }

                }
            })
        })

        console.log(screen)
    },
    render: function () {

    }
}

function distance(p1, p2) {
    var fe = screen.availWidth / 1167
    var dx = Number(fe * p1.x - 5) - Number(p2.x)
    var dy = Number(screen.availHeight + fe * p1.y - 80 - fe * 937) - Number(p2.y)
    return Math.sqrt(dx * dx + dy * dy)
}