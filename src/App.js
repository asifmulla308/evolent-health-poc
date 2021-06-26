import React, { useContext } from 'react';
import { ContactGrid } from './pages/contacts-grid'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './App.css'

const App = () => {

  return (
    <Router>
      <div className="App">
        <div className="main">
          <AppBar position="static" className="navBar">
            <Toolbar >
              <Typography variant="h5" className="headerTitle">
                Evolent Health Systems
              </Typography>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/">
              <ContactGrid></ContactGrid>
            </Route>
            <Route exact path="/contact">
              <ContactGrid></ContactGrid>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
};

export default App;
