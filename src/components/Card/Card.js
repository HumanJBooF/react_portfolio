import React from 'react';
import { Card, Container, Image } from 'semantic-ui-react';

const Cards = props => (
    <Container>
        <Card.Group itemsPerRow={4}>
            {props.images.map((image, i) =>
                <Card>
                    <Image src={image.image} />
                    <Card.Content>
                        <Card.Header></Card.Header>
                        <Card.Meta></Card.Meta>
                        <Card.Description></Card.Description>
                    </Card.Content>
                </Card>
            )}
        </Card.Group>
    </Container>
)

export default Cards;