
var modelGrupo = {
    grupos: [],
    done: []
}

var controllerGrupo = {
    setGrupoDone: (grupo) => {
        modelGrupo.done.forEach(id => {
            if (grupo.id === id) {
                grupo.done = true
                return
            }
        })
    },
    addDone: (grupoID) => {
        if (!controllerGrupo.searchDone(grupoID)) {
            modelGrupo.done.push(grupoID)
        }
    },
    searchDone: (grupoID) => {
        modelGrupo.done.forEach(dn => {
            if (grupoID === dn) {
                return true
            }
        })
        return false
    },
    countGruposDone: () => {
        var donen = 0
        modelGrupo.grupos.forEach(grupo => {
            if (grupo.done) {
                donen++
            }
        })
        return donen
    }
}

var grupos

var viewGrupo = {
    init: (data) => {
        if (data != undefined) controllerGrupo.addDone(data.grupoID)
        // console.log(modelGrupo.done)
        grupos = document.getElementById('grupos')
        get('/grupos', (res) => {
            // console.log(res)
            modelGrupo.grupos = JSON.parse(res)
            modelGrupo.grupos.forEach(grupo => {
                grupo.done = false
                controllerGrupo.setGrupoDone(grupo)
            })

            // console.log(controllerGrupo.countGruposDone())
            if (controllerGrupo.countGruposDone() == modelGrupo.grupos.length) {
                openPage('sucess')
            }
            viewGrupo.render()
        })

        document.getElementById('device').innerHTML = modelDevice
    },
    render: () => {
        var Ngrupo = modelGrupo.grupos.length
        modelGrupo.grupos.forEach((grupo, i) => {
            var novo = document.createElement('div')
            novo.innerHTML = grupo.nome
            novo.className = 'col-6 card-body grupo'
            if (grupo.done) {
                novo.style.background = 'green'
                novo.style.color = 'white'
            }
            novo.addEventListener('click', () => {
                // console.log(modelGrupo.grupos[i].id)
                openPage('quiz-perguntas', { grupoID: modelGrupo.grupos[i].id })
            })
            grupos.appendChild(novo)
        })
    }
}