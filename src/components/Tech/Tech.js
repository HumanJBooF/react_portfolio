import React from 'react';
import images from './images';
import { Icon, Segment, Image, Grid, Header, Divider } from 'semantic-ui-react';

const icons = [
    ['html5', 'css3 alternate', 'git', 'database'],
    ['js', 'aws', 'code', 'docker'],
    ['windows', 'linux', 'npm', 'computer'],
    ['angular', 'gulp', 'less', 'sass']
];

const Tech = () => (
    <Segment piled raised padded='very'>
        <Grid>
            <Grid.Row centered>
                <Header size='huge' content='Mern Stack' dividing style={{ margin: '1em' }} />
            </Grid.Row>
            <Grid.Row centered style={{ border: '1pt solid' }}>
                {images.map((img, i) =>
                    <Grid.Column width={4} verticalAlign='middle' key={i}>
                        <Image src={img.image} className='Tech-top-icons' />
                    </Grid.Column>
                )}
            </Grid.Row>
            <Grid.Row centered>
                <Header size='huge' content='Technology' style={{ marginTop: '1em' }} />
            </Grid.Row>
            <Divider />
            {icons.map((val, i) =>
                <Grid.Row columns='equal' verticalAlign='middle' key={i}>
                    {val.map((el, j) =>
                        <Grid.Column textAlign='center' key={j}>
                            <Icon
                                className='Tech-bottom-icons'
                                name={el}
                                bordered
                                size='massive'
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