import React, {
    Component,
    PropTypes,
    Text,
    View
} from 'react-native';

import {styles} from './NavPaneTitle.style.js';

propTypes = {};

defaultProps = {};

export default class NavPaneTitle extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={styles.title}>
                <Text style={styles.titleText}>{this.props.title}</Text>
            </View>
        );
    }
}

NavPaneTitle.propTypes = propTypes;
NavPaneTitle.defaultProps = defaultProps;
