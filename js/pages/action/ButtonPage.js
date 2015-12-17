import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from './../TestPage.style.js';

import DemoTemplate from '../DemoTemplate';
import Button from '../../components/action/Button';
import Field from '../../components/Field';

export default class ButtonPage extends Component {
    constructor(props) {
        super(props);

        let document = [
            {name: 'backgroundColor', type: 'string', description: ''},
            {name: 'children', type: 'node',
                description: 'It will only display the text property or children of Button component'},
            {name: 'color', type: 'string', description: 'Text\'s color'},
            {name: 'enable', type: 'bool', description: ''},
            {name: 'highlightColor', type: 'string', description: ''},
            {name: 'onPress', type: 'function', description: ''},
            {name: 'text', type: 'string', description: ''}
        ];

        this.state = {
            document: document
        };
    }

    render() {
        return (
            <DemoTemplate title={'BUTTON DEMO'} document={this.state.document}>

                <Field header={'Enable Button'} style={styles.field}>
                    <Button text={'Button'} onPress={() => {}} />
                </Field>

                <Field header={'Disable Button'} style={styles.field}>
                    <Button text={'Button'} enable={false} onPress={() => {}} />
                </Field>

                <Field header={'Enable Custom Button'} style={styles.field}>
                    <Button text={'Button'} enable={true}
                            backgroundColor={'red'}
                            highlightColor={'green'}
                            color={'white'}
                            onPress={() => {}}
                            style={{width: 150}}
                    />
                </Field>

                <Field header={'Disable Custom Button'} style={styles.field}>
                    <Button text={'Button'} enable={false}
                            backgroundColor={'darkred'}
                            color={'white'}
                            onPress={() => {}}
                            style={{width: 150}}
                    />
                </Field>
            </DemoTemplate>
        )
    }

}