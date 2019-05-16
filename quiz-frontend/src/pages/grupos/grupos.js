import React from 'react'
import TableGroups from './table-groups'
import FormGroup from './form-group'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TablePerguntas from '../perguntas/table-perguntas';

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

class Grupos extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;

        // console.log(this.props.store.getState())
        let content
        switch (this.props.store.getState().controllerGroup.visibility) {
            case 'form-add': {
                content = <FormGroup store={this.props.store}></FormGroup>
                break
            }
            case 'form-update': {
                content = <FormGroup store={this.props.store}></FormGroup>
                break
            }
            case 'table-groups': {
                content = <TableGroups store={this.props.store}></TableGroups>
                break
            }
            case 'table-perguntas': {
                content = <TablePerguntas store={this.props.store}></TablePerguntas>
                break
            }
        }

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Grupos de Perguntas
                        </Typography>
                        <Button color="inherit" onClick={()=>this.props.store.dispatch({type: 'ADD'})}>Novo Grupo</Button>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                {content}
            </div>
        )
    }
}

Grupos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grupos);