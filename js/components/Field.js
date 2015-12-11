import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from './Field.style';

export default class UWP extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <View style={this.props.style} {...this.props}>
                <View style={styles.container}>
                    <Text style={styles.header}>{this.props.header}</Text>
                    <View style={styles.content}>
                        {this.props.children}
                    </View>
                </View>
            </View>
        );
    }
}