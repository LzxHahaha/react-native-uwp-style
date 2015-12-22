import React, {
    Animated,
    Component,
    PropTypes,
    Text,
    TouchableOpacity,
    View,
    ListView,
    Image,
    Dimensions
} from 'react-native';

import {styles} from './CommandBar.style';
import Theme from '../../config/theme';
import * as Icons from '../symbols/Icons';

propTypes = {
    backgroundColor: PropTypes.string
};

defaultProps = {
    backgroundColor: Theme.colors.backgroundBasic
};

export default class CommandBar extends Component {
    constructor(props) {
        super(props);

        const {subList} = this.props;

        let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => {}});
        let height = 0;
        let maxHeight = 0;
        if (subList) {
            height = subList.length * 45 + 25;
            maxHeight = height > 155 ? 155 : height;
        }

        this.state = {
            isOpen: false,
            barHeight: new Animated.Value(50),
            textOpacity: new Animated.Value(0),
            subListSource: dataSource.cloneWithRows(subList ? subList : []),
            listHeight: new Animated.Value(0.1),
            listMaxHeight: maxHeight
        };
    }

    toggle() {
        const {isOpen, barHeight, listHeight, listMaxHeight, textOpacity} = this.state;
        let needOpen = !isOpen;

        if (needOpen) {
            Animated.parallel([
                Animated.timing(barHeight, {
                    toValue: 65 + listMaxHeight,
                    duration: 300
                }),
                Animated.timing(listHeight, {
                    toValue: listMaxHeight,
                    duration: 300
                }),
                Animated.timing(textOpacity, {
                    toValue: 1,
                    duration: 300
                })
            ]).start();
        }
        else {
            Animated.parallel([
                Animated.timing(barHeight, {
                    toValue: 50,
                    duration: 300
                }),
                Animated.timing(listHeight, {
                    toValue: 0.1,
                    duration: 300
                }),
                Animated.timing(textOpacity, {
                    toValue: 0,
                    duration: 300
                })
            ]).start();
        }

        this.setState({isOpen: needOpen});
    }

    renderSubList() {
        const {subList} = this.props;

        let list = null;

        if (subList) {
            list = (
                <Animated.View style={[{height: this.state.listHeight}]}>
                    <ListView
                        style={styles.subList}
                        dataSource={this.state.subListSource}
                        renderRow={(rowData) => {
                            return (
                                <TouchableOpacity onPress={rowData.onPress && rowData.onPress()}>
                                    <View style={styles.rowItem}>
                                        <Text style={styles.rowItemText}>{rowData.text}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </Animated.View>
            );
        }

        return list;
    }

    renderButtons() {
        const {barButtons} = this.props;
        const SCREEN_WIDTH = Dimensions.get('window').width;

        let buttons = [];

        if (barButtons) {
            let max = SCREEN_WIDTH / 65 - 1;

            for (let i = 0; i < barButtons.length && i < max; ++i) {
                const {icon, text, onPress} = barButtons[i];

                buttons.push(
                    <TouchableOpacity onPress={onPress && onPress()} key={i}>
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
            <TouchableOpacity onPress={this.toggle.bind(this)} key={'more'}>
                <View style={[styles.moreButton]}>
                    <View style={styles.iconView}>
                        <Image source={Icons.More} style={styles.icon}/>
                    </View>
                </View>
            </TouchableOpacity>
        );

        return buttons;
    }

    render() {
        const {backgroundColor} = this.props;

        return (
            <Animated.View style={[styles.container, {backgroundColor: backgroundColor,
                height: this.state.barHeight}]}
            >
                {this.renderSubList()}
                <View style={[styles.bar]}>
                    {this.renderButtons()}
                </View>
            </Animated.View>
        );
    }
}

CommandBar.propTypes = propTypes;
CommandBar.defaultProps = defaultProps;
