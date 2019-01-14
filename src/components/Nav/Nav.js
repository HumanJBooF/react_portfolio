import React from 'react'
import styles from './styles';
import Terminal from '../Terminal';
import { Container, Header, Menu, Visibility, Divider } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends React.Component {
    state = {
        menuFixed: false,
        string: ['npm install^1000\n`installing developer...`^1000\n`I am a <strong>Full stack developer</strong>`',
            `I love working with: Node`,
            `I love working with: Express`,
            `I love working with: React`,
            'I love working with: MongoDb',
            `I love learning`,
            `I love being challenged`,
            `Come check out my work!`],
        items: [['Home', '/'],
        ['Tech', '/tech'],
        ['Projects', '/projects'],
        ['Contact', 'contact']]
    }

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickTopMenu = () => this.setState({ menuFixed: false })

    render () {
        const { menuFixed, items } = this.state;

        let menuItems = [];

        items.map((item, i) => {
            const name = items[i][0];
            const route = items[i][1];
            menuItems.push(
                <Menu.Item
                    key={`item-${i}`}
                    index={i}
                    as={Link}
                    to={route}
                    active={route === this.props.location.pathname}
                >
                    {name}
                </Menu.Item>
            )
        })

        return (
            <Container fluid style={styles.back}>
                <Container text>
                    <Header textAlign='center' size='huge' content='Welcome' inverted style={styles.header} />
                    <Divider hidden />
                    <Terminal strings={this.state.string} />
                </Container>
                <Visibility
                    onTopPassed={this.stickTopMenu}
                    onBottomPassedReverse={this.unStickTopMenu}
                    once={false}
                    offset={[50, 50]}
                >
                    <Menu
                        pointing
                        inverted
                        widths={5}
                        size='tiny'
                        fixed={menuFixed ? 'top' : undefined}
                        style={menuFixed ? styles.fixedMenu : styles.menu}
                    >
                        {menuItems}
                    </Menu>
                </Visibility>
            </Container>
        )
    }
}

export default withRouter(Nav);

