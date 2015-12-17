import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from '../TestPage.style';

import DemoTemplate from '../DemoTemplate';
import CheckBox from '../../components/toggle/CheckBox';

export default class CheckBoxPage extends Component {
    constructor(props) {
        super(props);

        let document = [
            {name: 'color', type: 'string', description: ''},
            {name: 'enable', type: 'bool', description: ''},
            {name: 'isSelected', type: 'bool', description: ''},
            {name: 'text', type: 'string', description: ''},
            {name: 'onSelectChange', type: 'function', description: ''}
        ];

        this.state = {
            document: document,
            isSelected: true,
            text: 'Selected'
        };
    }

    render() {
        const {isSelected, text, document} = this.state;

        return (
            <DemoTemplate title={'CHECK BOX DEMO'} document={document}>
                <CheckBox style={styles.field} text={'Action Text'} />
                <CheckBox style={styles.field} text={'Disable'} enable={false} isSelected={true} />
                <CheckBox style={styles.field} text={'Disable'} enable={false} />
                <CheckBox style={styles.field} text={text} isSelected={isSelected}
                          onSelectChange={() => {
                            this.setState({
                                isSelected: !isSelected,
                                text: !isSelected ? 'Selected' : 'Unselected'
                            });
                          }}
                />
            </DemoTemplate>
        );
    }
}