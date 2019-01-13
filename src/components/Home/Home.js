import React from 'react';
import { Grid, Image, Segment, Header } from 'semantic-ui-react';

const Home = () => (
    <Segment piled>
        <Grid columns='equal' stackable celled='internally'>
            <Grid.Column>
                <Image fluid bordered rounded src='./assets/img/joshua.jpg' />
            </Grid.Column>
            <Grid.Column width={12} textAlign='center'>
                <Header size='huge' dividing block content='About Me' inverted color='black' style={{ border: '1pt solid black' }} />
                
            </Grid.Column>
        </Grid>
    </Segment >
);

export default Home;