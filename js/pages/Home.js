import React, {
    Component,
    View,
    Text,
    Image
} from 'react-native';

import {styles} from './Home.style.js';

import NavPaneTitle from '../components/navigator/NavPaneTitle';
import CommandBar from '../components/navigator/CommandBar';

export default class Home extends Component {
    constructor(props) {
        super(props);


        let buttons = [
            {text: 'Share', icon: require('../image/share.png')}
        ];
        this.state = {
            commandButtons: buttons
        };
    }

    onPress(page) {
        this.props.navigator.push(page);
    }

    render() {
        return (
            <View style={styles.container} title={this.props.title}>
                <NavPaneTitle title={'RN-UWP DEMO'} />
                <View style={styles.center}>
                    <Image source={require('../image/logo.png')} style={styles.icon} />
                    <Text style={styles.text}>Welcome to React Native!</Text>
                </View>

                <CommandBar barButtons={this.state.commandButtons} />
            </View>
        );
    }
}