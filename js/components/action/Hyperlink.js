import React, {
    Component,
    PropTypes,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {styles} from './Hyperlink.style.js';
import Theme from '../../config/theme';

const propTypes = {
    enable: PropTypes.bool,
    color: PropTypes.string,
    onPress: PropTypes.func
};

const defaultProps = {
    enable: true
};

export default class Hyperlink extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    onPress() {
        if (this.props.enable) {
            this.props.onPress();
        }
    }

    render() {
        const {enable, color, style, text, ...others} = this.props;

        let linkColor = color ? color : (enable? Theme.colors.highlight : Theme.colors.foregroundDisable);
        let activeOpacity = enable ? 0.5 : 1;

        return (
            <View style={[styles.container, style]} {...others}>
                <TouchableOpacity activeOpacity={activeOpacity} onPress={this.onPress.bind(this)}>
                    <Text style={[styles.link, {color: linkColor, textDecorationColor: color}]}>{text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Hyperlink.propTypes = propTypes;
Hyperlink.defaultProps = defaultProps;
