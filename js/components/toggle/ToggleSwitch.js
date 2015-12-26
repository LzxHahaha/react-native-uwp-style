import React, {
    Animated,
    Component,
    PropTypes,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import {styles} from './ToggleSwitch.style';
import Theme from '../../config/theme';

propTypes = {
    isOn: PropTypes.bool,
    enable: PropTypes.bool,
    color: PropTypes.string,
    onToggle: PropTypes.func
};

defaultProps = {
    isOn: true,
    enable: true,
    color: Theme.colors.highlight
};

export default class ToggleSwitch extends Component {
    constructor(props) {
        super(props);

        const {isOn} = this.props;
        let left = isOn ? 22 : 2;

        this.state = {
            isOn: isOn,
            left: new Animated.Value(left)
        };
    }

    toggle() {
        if (this.props.enable) {
            let {isOn, left} = this.state;
            let tmp = !isOn ? 22 : 2;

            Animated.timing(left, {
                toValue: tmp,
                duration: 350
            }).start();

            this.setState({isOn: !isOn});

            this.props.onToggle && this.props.onToggle(this.state.isOn);
        }
    }

    render() {
        const {isOn, left} = this.state;
        const {header, color, enable, style} = this.props;
        const {foreground, foregroundDisable} = Theme.colors;

        let opacity = enable ? 0.5 : 1;

        return (
            <View style={[styles.container, style]}>
                {
                    header &&
                    <Text style={styles.header}>{header}</Text>
                }

                <TouchableOpacity onPress={this.toggle.bind(this)} activeOpacity={opacity}>
                    <View style={styles.switchContainer}>
                        <View style={[
                                styles.switcher, {
                                    backgroundColor: enable ? (isOn ? color : 'transparent') : 'transparent',
                                    borderColor: enable ? (isOn ? color : foreground)
                                                        : foregroundDisable
                                }
                            ]}
                        >

                            <Animated.View style={[styles.circle,
                                    enable ? (isOn ? styles.on : styles.off) : styles.circleDisable,
                                    {left: left}
                                ]}
                            />

                        </View>
                        <Text style={enable ? styles.text : styles.textDisable}>{isOn ? 'On' : 'Off'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

ToggleSwitch.propTypes = propTypes;
ToggleSwitch.defaultProps = defaultProps;
