import React, {
    Animated,
    Component,
    PropTypes,
    Text,
    View
} from 'react-native';

import {styles, maxHeight} from './Dialog.style';

import Button from '../action/Button';

propTypes = {};

defaultProps = {};

export default class Dialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            leftText: 'OK',
            rightText: 'Cancel',
            leftPress: () => {},
            rightPress: () => {this.hide()},
            opacity: new Animated.Value(0),
            top: new Animated.Value(-maxHeight),
            isOpen: false
        };

        if (!Dialog.instance) {
            Dialog.instance = this;
        }
    }

    get isOpen() {
        return this.state.isOpen;
    }

    show(title: string, content: string,
         leftText: string = 'OK', leftPress = () => {},
         rightText: string = 'Cancel', rightPress = () => {}) {

        if (!this.state.isOpen) {
            Animated.parallel([
                Animated.timing(this.state.opacity, {
                    toValue: 1,
                    duration: 100
                }),
                Animated.sequence([
                    Animated.timing(this.state.top, {
                        toValue: 10,
                        duration: 250
                    }),
                    Animated.spring(this.state.top, {
                        toValue: 1,
                        friction: 3
                    })
                ])
            ]).start();

            this.setState({isOpen: true});

            if (title !== this.state.title || content !== this.state.content
                || leftText !== this.state.leftText || leftPress !== this.state.leftPress
                || rightText !== this.state.rightText || rightPress !== this.state.rightPress) {
                this.setState({
                    title: title,
                    content: content,
                    leftText: leftText,
                    rightText: rightText,
                    leftPress: leftPress,
                    rightPress: rightPress
                });
            }
        }
    }

    hide() {
        if (this.state.isOpen) {
            Animated.parallel([
                Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 100
                }),
                Animated.timing(this.state.top, {
                    toValue: -maxHeight,
                    duration: 250
                })
            ]).start();

            this.setState({isOpen: false});
        }
    }

     render() {
        const {title, content, leftText, rightText, leftPress, rightPress, opacity, top} = this.state;

        return (
            <Animated.View style={[styles.container, { top: top}]}>
                <View>
                    <Text style={styles.titleText} numberOfLines={1}>{title}</Text>
                    <Text style={styles.contentText} numberOfLines={3}>{content}</Text>
                </View>

                <View style={styles.buttonView}>
                    <Button text={leftText} onPress={() => this.hide() && leftPress && leftPress()}
                            style={styles.button} />
                    <Button text={rightText} onPress={() => this.hide() && rightPress && rightPress()}
                            style={styles.button} />
                </View>
            </Animated.View>
        );
    }
}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
