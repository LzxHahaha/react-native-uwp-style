import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from './../TestPage.style.js';

import DemoTemplate from '../../pages/DemoTemplate';

import TextBox from '../../components/input/TextBox';
import PasswordBox from '../../components/input/PasswordBox';
import Close from '../../symbols/Close';

export default class ButtonPage extends Component {
    constructor(props) {
        super(props);

        let document = [
            {name: 'autoFocus', type: 'bool', description: ''},
            {name: 'editable', type: 'bool', description: ''},
            {name: 'hideClear', type: 'bool', description: 'Hide the clear button when lose focus or not'},
            {name: 'header', type: 'string', description: ''},
            {name: 'highlightColor', type: 'string', description: ''},
            {name: 'onBlur', type: 'function', description: ''},
            {name: 'onChangeText', type: 'function', description: ''},
            {name: 'onFocus', type: 'function', description: ''}
        ];

        this.state = {
            document: document,
            test: ''
        };
    }

    render() {
        return (
            <DemoTemplate title={'BUTTON DEMO'} document={this.state.document}>
                <TextBox style={styles.textbox} placeholder={'text'} />
                <TextBox style={styles.textbox} placeholder={'text'} header={'header'} />
                <TextBox style={styles.textbox} placeholder={'text'} header={'uneditable'}
                         editable={false} value='lala' />

                <TextBox style={styles.textbox} placeholder={'text'} header={'AutoFocus'}
                         autoFocus={false}
                         onChangeText={(text) => {
                            this.setState({test: text})
                         }} />

                <Text>  AutoFocus Box's Text: {this.state.test}</Text>
            </DemoTemplate>
        )
    }

}