import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Login from './pages/login/login'
import Grupos from './pages/grupos/grupos'
import Perguntas from './pages/perguntas/perguntas'
import { withStyles } from '@material-ui/core/styles'

const style = {
    
}

class Main extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* <Route exact path="/" component={Login}></Route> */}
                    <Route exact path="/" render={()=><Grupos store={this.props.store}></Grupos>}></Route>
                    <Route path="/perguntas" render={()=><Perguntas store={this.props.store}></Perguntas>}></Route>
                    <Route path="/respostas" render={()=><Respostas store={this.props.store}></Respostas>}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default withStyles(style)(Main)