import React, {
    Component,
    PropTypes,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import {styles} from './RadioButton.style';
import {UWPGlobalColors} from '../../UWPGlobal.style.js';

propTypes = {
    enable: PropTypes.bool,
    isSelected: PropTypes.bool,
    text: PropTypes.string,
    color: PropTypes.string
};

defaultProps = {
    enable: true,
    isSelected: false,
    text: '',
    color: UWPGlobalColors.blue
};

export default class RadioButton extends Component {
    constructor(props) {
        super(props);

        const {isSelected} = this.props;

        this.state = {
            isSelected: isSelected
        };
    }

    cancel() {
        this.setState({isSelected: false});
    }

    onPress() {
        if (this.props.enable) {
            const {isSelected} = this.state;
            this.setState({isSelected: !isSelected});
            this.props.onSelectChange && this.props.onSelectChange(this.props.value);
        }
    }

    render() {
        const {isSelected} = this.state;
        const {enable, text, color} = this.props;

        let box = ( <View style={[styles.box, {borderColor: enable ? 'black' : 'gray'}]} /> );
        if (isSelected) {
            box = (
                <View style={[styles.boxActive, {borderColor: enable ? color : 'gray'}]}>
                    <View style={[styles.circle, {backgroundColor: enable ? 'black' : 'gray'}]} />
                </View>
            );
        }

        let opacity = enable ? 0.5 : 1;

        return (
            <TouchableOpacity onPress={this.onPress.bind(this)} activeOpacity={opacity}>
                <View style={[styles.container, this.props.style]}>
                    {box}
                    <Text style={enable ? styles.text : styles.textDisable}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;
