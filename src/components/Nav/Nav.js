import React from 'react'
import styles from './styles';
import Terminal from '../Terminal';
import { Container, Header, Menu, Visibility, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends React.Component {
    state = {
        menuFixed: false,
        // activeItem: 'home',
        string: ['npm install^1000\n`installing developer...`\n`I am a <strong>Full stack developer</strong>`',
            `I love working with: Node`,
            `I love working with: Express`,
            `I love working with: React`,
            'I love working with: MongoDb',
            `I love learning`,
            `I love being challenged`,
            `Come check out my work!`]
    }

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickTopMenu = () => this.setState({ menuFixed: false })

    render () {
        const { menuFixed, activeItem } = this.state;

        let menuItems = [];

        this.props.items.map((item, i) => {
            const name = this.props.items[i][0];
            const route = this.props.items[i][1];
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
                            {/* <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                                <Icon name='home' />
                                Home
                            </Menu.Item>

                            <Menu.Item
                                name='about me'
                                active={activeItem === 'about me'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='tech'
                                active={activeItem === 'tech'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='projects'
                                active={activeItem === 'projects'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='contact'
                                active={activeItem === 'contact'}
                                onClick={this.handleItemClick}
                            /> */}
                        </Container>
                    </Menu>
                </Visibility>
            </>
        )
    }
}

export default withRouter(Nav);

