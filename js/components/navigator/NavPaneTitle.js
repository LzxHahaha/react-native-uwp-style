import React, {
    Component,
    PropTypes,
    Text,
    View
} from 'react-native';

import {styles} from './NavPaneTitle.style.js';
import Theme from '../../config/theme';

propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string
};

defaultProps = {
    backgroundColor: Theme.colors.backgroundLight,
    color: Theme.colors.foreground
};

export default class NavPaneTitle extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {backgroundColor, color} = this.props;

        return (
            <View style={[styles.title, {backgroundColor: backgroundColor}]}>
                <Text style={[styles.titleText, {color: color}]}>{this.props.title}</Text>
            </View>
        );
    }
}

NavPaneTitle.propTypes = propTypes;
NavPaneTitle.defaultProps = defaultProps;
