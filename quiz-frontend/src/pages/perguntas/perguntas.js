import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Redirect } from 'react-router-dom'

import FormPergunta from './form-pergunta'
import TablePerguntas from './table-perguntas'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Perguntas extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            groupID: '',
            redirectToGroup: false
        }
    }

    componentDidMount(){
        let url = window.location.href
        let query = url.split('?')[1]
        let groupID = query.split('=')[1]
        console.log(groupID)
        this.setState({
            groupID: groupID
        })
    }

    render(){
        let {classes} = this.props
        let content
        switch (this.props.store.getState().controllerPerguntas.visibility) {
            case 'form-pergunta':
                content = <FormPergunta store={this.props.store}/>
                break;
            case 'table-perguntas':
                content = <TablePerguntas/>
                break
            default:
                break;
        }

        let { from } = { from: { pathname: '/'} }
        if(this.state.redirectToGroup) {
            return (<Redirect to={from} />)
        }

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Perguntas
                        </Typography>
                        <Button color="inherit" onClick={()=>this.props.store.dispatch({type: 'ADD-PERGUNTA', groupID: this.state.groupID})}>Nova Pergunta</Button>
                        <Button color="inherit" onClick={()=>this.setState({redirectToGroup: true})}>Grupos</Button>
                    </Toolbar>
                </AppBar>
                {content}
            </div>
        )
    }
}

export default withStyles(styles)(Perguntas)