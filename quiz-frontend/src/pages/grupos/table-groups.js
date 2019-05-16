import React from 'react'
import request from 'axios'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'

import {config} from '../config'

const host = config.url
// ec2-18-191-247-51.us-east-2.compute.amazonaws.com

const style = theme => ({
    content: {
        padding: '16px'
    },
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

class TableGroups extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            grupos: [],
            redirectToPerguntas: false,
            groupID: ''
        }
    }

    componentDidMount() {
        request.get(`${host}/grupos`).then(res => {
            console.log(res)
            this.setState({
                grupos: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    openPerguntas(grupoID){
        this.setState({
            redirectToPerguntas: true,
            groupID: grupoID
        })
    }

    handlerRemoveGrupo(id, index){
        request.delete(`${host}/grupos/${id}`).then(res=>{
            console.log(res)
            let collection = this.state.grupos
            collection.splice(index,1)
            this.setState({
                grupos: collection
            })
        }).catch(err=>{
            console.error(err)
        })
    }

    render() {
        let { from } = { from: { pathname: '/perguntas', search: "?groupID="+this.state.groupID } }
        if (this.state.redirectToPerguntas) {
            return (<Redirect to={from} />)
        }

        let { classes } = this.props
        return (
            <div>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.grupos.map((grupo, i) => {
                            return (
                                <TableRow key={grupo.id}>
                                    <TableCell component="th" scope="row">
                                        {grupo.nome}
                                    </TableCell>
                                    <TableCell className={classes.btnsRigth}>
                                        <Button onClick={()=>this.handlerRemoveGrupo(grupo.id,i)}>Remover</Button>
                                        <Button>Editar</Button>
                                        <Button onClick={()=>this.openPerguntas(grupo.id)}>Adicionar Perguntas</Button>
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

export default withStyles(style)(TableGroups)