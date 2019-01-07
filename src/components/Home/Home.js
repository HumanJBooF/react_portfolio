import React from 'react';
import { Container, Grid, Image, Segment } from 'semantic-ui-react';

const Home = () => (
    <Container>
        <Segment raised>
            <Grid divided doubling>
                <Grid.Column width={6}>
                    <Image size='large' circular src='./assets/img/javascript-logo.png' />
                </Grid.Column>
                <Grid.Column width={10}>
                    about me here
            </Grid.Column>
            </Grid>
        </Segment>
    </Container>
);

export default Home;