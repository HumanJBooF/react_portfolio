import React from 'react';
import './semantic/dist/semantic.min.css';
import Nav from './components/Nav';
import Cards from './components/Card';
import images from './images.json';
import { Card, Container } from 'semantic-ui-react';
class App extends React.Component {
  state = {
    images: images
  }
  render () {
    return (
      <>
        <Nav />
        <Container>
          <Card.Group itemsPerRow={4}>
            {this.state.images.map((image, i) =>
              <Cards
                image={image.image}
                key={i} />
            )}
          </Card.Group>
        </Container>
      </>
    )
  }
}

export default App;
