import React, {
    Component,
    PropTypes,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {styles} from './Hyperlink.style';
import {GlobalColors, GlobalFontSize} from '../global.style';

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
        const {enable, color} = this.props;

        let linkColor = color ? color : (enable? GlobalColors.blue : GlobalColors.gray);
        let activeOpacity = enable ? 0.5 : 1;

        return (
            <View style={[styles.container, this.props.style]} {...this.props}>
                <TouchableOpacity activeOpacity={activeOpacity} onPress={this.onPress.bind(this)}>
                    <Text style={[styles.link, {color: linkColor}]}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Hyperlink.propTypes = propTypes;
Hyperlink.defaultProps = defaultProps;
