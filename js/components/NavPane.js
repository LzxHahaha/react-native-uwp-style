import React, {
    Component,
    PropTypes,
    Text,
    View,
    Navigator,
    ListView,
    Image
} from 'react-native';

import {styles} from './NavPane.style.js';
import {GlobalColors} from '../global.style';

import Button from './Button';

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

        let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            isPaneOpen: 0,
            width: 0,
            buttons: dataSource.cloneWithRows(this.props.buttons),
            title: this.props.initialName
        };
    }

    togglePane() {
        if (this.state.isPaneOpen) {
            this.setState({
                isPaneOpen: 0,
                width: 0.1
            });
        }
        else {
            this.setState({
                isPaneOpen: 1,
                width: this.props.paneWidth
            })
        }
    }

    onRowPress(rowPress) {
        if (this.state.isPaneOpen) {
            this.togglePane();
        }

        rowPress && rowPress();
    }

    gotoPage(page) {
        let stack = this.nav.getCurrentRoutes();
        let top = stack.length - 1;

        if (page !== stack[top]) {
            this.nav.push(page);
        }
    }

    renderButtons(rowData) {
        const {icon, text, onPress} = rowData;

        return (
            <Button onPress={() => this.onRowPress(onPress)}
                    backgroundColor={GlobalColors.dark}
                    highlightColor={GlobalColors.darkBlue}
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

                <Button style={styles.button} backgroundColor={GlobalColors.blue}
                        highlightColor={GlobalColors.darkBlue}
                        onPress={() => {
                    this.togglePane()
                    }}
                >
                    <Hamburger color={'white'}/>
                </Button>

                <View style={[styles.pane, {width: this.state.width, opacity: this.state.isPaneOpen}]}>
                    <ListView
                        style={styles.paneList}
                        dataSource={this.state.buttons}
                        renderRow={this.renderButtons.bind(this)}
                    />
                </View>
            </View>
        );
    }
}

NavPane.propTypes = propTypes;
NavPane.defaultProps = defaultProps;
