import React from 'react'
import request from 'axios'
import {withStyles} from '@material-ui/core/styles'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'

import {config} from '../config'

const host = config.url

const styles = theme=>({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    btnsRigth: {
        textAlign: 'right'
    }
})

class TablePerguntas extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            perguntas: []
        }
    }

    componentDidMount(){
        let url = window.location.href
        let query = url.split('?')[1]
        let groupID = query.split('=')[1]
        request.get(`${host}/pergunta?filter[where][grupoID]=${groupID}`).then(res=>{
            console.log(res)
            this.setState({
                perguntas: res.data
            })
        }).catch(err=>{
            console.error(err)
        })
    }

    handlerRemovePergunta(id, index){
        request.delete(`${host}/pergunta/${id}`).then(res=>{
            console.log(res)
            let collection = this.state.perguntas
            collection.splice(index,1)
            this.setState({
                perguntas: collection
            })
        }).catch(err=>{
            console.error(err)
        })
    }

    render(){
        let {classes} = this.props
        return(
            <div>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Perguntas</TableCell>
                            <TableCell>QTN. Respostas</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.perguntas.map((pergunta,i) => {
                            return (
                                <TableRow key={pergunta.id}>
                                    <TableCell component="th" scope="row">
                                        {pergunta.enunciado}
                                    </TableCell>
                                    <TableCell>
                                        {pergunta.respostas.length}
                                    </TableCell>
                                    <TableCell className={classes.btnsRigth}>
                                        <Button onClick={()=>this.handlerRemovePergunta(pergunta.id,i)}>Remover</Button>
                                        <Button>Editar</Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default withStyles(styles)(TablePerguntas)