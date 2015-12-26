import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from '../TestPage.style';

import DemoTemplate from '../DemoTemplate';

export default class NavPanPage extends Component {
    constructor(props) {
        super(props);

        let document = [
            {name: 'buttons', type: '[{icon: Image.source, text: string, onPress: function}]',
                description: 'Array of buttons in the pane.'},
            {name: 'initialRoute', type: 'route: {component: Component, name: string, params: object}', description: ''},
            {name: 'paneWidth', type: 'number', description: 'The pane\'s width when open.'}
        ];

        this.state = {
            document: document
        };
    }

    render() {
        return (
            <DemoTemplate title={'NAVIGATOR DEMO'} document={this.state.document}>
                <Text style={styles.text}>You're already use it.</Text>
                <Text style={styles.text}>Click the hamburger button at the top, then you will see this component.</Text>
            </DemoTemplate>
        );
    }
}