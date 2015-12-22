import React, {
    Component,
    PropTypes,
    Text,
    View
} from 'react-native';

import {styles} from './Hamburger.style.js';
import Theme from '../../config/theme';

propTypes = {
    color: PropTypes.string
};

defaultProps = {
    color: Theme.colors.foreground
};

export default class Hamburger extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.line, {backgroundColor: this.props.color}]} />
                <View style={[styles.line, {backgroundColor: this.props.color}]} />
                <View style={[styles.line, {backgroundColor: this.props.color}]} />
            </View>
        );
    }
}

Hamburger.propTypes = propTypes;
Hamburger.defaultProps = defaultProps;
