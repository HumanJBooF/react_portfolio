import React from 'react';
import Typed from 'typed.js';
import styles from './styles'
import { Container, Icon } from 'semantic-ui-react';


class Terminal extends React.Component {

    componentDidMount = () => {
        const { strings } = this.props;
        const options = {
            strings: strings,
            typeSpeed: 100,
            smartBackspace: true,
            loop: true,
            cursorChar: '_'
        };
        this.typed = new Typed(this.type, options);
    }

    render () {
        return (
            <Container style={styles.box}>
                <p style={styles.text}>Joshua@Joshua-PC ~</p>
                <Icon inverted name='dollar sign' />
                <span
                    style={{ whiteSpace: 'pre' }}
                    ref={type => { this.type = type }}
                />
            </Container>
        );
    }
}

export default Terminal;