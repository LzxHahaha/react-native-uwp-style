import React, {
    Component,
    PropTypes,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    Image
} from 'react-native';

import {styles} from './TextBox.style.js';
import {GlobalColors, GlobalStyles} from '../../global.style.js';

import * as Icons from '../symbols/Icons';

const propTypes = {
    autoFocus: PropTypes.bool,
    editable: PropTypes.bool,
    hideIconButton: PropTypes.bool,
    header: PropTypes.string,
    highlightColor: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

const defaultProps = {
    editable: true,
    hideIconButton: true,
    highlightColor: GlobalColors.blue,
    icon: Icons.Clear
};

export default class PasswordBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            focus: this.props.autoFocus ? true : false,
            showPassword: false
        };
    }

    onChangeText(text) {
        this.setState({value: text});
        this.props.onChangeText &&  this.props.onChangeText(text);
    }

    onFocus() {
        if (this.props.editable) {
            this.setState({focus: true});
        }
        this.props.onFocus && this.props.onFocus();
    }

    onBlur() {
        if (this.props.editable) {
            this.setState({focus: false});
        }
        this.props.onBlur && this.props.onBlur();
    }

    render() {
        const {header, hideIconButton, editable, highlightColor, ...other} = this.props;
        const {focus, value, showPassword} = this.state;

        let clear = null;
        if ((!hideIconButton || focus) && editable && value) {
            clear = (
                <TouchableWithoutFeedback
                    onPressIn ={() => {
                        this.setState({showPassword: true});
                    }}
                    onPressOut={() => {
                        this.setState({showPassword: false})
                    }}
                >
                    <Image source={Icons.View} style={styles.boxIcon} />
                </TouchableWithoutFeedback>
            );
        }

        return (
            <View style={[styles.container, this.props.style]}>
                {
                    header &&
                    (<Text style={styles.header}>{header}</Text>)
                }
                <View style={[styles.inputBox,
                    {borderColor: focus ? highlightColor : GlobalColors.gray}]}>
                    <TextInput underlineColorAndroid="transparent"
                        {...other}
                               editable={editable}
                               style={styles.textInput}
                               value={value}
                               secureTextEntry={!showPassword}
                               onChangeText={(text) => this.onChangeText(text)}
                               onFocus={this.onFocus.bind(this)}
                               onBlur={this.onBlur.bind(this)}
                    />
                    {clear}
                </View>
            </View>
        );
    }
}

PasswordBox.propTypes = propTypes;
PasswordBox.defaultProps = defaultProps;
