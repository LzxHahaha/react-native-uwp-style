import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from '../TestPage.style';

import DemoTemplate from '../DemoTemplate';
import CommandBar from '../../components/navigator/CommandBar';
import * as Icons from '../../components/symbols/Icons';

export default class CommandBarPage extends Component {
    constructor(props) {
        super(props);

        let document = [
            {name: 'backgroundColor', type: 'string', description: ''},
            {name: 'barButtons', type: '[{icon: Image.source, text: string, onPress: function}]',
                description: 'Array of buttons in the command bar. You can see icon at js/component/symbol/Icon.js'},
            {name: 'subList', type: '[{text: string, onPress: function}]',
                description: 'The sub list, you will see them when click the "more" button in command bar.'}
        ];

        this.state = {
            document: document
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <DemoTemplate title={'COMMAND BAR DEMO'} document={this.state.document}
                              note={'This component is absolute position, so when you use it, you should make sure this will not cover other component.'}
                              style={{marginBottom: 50}}>
                    <Text>Look at bottom of this page.</Text>
                </DemoTemplate>

                <CommandBar barButtons={[{text: 'Hello', icon: Icons.Emoji}]}
                            subList={[{text: 'item1'}, {text: 'item2'}, {text: 'item3'}, {text: 'item4'}]}
                />
            </View>
        );
    }
}