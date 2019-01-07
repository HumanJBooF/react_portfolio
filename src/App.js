import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Home from './components/Home';

class App extends React.Component {

  render () {
    return (
      <>
        <Router>
          <>
            <Nav />
            <Container style={{ marginBottom: '8em', marginTop: '8em' }}>
              <Switch>
                <Route exact path='/' render={() => <Home />} />
                <Route exact path='/projects' render={() => <Projects />} />

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
