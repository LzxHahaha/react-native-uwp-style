import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from '../TestPage.style';

import DemoTemplate from '../DemoTemplate';
import PasswordBox from '../../components/input/PasswordBox';

export default class PasswordBoxPage extends Component {
    constructor(props) {
        super(props);

        let document = [
            {name: 'autoFocus', type: 'bool', description: ''},
            {name: 'editable', type: 'bool', description: ''},
            {name: 'hideClear', type: 'bool', description: 'Hide the clear button when lose focus.'},
            {name: 'header', type: 'string', description: ''},
            {name: 'highlightColor', type: 'string', description: ''},
            {name: 'onBlur', type: 'function', description: ''},
            {name: 'onChangeText', type: 'function', description: ''},
            {name: 'onFocus', type: 'function', description: ''}
        ];

        let note = 'If you put it in a ListView, you should set the "hideClear" property to false.';

        this.state = {
            document: document
        };
    }

    render() {
        return (
            <DemoTemplate title={'PASSWORD BOX DEMO'} document={this.state.document} note={this.state.note}>
                <PasswordBox style={styles.textbox} placeholder={'text'} hideClear={false} />
                <PasswordBox style={styles.textbox} placeholder={'text'} header={'header'} hideClear={false}/>
                <PasswordBox style={styles.textbox} placeholder={'text'} header={'uneditable'}
                             editable={false} value='lala' hideClear={false}/>
            </DemoTemplate>
        );
    }
}