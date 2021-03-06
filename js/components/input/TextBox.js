import React, {
    Component,
    PropTypes,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import {styles} from './TextBox.style.js';
import Theme from '../../config/theme';
import {Icons} from '../symbols/Icons';

const propTypes = {
    autoFocus: PropTypes.bool,
    editable: PropTypes.bool,
    hideIconButton: PropTypes.bool,
    header: PropTypes.string,
    highlightColor: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onIconPress: PropTypes.func
};

const defaultProps = {
    editable: true,
    hideIconButton: true,
    highlightColor: Theme.colors.highlight,
    icon: Icons.Clear
};

export default class TextBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            focus: this.props.autoFocus ? true : false
        };
    }

    clearInput() {
        this.setState({value: ''});
        this.onChangeText('');
    }

    onChangeText(text) {
        this.setState({value: text});
        this.props.onChangeText && this.props.onChangeText(text);
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
        const {header, hideIconButton, editable, icon, highlightColor, onIconPress, ...other} = this.props;
        const {focus, value} = this.state;

        let clear = null;
        if ((!hideIconButton || focus) && editable && value) {
            clear = (
                <TouchableOpacity onPress={() => {
                    onIconPress ? onIconPress()
                                : this.clearInput()
                }}>

                    { <Image source={icon} style={styles.boxIcon} /> }
                </TouchableOpacity>
            );
        }

        return (
            <View style={[styles.container, this.props.style]}>
                {
                    header &&
                    (<Text style={styles.header}>{header}</Text>)
                }
                <View style={[styles.inputBox,
                    {borderColor: focus ? highlightColor : Theme.colors.foregroundDisable}]}>
                    <TextInput underlineColorAndroid="transparent"
                        {...other}
                               editable={editable}
                               style={[styles.textInput, {color: editable ? Theme.colors.foreground
                                                                          : Theme.colors.foregroundDisable}]}
                               value={value}
                               placeholderTextColor={Theme.colors.placeholder}
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

TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;
