import React, {
    Component,
    PropTypes,
    Text,
    TouchableHighlight,
    PanResponder,
    View
} from 'react-native';

import {styles, sliderWidth} from './Slider.style.js';
import {GlobalColors, GlobalFontSize} from '../../global.style.js';

import Button from './Button'

const propTypes = {
    max: PropTypes.number,
    value: PropTypes.number,
    color: PropTypes.string,
    scrollBarColor: PropTypes.string
};

const defaultProps = {
    max: 100,
    value: 0,
    color: GlobalColors.blue,
    scrollBarColor: 'gray'
};

export default class Slider extends Component {
    constructor(props) {
        super(props);

        const {max, value} = this.props;

        this.state = {
            max: max,
            value: value,
            step: 0,
            xMin: 0,
            xCurrent: 0,
            xMax: 0
        };
    }

    panResponse = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,

        onPanResponderGrant: (evt, gestureState) => {
        },
        onPanResponderMove: (evt, gestureState) => this.onMove(evt, gestureState)
    });

    onLayout(e) {
        const {x, width} = e.nativeEvent.layout;
        const {max, value} = this.props;

        let step = max / (width - sliderWidth);
        this.setState({
            xMin: x,
            xMax: width - sliderWidth,
            xCurrent: step * value + x,
            step: step
        });
    }

    onMove(evt, gestureState) {
        const {moveX, x0} = gestureState;
        const {max, value, step, xCurrent} = this.state;

        let tmp = Math.round((moveX - xCurrent) * step + value);

        if (0 <= tmp && tmp <= max) {
            this.setState({
                value: tmp,
                xCurrent: moveX
            })
        }
        else if (tmp < 0) {
            this.setState({
                value: 0,
                xCurrent: moveX
            })
        }
        else {
            this.setState({
                value: max,
                xCurrent: moveX
            })
        }
    }


    render() {
        const {style, color, scrollBarColor} = this.props;
        const {xCurrent, xMin, xMax, value, step, max} = this.state;

        return (
            <View style={[styles.container, style]}
                  onLayout={(e) => this.onLayout(e)}>
                <Text>value: {value}</Text>

                <View style={styles.sliderView}>

                    <View style={[styles.scrollBar, {
                        backgroundColor: color,
                        width: value / step
                    }]} />

                    <View style={[styles.slider, {backgroundColor: color}]}
                        {...this.panResponse.panHandlers}
                    />

                    <View style={[styles.scrollBar, {
                        backgroundColor: scrollBarColor,
                        width: (max - value) / step
                    }]} />
                </View>
            </View>
        );
    }
}

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;
