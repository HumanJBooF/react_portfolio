import React from 'react';
import './semantic/dist/semantic.min.css';
import Nav from './components/Nav';
import Cards from './components/Card';
import images from './images.json';

class App extends React.Component {
  state = {
    images: images
  }
  render () {
    return (
      <>
        <Nav />
        <Cards images={this.state.images} />
      </>
    )
  }
}

export default App;
