import React from 'react';
import Typed from 'typed.js';
import { Container } from 'semantic-ui-react';


class Terminal extends React.Component {

    componentDidMount = () => {
        const { strings } = this.props
        const options = {
            strings: strings,
            typeSpeed: 60,
            smartBackspace: true,
            loop: true,
            cursor: '_'
        }
        this.typed = new Typed(this.type, options)
    };
    render () {
        return (
            <Container>
                <span
                    style={{ whiteSpace: 'pre' }}
                    ref={type => { this.type = type }}
                />
            </Container>
        );
    }
}

export default Terminal;