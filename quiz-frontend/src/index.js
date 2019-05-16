import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore, combineReducers, compose } from 'redux'

import Main from './main'

function controllerGroup(state = {visibility: 'table-groups'}, action){
    // console.log(action)
    switch(action.type){
        case 'ADD':{
            return {visibility: 'form-add'}
        }
        case 'LIST':{
            return {visibility: 'table-groups'}
        }
        case 'UPDATE':{
            return {visibility: 'form-uptade'}
        }
        default: {
            return state
        }
    }
}

function controllerPerguntas(state = {visibility: 'table-perguntas', groupID: ''}, action){
    switch(action.type){
        case 'ADD-PERGUNTA': {
            return {visibility: 'form-pergunta', groupID: action.groupID}
        }
        case 'LIST-PERGUNTAS': {
            return {visibility: 'table-perguntas', grupoID: action.groupID}
        }
        case 'LIST-RESPOSTAS': {
            return {visibility: 'table-respostas'. grupoID: action.grupoID}
        }
        default:{
            return state
        }
    }
}

let reducers = combineReducers({
    controllerGroup,
    controllerPerguntas
})
let store = createStore(reducers)

function render(){
    console.log(store.getState())
    ReactDOM.render(<Main store={store}/>, document.getElementById('root'))
}

store.subscribe(()=>{
    render()
})

render()