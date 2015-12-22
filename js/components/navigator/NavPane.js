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
    paneWidth: PropTypes.number
};

defaultProps = {
    paneWidth: 256
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

        return (
            <Button onPress={() => this.onRowPress(onPress)}
                    backgroundColor={Theme.colors.backgroundLight}
                    highlightColor={Theme.colors.backgroundBasic}
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
                            <Text style={styles.paneButtonText}>{text}</Text>
                    }
                </View>
            </Button>
        );
    }

    render() {
        const {initialRoute} = this.props;

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

                <Button style={styles.button} backgroundColor={Theme.colors.backgroundBasic}
                        highlightColor={Theme.colors.foregroundDisable}
                        onPress={() => {
                    this.togglePane()
                    }}
                >
                    <Hamburger />
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
