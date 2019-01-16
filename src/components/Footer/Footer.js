import React from 'react';
import { Menu, Icon, Header } from 'semantic-ui-react';
import styles from './styles';

const Footer = () => (
    <Menu fixed='bottom' size='tiny' style={styles.footer}>
        <Menu.Item>
            <Icon name='react' loading inverted size='large' />
        </Menu.Item>
        <Menu.Item position='right'>
            <Icon name='copyright' inverted fitted size='large' />
            <Header as='p' floated='right' content='2019' inverted />
        </Menu.Item>
    </Menu>
);

export default Footer;