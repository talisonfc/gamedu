import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import request from 'axios'

import {config} from '../config'

const host = config.url

const style = {
    content: {
        margin: '16px'
    }
}

class FormPergunta extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            enunciado: '',
            respostas: [],
            grupoID: ''
        }
    }

    componentDidMount(){
        this.setState({
            grupoID: this.props.store.getState().controllerPerguntas.groupID
        })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    handleChangeResposta = index => event => {
        let temp = this.state.respostas
        temp[index].resposta = event.target.value
        this.setState({
            respostas: temp
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        request.post(`${host}/pergunta`, this.state).then(res=>{
            console.log(res)
            this.props.store.dispatch({type: "LIST-PERGUNTAS", groupID: this.state.groupID})
        }).catch(err=>{
            console.error(err)
        })
    }

    handlerAddResposta() {
        let rps = this.state.respostas.concat({
            resposta: '',
            correta: false
        })
        this.setState({
            respostas: rps
        })
    }

    handlerRemoveResposta() {
        let rps = this.state.respostas
        rps.splice(rps.length - 1, 1)
        this.setState({
            respostas: rps
        })
    }

    handleRespostaCorreta(i){
        let answers = this.state.respostas
        answers.forEach(rp=>{
            rp.correta = false
        })
        // console.log(answers)
        answers[i].correta = true
        this.setState({
            respostas: answers
        })
    }

    render() {
        let { classes } = this.props

        return (
            <div className={classes.content}>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <TextField
                        placeholder='Enunciado'
                        value={this.state.enunciado}
                        fullWidth
                        variant="outlined"
                        onChange={this.handleChange('enunciado')}
                    />
                    {
                        this.state.respostas.map((rp, i) => (
                            <div>
                                <TextField key={'txt'+i}
                                    placeholder={`Resposta #${i + 1}`}
                                    value={rp.resposta}
                                    variant="outlined"
                                    style={{
                                        marginTop: '5px',
                                        width: '80%'
                                    }}
                                    onChange={this.handleChangeResposta(i)}
                                />
                                <Button key={'btn'+i}
                                    onClick={()=>{this.handleRespostaCorreta(i)}}
                                    style={{
                                        marginTop: '12px',
                                        width: '20%',
                                        color: this.state.respostas[i].correta ? 'green' : 'red'
                                    }}
                                >Correta</Button>
                            </div>
                        ))
                    }
                    <div>
                        <Button onClick={() => this.handlerAddResposta()}>Adicionar Resposta</Button>
                        <Button onClick={() => this.handlerRemoveResposta()}>Remover Resposta</Button>
                        <Button type='submit'>Salvar</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withStyles(style)(FormPergunta)