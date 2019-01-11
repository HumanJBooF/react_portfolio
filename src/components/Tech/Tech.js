import React from 'react';
import styles from './styles';
import images from './images';
import { Icon, Segment, Image, Grid, Header, Divider } from 'semantic-ui-react';

const icons = [['html5', 'css3', 'git', 'database'], ['js', 'aws', 'code', 'terminal'], ['windows', 'linux', 'npm', 'computer']];
const colors = ['red', 'blue', 'brown', 'purple', 'orange', 'green', 'olive', 'grey'];

const Tech = () => (
    <Segment piled raised padded='very'>
        <Grid stackable>
            <Grid.Row centered>
                <Header size='huge' content='Mern Stack' dividing />
            </Grid.Row>
            <Grid.Row divided centered>
                {images.map((img, i) =>
                    <Grid.Column width={4} verticalAlign='middle' key={i}>
                        <Image src={img.image} />
                    </Grid.Column>
                )}
            </Grid.Row>
            <Grid.Row centered>
                <Header size='huge' content='Technology' />
            </Grid.Row>
            <Divider hidden />
            {icons.map((val, i) =>
                <Grid.Row columns='equal' verticalAlign='middle' key={i} divided>
                    {val.map((el, j) =>
                        <Grid.Column textAlign='center' key={j}>
                            <Icon
                                name={el}
                                style={styles.icons}
                                // circular
                                size='huge'
                                color={colors[Math.floor(Math.random() * colors.length)]}
                            // inverted
                            />
                        </Grid.Column>
                    )}
                </Grid.Row>
            )}
            <Grid.Row centered >
                <Header size='huge' content='And Many, Many more...' />
            </Grid.Row>
        </Grid>
    </Segment>
);

export default Tech;