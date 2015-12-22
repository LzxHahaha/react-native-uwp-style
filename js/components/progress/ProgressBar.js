import React, {
    Animated,
    Component,
    PropTypes,
    Text,
    View
} from 'react-native';

import {styles} from './ProgressBar.style.js';
import Theme from '../../config/theme';

propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    max: PropTypes.number,
    value: PropTypes.number,
    onChangeValue: PropTypes.func
};

defaultProps = {
    backgroundColor: Theme.colors.backgroundBasic,
    color: Theme.colors.highlight,
    max: 100,
    value: 0
};

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);

        const {max, value} = this.props;

        this.state = {
            step: 0,
            max: max,
            value: value % max,
            displayWidth: new Animated.Value(0)
        };
    }

    onLayout(e) {
        const {max, value} = this.state;
        const {width} = e.nativeEvent.layout;
        let step = max / width;

        Animated.timing(this.state.displayWidth, {
            toValue: value / step,
            duration: 500
        }).start();

        this.setState({
            step: step
        });
    }

    changeValue(value) {
        const {step, max} = this.state;

        let tmp = value <= max ? value : value % max;

        Animated.timing(this.state.displayWidth, {
            toValue: tmp / step,
            duration: 500
        }).start();

        this.setState({value: tmp});

        this.props.onChangeValue && this.props.onChangeValue(tmp);
    }

    render() {
        const {backgroundColor, color, style, header} = this.props;
        const {displayWidth} = this.state;

        return (
            <View>
                {
                    header &&
                    <Text style={styles.header}>{header}</Text>
                }

                <View style={[styles.progress, style, {backgroundColor: backgroundColor}]}
                      onLayout={(e) => this.onLayout(e)}>
                    <Animated.View style={[styles.active, {backgroundColor: color, width: displayWidth}]} />
                </View>
            </View>
        );
    }
}

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
