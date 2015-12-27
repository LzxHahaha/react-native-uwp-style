import React, {
    Component,
    View,
    Text,
    TouchableOpacity,
    ListView,
    Navigator,
    Image,
    Platform,
    BackAndroid,
    ToastAndroid
} from 'react-native';

import {styles} from './index.style';
import {UWPGlobalColors} from './UWPGlobal.style';
import {Icons} from './components/symbols/Icons';

import NavPane from './components/navigator/NavPane';
import NavPaneTitle from './components/navigator/NavPaneTitle';
import Router from './components/navigator/Router';
import Dialog from './components/overlays/Dialog';
import UWPDialog from './components/overlays/UWPDialog';

import Pages from './config/pages';

import Home from './pages/Home';

export default class UWP extends Component {
    constructor(props) {
        super(props);

        let buttons = [
            {icon: Icons.Touchpointer, text: 'ACTIONS', onPress: () => {Router.goto(Pages.ActionIndex)}},
            //{icon: Icons.Allapps, text: 'DROP-DOWNS', onPress: () => {}},
            {icon: Icons.Edit, text: 'INPUT FIELDS', onPress: () => {Router.goto(Pages.InputIndex)}},
            {icon: Icons.World, text: 'NAVIGATION', onPress: () => {Router.goto(Pages.NavigatorIndex)}},
            {icon: Icons.Message, text: 'OVERLAYS', onPress: () => {Router.goto(Pages.OverlayIndex)}},
            {icon: Icons.Closepane, text: 'PROGRESS', onPress: () => {Router.goto(Pages.ProgressIndex)}},
            {icon: Icons.Switch, text: 'TOGGLES', onPress: () => {Router.goto(Pages.ToggleIndex)}}
        ];

        this.state = {
            buttons: buttons
        };
    }

    render() {
        console.log(global);

        return (
            <View style={styles.container}>
                <NavPane ref={ref => {global.rootNav = ref} } buttons={this.state.buttons}
                         initialRoute={Pages.Home} buttonColor={'white'}
                         buttonBackground={UWPGlobalColors.blue} buttonHighlight={UWPGlobalColors.darkBlue}
                />
                <Dialog />
            </View>
        );
    }
}

if (Platform.OS === 'android') {
    BackAndroid.addEventListener('hardwareBackPress', function () {
        console.log(UWPDialog.isOpen);
        if (UWPDialog && UWPDialog.isOpen) {
            UWPDialog.hide();
            return true;
        }

        global.rootNav.hidePane();
        let tmp = Router.goBack();
        if (!tmp) {
            if (global.confirmExit) {
                return false;
            }
            else {
                global.confirmExit = true;
                ToastAndroid.show('Press again to quit', 2000);
                setTimeout(() => {global.confirmExit = false}, 2000);
                return true;
            }
        }
        else {
            return true;
        }
    });
}