import React, {
    Component,
    View,
    Text,
    TouchableOpacity,
    ListView,
    Navigator,
    Image,
    BackAndroid
} from 'react-native';

import {styles} from './index.style';

import NavPane from './components/NavPane';
import NavPaneTitle from './components/NavPaneTitle';
import Router from './Router';

import Pages from './config/pages';

import Home from './pages/Home';

export default class UWP extends Component {
    constructor(props) {
        super(props);

        let buttons = [
            {text: 'ACTIONS', onPress: () => {Router.goto(Pages.ActionIndex)}},
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
            <NavPane buttons={this.state.buttons}
                     initialRoute={Pages.Home}
            />
        );
    }
}

BackAndroid.addEventListener('hardwareBackPress', function() {
    Router.goBack();
    return true;
});