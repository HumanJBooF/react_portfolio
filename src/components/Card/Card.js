import React from 'react';
import { Card, Container, Image } from 'semantic-ui-react';
import images from '../../images.json';

const Cards = () => (
    <Container>
        <Card.Group itemsPerRow={4}>
            {images.map((image, i) =>
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