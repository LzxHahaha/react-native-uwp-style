import React, {
    Component,
    View,
    Text,
    Image
} from 'react-native';

import {styles} from './Home.style.js';

import NavPaneTitle from '../components/NavPaneTitle';

export default class Home extends Component {
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
            <View style={styles.container} title={this.props.title}>
                <NavPaneTitle title={'RN-UWP DEMO'} />
                <View style={styles.center}>
                    <Image source={require('../image/logo.png')} style={styles.icon} />
                    <Text>Welcome to React Native!</Text>
                </View>
            </View>
        );
    }
}