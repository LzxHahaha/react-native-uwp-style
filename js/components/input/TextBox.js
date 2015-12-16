import React, {
    Component,
    PropTypes,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import {styles} from './TextBox.style.js';
import {GlobalColors, GlobalStyles} from '../../global.style.js';

import Close from '../../symbols/Close';

const propTypes = {
    autoFocus: PropTypes.bool,
    editable: PropTypes.bool,
    hideClear: PropTypes.bool,
    header: PropTypes.string,
    highlightColor: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

const defaultProps = {
    editable: true,
    hideClear: true,
    highlightColor: GlobalColors.blue
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
        let header = null;
        if (this.props.header) {
            header = (<Text style={styles.header}>{this.props.header}</Text>)
        }

        let clear = null;
        if ((!this.props.hideClear || this.state.focus) && this.props.editable && this.state.value) {
            clear = (
                <TouchableOpacity onPress={this.clearInput.bind(this)}>
                    <Close style={styles.clear} />
                </TouchableOpacity>
            );
        }

        return (
            <View style={[styles.container, this.props.style]}>
                {header}
                <View style={[styles.inputBox,
                    {borderColor: this.state.focus ? this.props.highlightColor : GlobalColors.gray}]}>
                    <TextInput underlineColorAndroid="transparent"
                        {...this.props}
                               style={styles.textInput}
                               value={this.state.value}
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
