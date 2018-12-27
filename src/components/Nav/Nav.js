import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';

class Nav extends React.Component {
    state = {
        activeItem: 'Home'
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render () {
        const { activeItem } = this.state;

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item
                        name='Home'
                        active={activeItem === 'Home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='About me'
                        active={activeItem === 'About me'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Tech'
                        active={activeItem === 'Tech'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Projects'
                        active={activeItem === 'Projects'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Contact'
                        active={activeItem === 'Contact'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </Segment>
        );
    }
}

export default Nav;

