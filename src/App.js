import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Home from './components/Home';
import Tech from './components/Tech';
import Contact from './components/Contact';
import posed, { PoseGroup } from 'react-pose'

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true, ease: 'easeInOut' },
  exit: { opacity: 0 }
})

const App = () => (
  <Router>
    <>
      <Nav />
      <Route render={({ location }) =>
        <PoseGroup>
          <RouteContainer key={location.pathname}>
            <Container className='App-container'>
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/tech' component={Tech} />
                <Route exact path='/contact' component={Contact} />
              </Switch>
            </Container>
          </RouteContainer>
        </PoseGroup>
      } />
      <Footer />
    </>
  </Router>
)

export default App;
