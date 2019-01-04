import React from 'react';
import { Card, Container, Image, List, Divider, Accordion, Grid, Segment } from 'semantic-ui-react';
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
            <Container>
                <Card.Group itemsPerRow={2} stackable>
                    {images.map((image, i) =>
                        <Card key={i} raised>
                            <Card.Content>
                                <Image src={image.image} />
                                <Divider hidden />
                                <Card.Header textAlign='center'>{image.name}</Card.Header>
                                <Card.Description textAlign='center'>
                                    {image.description}
                                    <Divider hidden />
                                    <Accordion styled>
                                        <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick}>
                                            Tech Used
                                </Accordion.Title>
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
                                <Grid columns='equal' textAlign='center' doubling celled='internally'>
                                    <Grid.Column>
                                        <Segment><a href={image.repo}>Repo Link</a></Segment>
                                    </Grid.Column>
                                    {!image.live
                                        ?
                                        ''
                                        :
                                        <Grid.Column>
                                            <Segment><a href={image.live}>Live Link</a></Segment>
                                        </Grid.Column>}

                                </Grid>
                            </Card.Content>
                        </Card>
                    )}
                </Card.Group>
            </Container>
        )
    }
}

export default Cards;