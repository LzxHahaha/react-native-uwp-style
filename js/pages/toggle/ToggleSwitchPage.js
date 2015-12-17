import React, {
    Component,
    View,
    Text
} from 'react-native';


import {styles} from '../TestPage.style';

import DemoTemplate from '../DemoTemplate';
import ToggleSwitch from '../../components/toggle/ToggleSwitch';

export default class ToggleSwitchPage extends Component {
    constructor(props) {
        super(props);

        let document = [
            {name: 'color', type: 'string', description: ''},
            {name: 'enable', type: 'bool', description: ''},
            {name: 'isOn', type: 'bool', description: ''},
            {name: 'text', type: 'string', description: ''},
            {name: 'onToggle', type: 'function(isOn)', description: ''}
        ];

        this.state = {
            document: document
        };
    }

    render() {
        const {document} = this.state;

        return (
            <DemoTemplate title={'TOGGLE SWITCH DEMO'} document={document}>
                <ToggleSwitch style={styles.field} text={'Action Text'} />
                <ToggleSwitch style={styles.field} text={'Action Text'} isOn={false} />
                <ToggleSwitch style={styles.field} text={'Action Text'} enable={false} />
                <ToggleSwitch style={styles.field} text={'Action Text'} enable={false} isOn={false} />
            </DemoTemplate>
        );
    }
}