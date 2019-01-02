import React from 'react';
import './semantic/dist/semantic.min.css';
import Nav from './components/Nav';
import Cards from './components/Card';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react';


class App extends React.Component {

  state = {
    items: [['Home', '/'],
    ['About me', '/Aboutme'],
    ['Tech', '/tech'],
    ['Projects', '/projects'],
    ['Contact', 'contact']]
  }
  render () {
    return (
      <>
        <Router>
          <>
            <Nav items={this.state.items} />
            <Container>
              <Switch>
                <Route exact path='/projects' render={Cards} />
              </Switch>
            </Container>
          </>
        </Router>

        {/* <Nav />
        <Cards images={this.state.images} /> */}
      </>
    )
  }
}

export default App;
