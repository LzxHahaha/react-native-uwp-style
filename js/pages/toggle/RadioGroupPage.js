import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from '../TestPage.style';

import DemoTemplate from '../DemoTemplate';
import RadioGroup from '../../components/toggle/RadioGroup';

export default class RadioGroupPage extends Component {
    constructor(props) {
        super(props);

        let document = [
            {name: 'color', type: 'string', description: ''},
            {name: 'direction', type: 'string', description: '"row" or "column", default is "column".'},
            {name: 'header', type: 'string', description: ''},
            {name: 'value', type: 'number',
                description: 'the selected option\'s index. If cancel the choose, this property will be set to null'},
            {name: 'onSelectChange', type: 'function', description: ''}
        ];

        this.state = {
            document: document
        };
    }

    render() {
        const {document} = this.state;

        return (
            <DemoTemplate title={'RADIO GROUP DEMO'} document={document}>
                <RadioGroup header={'row'} direction={'row'} buttons={['0', '1', '2', '3']} value={1} />
                <RadioGroup header={'column'} buttons={['0', '1', '2', '3']} value={2} />
            </DemoTemplate>
        );
    }
}