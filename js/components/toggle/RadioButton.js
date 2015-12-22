import React, {
    Component,
    PropTypes,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import {styles} from './RadioButton.style';
import Theme from '../../config/theme';

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
    color: Theme.colors.highlight
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

        let box = ( <View style={[styles.box, {borderColor: enable ? Theme.colors.foreground
                                                                   : Theme.colors.foregroundDisable}]} /> );
        if (isSelected) {
            box = (
                <View style={[styles.boxActive, {borderColor: enable ? color : Theme.colors.foregroundDisable}]}>
                    <View style={[styles.circle, {backgroundColor: enable ? Theme.colors.foreground
                                                                          : Theme.colors.foregroundDisable}]} />
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
