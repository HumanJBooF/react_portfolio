import React from 'react';
import Typed from 'typed.js';
import styles from './styles'
import { Container, Icon, Header } from 'semantic-ui-react';


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
            <fieldset style={styles.box}>
                <legend style={{ fontSize: '10px', background: 'blue' }}>c:\WINDOWS</legend>
                <p style={styles.text}>Joshua@Joshua-PC ~</p>
                <Icon inverted name='dollar sign' />
                <span
                    style={{ whiteSpace: 'pre' }}
                    ref={type => { this.type = type }}
                />
            </fieldset>
        );
    }
}

export default Terminal;