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
            {name: 'hideIconButton', type: 'bool', description: 'Hide the clear button when lose focus.'},
            {name: 'header', type: 'string', description: ''},
            {name: 'highlightColor', type: 'string', description: ''},
            {name: 'icon', type: 'Image.source', description: ''},
            {name: 'onBlur', type: 'function', description: ''},
            {name: 'onChangeText', type: 'function', description: ''},
            {name: 'onFocus', type: 'function', description: ''},
            {name: 'onIconPress', type: 'function', description: ''}
        ];

        let note = 'If you put it in a ListView, you should set the "hideIconButton" property to false.';

        this.state = {
            document: document,
            note: note,
            test: ''
        };
    }

    render() {
        return (
            <DemoTemplate title={'TEXT BOX DEMO'} document={this.state.document} note={this.state.note}>
                <TextBox style={styles.textbox} placeholder={'text'} hideIconButton={false} />
                <TextBox style={styles.textbox} placeholder={'text'} header={'header'} hideIconButton={false} />
                <TextBox style={styles.textbox} placeholder={'text'} header={'uneditable'}
                         editable={false} value='lala' hideIconButton={false} />
                <TextBox style={styles.textbox} placeholder={'text'} header={'AutoFocus'}
                         autoFocus={true} hideIconButton={false}
                         onChangeText={(text) => {
                            this.setState({test: text})
                         }} />

                <Text>  AutoFocus Box's Text: {this.state.test}</Text>
            </DemoTemplate>
        )
    }

}