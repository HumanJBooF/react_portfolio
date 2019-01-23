import React from 'react'
import { Segment, Grid, Icon, Header, Card, Popup } from 'semantic-ui-react'
import info from './info';

const Contact = () => (
    <Segment piled padded='very' raised>
        <Grid columns='even'>
            <Grid.Row centered>
                <Header size='huge' dividing content='Contact me' />
            </Grid.Row>
            <Grid.Row>
                {info.map(el =>
                    <Grid.Column width={4}>
                        <Card raised>
                            <Card.Content textAlign='center'>
                                <Popup
                                    trigger={
                                        <a href={el.url ? el.url : el.mail}
                                            target={el.url ? el.url : null}
                                            download={el.download ? el.download : null}>
                                            <Icon name={el.icon} size='massive' color={el.color} className='Contact-icons' />
                                        </a>
                                    }
                                    content={el.title}
                                    position='top center'
                                    verticalOffset={50}
                                    size='large'
                                    hideOnScroll
                                    inverted
                                />
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )}
            </Grid.Row>
        </Grid>
    </Segment>
)

export default Contact;