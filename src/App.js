import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
                  render={() => <Projects />}
                />
              </Switch>
            </Container>
            <Footer />
          </>
        </Router>
      </>
    )
  }
}

export default App;
