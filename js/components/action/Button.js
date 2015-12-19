import React, {
    Component,
    PropTypes,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import {styles} from './Button.style.js';
import {UWPGlobalColors, UWPGlobalFontSize} from '../../UWPGlobal.style.js';

const propTypes = {
    enable: PropTypes.bool,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    highlightColor: PropTypes.string,
    onPress: PropTypes.func
};

const defaultProps = {
    enable: true,
    backgroundColor: UWPGlobalColors.gray,
    color: UWPGlobalColors.black,
    highlightColor: 'lightgray',
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
        const {enable, backgroundColor, color, highlightColor, text, children, style} = this.props;

        let textColor =  (enable ? color : UWPGlobalColors.darkGray);
        let highlight = enable ? highlightColor : backgroundColor;
        let content = text ? (<Text style={[styles.text, {color: textColor}]}>{text}</Text>)
                           : (<View style={styles.content}>{children}</View>);

        return (
            <TouchableHighlight
                activeOpacity={1} underlayColor={highlight}
                onPress={this.onPress.bind(this)}
                style={[styles.container, style, {backgroundColor: backgroundColor}]}
            >
                { content }
            </TouchableHighlight>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
