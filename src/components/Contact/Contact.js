import React from 'react'
import { Segment, Grid, Icon, Header, Card, Popup } from 'semantic-ui-react'

const icons = [
    { title: 'Click to go to my LinkedIn', icon: 'linkedin', color: 'blue', url: 'https://linkedin.com/in/joshua-leboeuf' },
    { title: 'Click to check out my Github', icon: 'github', color: 'black', url: 'https://github.com/HumanJBooF' },
    { title: 'Send me an Gmail', icon: 'google', color: 'red', url: null, mail: 'mailto:humanjboof@gmail.com' },
    { title: 'Download my resume', icon: 'file text', color: 'black', url: './assets/resume/Resume-Joshua-LeBoeuf-12--1-2018.pdf', download: 'Joshua-LeBoeuf-Resume' }
];

const Contact = () => (
    <Segment piled>
        <Grid stackable>
            <Grid.Row centered>
                <Header size='huge' content='Contact me' />
            </Grid.Row>
            <Grid.Row>
                {icons.map(el =>
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