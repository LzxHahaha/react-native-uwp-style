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
            xMin: null,
            xCurrent: 0,
            xMax: null,
            width: 0
        };
    }

    panResponse = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,

        onPanResponderGrant: (evt, gestureState) => {
            const {value, step, xMin, xCurrent, width} = this.state;
            if (xMin == null) {
                let min = gestureState.x0 - xCurrent;
                this.setState({
                    xCurrent: gestureState.x0,
                    xMin: min,
                    xMax: width + min
                })
            }
        },
        onPanResponderMove: (evt, gestureState) => this.onMove(evt, gestureState)
    });

    onLayout(e) {
        const {width} = e.nativeEvent.layout;
        const {max, value} = this.props;

        let step = max / (width - sliderWidth);
        let current = Math.round(value / step);

        this.setState({
            xCurrent: current,
            xMax: width,
            width: width,
            step: step
        });
    }

    onMove(evt, gestureState) {
        const {moveX} = gestureState;
        const {max, value, step, xCurrent, xMin, xMax, width} = this.state;

        let tmp = Math.round((moveX - xCurrent) * step) + value;

        if (0 <= tmp && tmp <= max) {
            this.setState({
                value: tmp,
                xCurrent: moveX
            })
        }
        else if (moveX < 0) {
            this.setState({
                value: 0,
                xCurrent: xMin
            })
        }
        else if (moveX > xMax) {
            this.setState({
                value: max,
                xCurrent: xMax
            })
        }

        this.props.onMove && this.props.onMove(this.state.value);
    }


    render() {
        const {style, header, color, scrollBarColor} = this.props;
        const {xMax, value, step} = this.state;
        let leftWidth = Math.round(value / step);

        return (
            <View style={[styles.container, style]}
                  onLayout={(e) => this.onLayout(e)}>
                {
                    header &&
                    <Text style={styles.header}>{header}</Text>
                }

                <View style={styles.sliderView}>

                    <View style={[styles.scrollBar, {
                        backgroundColor: color,
                        width: leftWidth
                    }]} />

                    <TouchableHighlight >
                        <View style={[styles.slider, {backgroundColor: color}]}
                            {...this.panResponse.panHandlers}
                        />
                    </TouchableHighlight>

                    <View style={[styles.scrollBar, {
                        backgroundColor: scrollBarColor,
                        width: xMax - leftWidth
                    }]} />
                </View>
            </View>
        );
    }
}

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;
