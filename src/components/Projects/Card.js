import React from 'react';
import { Card, Image, List, Divider, Accordion, Grid, Segment, Header } from 'semantic-ui-react';
import images from './images';

class Cards extends React.Component {

    state = { activeIndex: -1 }

    handleClick = (e, title) => {
        const { index } = title
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render () {
        const { activeIndex } = this.state;
        return (
            <Segment piled padded='very' raised>
                <Header textAlign='center' size='huge' dividing content='Projects' />
                <Card.Group itemsPerRow={2}>
                    {images.map((image, i) =>
                        <Card key={i} raised>
                            <Image src={image.image} className='Project-image' />
                            <Card.Content>
                                <Card.Header textAlign='center'>{image.name}</Card.Header>
                                <Card.Description textAlign='center'>
                                    {image.description}
                                    <Divider hidden />
                                    <Accordion styled>
                                        <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick} content='Tech Used' />
                                        <Accordion.Content active={activeIndex === i}>
                                            <List>
                                                {image.tech.map((val, index) =>
                                                    <List.Item key={index}>{val}</List.Item>
                                                )}
                                            </List>
                                        </Accordion.Content>
                                    </Accordion>
                                </Card.Description>
                                <Divider hidden />
                            </Card.Content>
                            <Card.Content>
                                <Grid columns='equal' textAlign='center' divided>
                                    <Grid.Column>
                                        <Segment><a href={image.repo} target='_blank' rel='noopener noreferrer'>Repo Link</a></Segment>
                                    </Grid.Column>
                                    {!image.live
                                        ?
                                        ''
                                        :
                                        <Grid.Column>
                                            <Segment><a href={image.live} target='_blank' rel='noopener noreferrer'>Live Link</a></Segment>
                                        </Grid.Column>}
                                </Grid>
                            </Card.Content>
                        </Card>
                    )}
                </Card.Group>
            </Segment>
        )
    }
}

export default Cards;