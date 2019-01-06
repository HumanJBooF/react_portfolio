import React from 'react'
import styles from './styles';
import Terminal from '../Terminal';
import { Container, Header, Menu, Visibility, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends React.Component {
    state = {
        menuFixed: false,
        string: ['npm install^1000\n`installing developer...`\n`I am a <strong>Full stack developer</strong>`',
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
            <>
                <Container text style={{ marginTop: '2em' }}>
                    <Header textAlign='center' as='h1'>Welcome</Header>
                    <Terminal strings={this.state.string} />
                </Container>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu borderless
                        pointing
                        inverted
                        widths={5}
                        size='massive'
                        fixed={menuFixed ? 'top' : undefined}
                        style={menuFixed ? styles.fixedMenu : styles.menu}
                    >
                        <Container text>
                            {menuItems}
                        </Container>
                    </Menu>
                </Visibility>
            </>
        )
    }
}

export default withRouter(Nav);

