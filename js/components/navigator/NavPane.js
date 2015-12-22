import React, {
    Animated,
    Component,
    PropTypes,
    Text,
    View,
    Navigator,
    ListView,
    Image
} from 'react-native';

import {styles} from './NavPane.style.js';
import Theme from '../../config/theme';

import Button from '../action/Button';

import Hamburger from '../symbols/Hamburger';

propTypes = {
    paneWidth: PropTypes.number,
    backgroundColor: PropTypes.string,
    highlightColor: PropTypes.string,
    buttonBackground: PropTypes.string,
    buttonHighlight: PropTypes.string,
    buttonColor: PropTypes.string,
    color: PropTypes.string
};

defaultProps = {
    paneWidth: 256,
    backgroundColor: Theme.colors.backgroundLight,
    highlightColor: Theme.colors.foregroundDisable,
    buttonBackground: Theme.colors.backgroundLight,
    buttonHighlight: Theme.colors.foregroundDisable,
    buttonColor: Theme.colors.foreground,
    color: Theme.colors.foreground
};

export default class NavPane extends Component {
    constructor(props) {
        super(props);

        if (NavPane.instance == null) {
            NavPane.instance = this;
            NavPane.jumpCount = 0;
        }

        let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            isPaneOpen: false,
            width: new Animated.Value(0.1),
            buttons: dataSource.cloneWithRows(this.props.buttons)
        };
    }

    gotoPage(page) {
        let stack = this.nav.getCurrentRoutes();
        if (stack.indexOf(page) === -1) {
            this.nav.push(page);
        }
        else {
            ++NavPane.jumpCount;
            this.nav.jumpTo(page);
        }
    }

    goBack() {
        if (NavPane.jumpCount > 0) {
            --NavPane.jumpCount;
            this.nav.jumpBack();
            return true;
        }
        else {
            this.nav.pop();
            return this.nav.getCurrentRoutes().length !== 1;
        }
    }

    hidePane() {
        if (this.state.isPaneOpen) {
            this.togglePane();
        }
    }

    togglePane() {
        const {paneWidth} = this.props;
        const {isPaneOpen, width}  = this.state;

        if (isPaneOpen) {
            Animated.timing(width, {
                toValue: 0.1,
                duration: 150
            }).start();
            this.setState({
                isPaneOpen: false
            });
        }
        else {
            Animated.sequence([
                Animated.timing(width, {
                    toValue: paneWidth + 10,
                    duration: 150
                }),
                Animated.spring(width, {
                    toValue: paneWidth,
                    tension: 10,
                    friction: 2
                })
            ]).start();
            this.setState({
                isPaneOpen: true
            });
        }
    }

    onRowPress(rowPress) {
        if (this.state.isPaneOpen) {
            this.togglePane();
        }

        rowPress && rowPress();
    }

    renderButtons(rowData) {
        const {icon, text, onPress} = rowData;
        const {backgroundColor, highlightColor, color} = this.props;

        return (
            <Button onPress={() => this.onRowPress(onPress)}
                    backgroundColor={backgroundColor}
                    highlightColor={highlightColor}
            >
                <View style={styles.paneButton}>
                    <View style={styles.iconView}>
                    {
                        icon &&
                        <Image source={icon} style={styles.paneButtonIcon} />
                    }
                    </View>
                    {
                        text &&
                        <Text style={[styles.paneButtonText, {color: color}]}>{text}</Text>
                    }
                </View>
            </Button>
        );
    }

    render() {
        const {initialRoute, buttonBackground, buttonHighlight, buttonColor} = this.props;

        return (
            <View style={styles.container}>

                <Navigator ref={nav => {this.nav = nav}}
                           initialRoute={initialRoute}
                           configureScene={() => {
                           return Navigator.SceneConfigs.PushFromRight;
                       }}
                           renderScene={(route, navigator) => {
                           let Component = route.component;
                           if (route.component) {
                               return <Component {...route.params} navigator={navigator} title={route.name} />
                           }
                       }}
                />

                <Button style={styles.button} backgroundColor={buttonBackground}
                        highlightColor={buttonHighlight}
                        onPress={() => {
                    this.togglePane()
                    }}
                >
                    <Hamburger color={buttonColor} />
                </Button>

                <Animated.View style={[styles.pane, {width: this.state.width}]}>
                    <ListView
                        style={styles.paneList}
                        dataSource={this.state.buttons}
                        renderRow={this.renderButtons.bind(this)}
                    />
                </Animated.View>
            </View>
        );
    }
}

NavPane.propTypes = propTypes;
NavPane.defaultProps = defaultProps;
