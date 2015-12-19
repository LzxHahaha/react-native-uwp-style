import React, {
    Component,
    PropTypes,
    Text,
    View
} from 'react-native';

import {styles} from './Tick.style.js';

propTypes = {};

defaultProps = {};

export default class Tick extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={styles.tick} />
        );
    }
}

Tick.propTypes = propTypes;
Tick.defaultProps = defaultProps;
