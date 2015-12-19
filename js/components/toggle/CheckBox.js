import React, {
    Component,
    PropTypes,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import {styles} from './CheckBox.style.js';
import {UWPGlobalColors} from '../../UWPGlobal.style.js';

import Tick from '../symbols/Tick';

propTypes = {
    enable: PropTypes.bool,
    isSelected: PropTypes.bool,
    text: PropTypes.string,
    color: PropTypes.string,
    onSelectChange: PropTypes.func
};

defaultProps = {
    enable: true,
    isSelected: false,
    text: '',
    color: UWPGlobalColors.blue
};

export default class CheckBox extends Component {
    constructor(props) {
        super(props);

        const {isSelected} = this.props;

        this.state = {
            isSelected: isSelected
        };
    }

    onPress() {
        if (this.props.enable) {
            this.setState({isSelected: !this.state.isSelected});
            this.props.onSelectChange && this.props.onSelectChange();
        }
    }

    render() {
        const {isSelected} = this.state;
        const {enable, text, color} = this.props;

        let box = (
            <View style={[styles.box, {borderColor: enable ? 'black' : 'gray'}]} />
        );
        if (isSelected) {
            box = (
                <View style={[styles.boxActive, {
                        borderColor: enable ? color : 'gray',
                        backgroundColor: enable ? color : 'gray'
                    }]}
                >
                    <Tick />
                </View>
            );
        }

        let opacity = enable ? 0.5 : 1;

        return (
            <TouchableOpacity onPress={this.onPress.bind(this)} activeOpacity={opacity}>
                <View style={[styles.container, this.props.style]}>
                    {box}
                    <Text style={[styles.text, {color: enable ? 'black' : 'gray'}]}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;
