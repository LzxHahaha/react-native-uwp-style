import React, {
    Component,
    View,
    Text,
    TouchableOpacity,
    ListView,
    Navigator,
    Image
} from 'react-native';

import {styles} from './index.style';

import NavPane from './components/NavPane';
import NavPaneTitle from './components/NavPaneTitle';

import * as page from './config/pages';

export default class UWP extends Component {
    constructor(props) {
        super(props);

        let buttons = [
            {text: 'ACTIONS', onPress: () => {this.refs.NAV.gotoPage(page.Button)}},
            {text: 'DROP-DOWNS', onPress: () => {}},
            {text: 'INPUT FIELDS', onPress: () => {}},
            {text: 'NAVIGATION', onPress: () => {}},
            {text: 'OVERLAYS', onPress: () => {}},
            {text: 'PROGRESS', onPress: () => {}},
            {text: 'TOGGLES', onPress: () => {}}
        ];

        this.state = {
            buttons: buttons
        };
    }

    render() {
        return (
            <NavPane ref={'NAV'} initialName={'RN-UWP DEMO'} initialComponent={Home} buttons={this.state.buttons} />
        );
    }
}

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    onPress(page) {
        const { navigator } = this.props;

        navigator.push(page);
    }

    render() {
        return (
            <View style={styles.container} title={'RN-UWP DEMO'}>
                <NavPaneTitle title={'RN-UWP DEMO'} />
                <View style={styles.center}>
                    <Image source={require('./image/logo.png')} style={styles.icon} />
                    <Text>Welcome to React Native!</Text>
                </View>
            </View>
        );
    }
}
