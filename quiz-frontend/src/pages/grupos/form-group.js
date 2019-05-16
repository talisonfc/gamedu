import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import request from 'axios'

import {config} from '../config'

const host = config.url

const style = {
    content: {
        padding: '16px'
    }
}

class FormGroup extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            nome: ''
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    handlerSubmit(e){
        e.preventDefault()
        console.log(this.state)
        request.post(`${host}/grupos`, this.state).then(res=>{
            // console.log(res)
            this.props.store.dispatch({type: "LIST"})
        }).catch(err=>{
            console.error(err)
        })
    }

    render(){
        let {classes} = this.props
        return (
            <div className={classes.content}>
                <form onSubmit={(event)=>this.handlerSubmit(event)}>
                    <TextField
                        placeholder="Grupo Nome"
                        value={this.state.nome}
                        onChange={this.handleChange('nome')}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <Button type="submit">Salvar</Button>
                </form>
            </div>
        )
    }
}

export default withStyles(style)(FormGroup)