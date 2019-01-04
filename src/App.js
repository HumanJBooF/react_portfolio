import React from 'react';
import './semantic/dist/semantic.min.css';
import Nav from './components/Nav';
import Cards from './components/Card';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react';


class App extends React.Component {

  render () {
    return (
      <>
        <Router>
          <>
            <Nav />
            <Container>
              <Switch>
                <Route exact path='/projects'
                  render={() => <Cards />}
                />
              </Switch>
            </Container>
          </>
        </Router>
      </>
    )
  }
}

export default App;
