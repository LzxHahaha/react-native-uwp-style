import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from './../TestPage.style.js';

import DemoTemplate from '../../pages/DemoTemplate';

import TextBox from '../../components/input/TextBox';

export default class ButtonPage extends Component {
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
            document: document,
            note: note,
            test: ''
        };
    }

    render() {
        return (
            <DemoTemplate title={'TEXT BOX DEMO'} document={this.state.document} note={this.state.note}>
                <TextBox style={styles.textbox} placeholder={'text'} hideClear={false} />
                <TextBox style={styles.textbox} placeholder={'text'} header={'header'} hideClear={false} />
                <TextBox style={styles.textbox} placeholder={'text'} header={'uneditable'}
                         editable={false} value='lala' hideClear={false} />

                <TextBox style={styles.textbox} placeholder={'text'} header={'AutoFocus'}
                         autoFocus={true} hideClear={false}
                         onChangeText={(text) => {
                            this.setState({test: text})
                         }} />

                <Text>  AutoFocus Box's Text: {this.state.test}</Text>
            </DemoTemplate>
        )
    }

}