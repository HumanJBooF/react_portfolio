import React from 'react';
import { Grid, Image, Segment, Header, Container, Divider, Icon } from 'semantic-ui-react';

const Home = () => (
    <Segment piled padded='very' raised className='home-segment'>
        <Grid columns={16} celled='internally'>
            <Grid.Column width={4}>
                <Image className='home-img' bordered centered src='./assets/img/joshua.jpg' />
            </Grid.Column>
            <Grid.Column width={12} textAlign='center'>
                <Grid.Row>
                    <Header size='huge' dividing content='About Me' />
                </Grid.Row>
                <Divider hidden />
                <Grid.Row>
                    <Container text fluid>
                        <p>Hello! My name is Joshua LeBoeuf and I am a Full Stack Developer. I attended UNH coding bootcamp where I learned MERN stack.
                        I have also been interested in technology, building computers forever made me fall in love with the hardware. Now I want to master
                        the software and development side. I have a passion for learning, designing, backend, frontend and anything else that is thrown at me.
                        I enjoy a challenge, I enjoy trying to find solutions to problems that seem nearly impossible. Take a look around, check out my work, and
                        contact me if you would like to work on something together, have questions, or are looking for a dev to hire.</p>
                        <Divider hidden />
                    </Container>
                </Grid.Row>
                <Grid.Row>
                    <Icon name='computer' size='huge' className='Home-icons' bordered />
                    <Icon name='code' size='huge' className='Home-icons' bordered />
                </Grid.Row>
            </Grid.Column>
        </Grid>
    </Segment >
);

export default Home;