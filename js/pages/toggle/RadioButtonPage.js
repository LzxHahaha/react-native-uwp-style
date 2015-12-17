import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from '../TestPage.style';

import DemoTemplate from '../DemoTemplate';
import RadioButton from '../../components/toggle/RadioButton';

export default class RadioButtonPage extends Component {
    constructor(props) {
        super(props);

        let document = [
            {name: 'color', type: 'string', description: ''},
            {name: 'enable', type: 'bool', description: ''},
            {name: 'isSelected', type: 'bool', description: ''},
            {name: 'text', type: 'string', description: ''},
            {name: 'onSelectChange', type: 'function', description: ''},
            {name: 'value', type: 'object', description: ''}
        ];

        this.state = {
            document: document,
            isSelected: true,
            text: 'Selected'
        };
    }

    render() {
        const {document} = this.state;

        return (
            <DemoTemplate title={'RADIO BUTTON DEMO'} document={document}>
                <RadioButton style={styles.field} text={'Action Text'} />
                <RadioButton style={styles.field} text={'Action Text'} isSelected={true} />
                <RadioButton style={styles.field} text={'Action Text'} enable={false} />
                <RadioButton style={styles.field} text={'Action Text'} enable={false} isSelected={true} />
            </DemoTemplate>
        );
    }
}