import React, {
    Component,
    PropTypes,
    View
} from 'react-native';

import {styles} from './Close.style.js';
import {GlobalColors, GlobalStyles} from '../../global.style';

const propTypes = {
};

const defaultProps = {
};

export default class Close extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.left} />
                <View style={styles.right} />
            </View>
        );
    }
}

Close.propTypes = propTypes;
Close.defaultProps = defaultProps;
