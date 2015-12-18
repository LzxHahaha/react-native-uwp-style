import React, {
    Animated,
    Component,
    PropTypes,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import {styles} from './CommandBar.style';
import {SCREEN_WIDTH} from '../../global.style';

propTypes = {};

defaultProps = {};

export default class CommandBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            barHeight: new Animated.Value(50),
            textOpacity: new Animated.Value(0)
        };
    }

    toggle() {
        const {isOpen, barHeight, textOpacity} = this.state;
        let needOpen = !isOpen;

        if (needOpen) {
            Animated.parallel([
                Animated.timing(barHeight, {
                    toValue: 65,
                    duration: 300
                }),
                Animated.timing(textOpacity, {
                    toValue: 1,
                    duration: 50
                })
            ]).start();
        }
        else {
            Animated.parallel([
                Animated.timing(barHeight, {
                    toValue: 50,
                    duration: 300
                }),
                Animated.timing(textOpacity, {
                    toValue: 0,
                    duration: 50
                })
            ]).start();
        }

        this.setState({isOpen: needOpen});
    }

    renderButtons() {
        const {barButtons} = this.props;

        let buttons = [];

        if (barButtons) {
            let max = SCREEN_WIDTH / 65 - 1;

            for (let i = 0; i < barButtons.length && i < max; ++i) {
                const {icon, text, onPress} = barButtons[i];

                buttons.push(
                    <TouchableOpacity onPress={onPress && onPress()}>
                        <View style={styles.iconButton}>
                            <View style={styles.iconView}>
                                {
                                    icon &&
                                    (<Image source={icon} style={styles.icon}/>)
                                }
                            </View>
                            <Animated.Text numberOfLines={1} style={[styles.iconText, {opacity: this.state.textOpacity}]}>
                                {text}
                            </Animated.Text>
                        </View>
                    </TouchableOpacity>
                );
            }
        }

        buttons.push(
            <TouchableOpacity onPress={this.toggle.bind(this)}>
                <View style={[styles.moreButton]}>
                    <Text style={styles.moreText}>. . .</Text>
                </View>
            </TouchableOpacity>
        );

        return buttons;
    }

    render() {
        const {backgroundColor} = this.props;

        return (
            <Animated.View style={[styles.container, {height: this.state.barHeight}]}>
                {this.renderButtons()}
            </Animated.View>
        );
    }
}

CommandBar.propTypes = propTypes;
CommandBar.defaultProps = defaultProps;
