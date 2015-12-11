import React, {
    Component,
    PropTypes,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import {styles} from './Button.style';
import {GlobalColors, GlobalFontSize} from '../global.style';

const propTypes = {
    style: PropTypes.StyleSheet,
    enable: PropTypes.boolean,
    backgroundColor: PropTypes.String,
    color: PropTypes.String,
    highlightColor: PropTypes.String,
    onPress: PropTypes.func
};

const defaultProps = {
    enable: true,
    backgroundColor: GlobalColors.gray,
    color: GlobalColors.black,
    highlightColor: GlobalColors.darkGray,
    onPress: () => {}
};

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    onPress() {
        if (this.props.enable) {
            this.props.onPress();
        }
    }

    render() {
        const {enable, backgroundColor, color, highlightColor, text} = this.props;

        let textColor =  (enable ? color : GlobalColors.darkGray);
        let highlight = enable ? highlightColor : backgroundColor;

        return (
            <TouchableHighlight
                activeOpacity={1} underlayColor={highlight}
                onPress={this.onPress.bind(this)}
                style={[styles.container, this.props.style, {backgroundColor: backgroundColor}]}
            >
                <Text style={[styles.text, {color: textColor}]}>{text}</Text>
            </TouchableHighlight>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
