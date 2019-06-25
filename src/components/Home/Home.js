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
                        After graduating I was asked to come back as a assistant teacher. This has greatly increased my knowledge in the subject. I am constantly helping students
                        debug their code. I also worked as a full stack developer for a start-up for a while. This was very beneficial as I was able to start from scratch. This was a very
                        fun experience. I learned how to make games of chance, I learned how to use numerous services on aws and about security. I want to continue learning and expanding my
                        skill set. I have a passion for developing and I just really love what I do.</p>
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