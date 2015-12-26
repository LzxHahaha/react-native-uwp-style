import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from './../TestPage.style.js';

import DemoTemplate from '../DemoTemplate';

import NavPaneTitle from '../../components/navigator/NavPaneTitle';
import Hyperlink from '../../components/action/Hyperlink';
import Field from '../../components/Field';

export default class HyperlinkPage extends Component {
    constructor(props) {
        super(props);

        let document = [
            {name: 'enable', type: 'bool', description: ''},
            {name: 'color', type: 'string', description: 'Text\'s color.'},
            {name: 'onPress', type: 'function', description: ''},
            {name: 'text', type: 'string', description: ''}
        ];

        this.state = {
            document: document,
            defaultCount: 0,
            customEnable: false,
            customCount: 0
        };
    }

    render() {
        const {defaultCount, customEnable, customCount} = this.state;

        return (
            <DemoTemplate title={'HYPERLINK DEMO'} document={this.state.document}>

                <Field header={'Default Enable'} style={styles.field}>
                    <Hyperlink text={'Click me!'}
                               enable={true}
                               onPress={() => {this.setState({defaultCount: defaultCount + 1});}}
                    />
                </Field>
                <Text style={styles.text}>You click the this hyperlink {defaultCount} times.</Text>

                <Field header={'Default Disable'} style={styles.field}>
                    <Hyperlink text={'You can\'t click me.'}
                               enable={false}
                    />
                </Field>
                <Text style={styles.text}>This hyperlink is disable.</Text>


                <Field header={'Custom Enable'} style={styles.field}>
                    <Hyperlink text={'Click to ' + (!customEnable ? 'enable' : 'disable') + ' next hyperlink!'}
                               enable={true}
                               onPress={() => {this.setState({customEnable: !customEnable});}}
                               color={'red'}
                    />
                </Field>

                <Text style={styles.text}>Next hyperlink is {customEnable ? 'enable' : 'disable'}.</Text>

                <Field header={'Custom Disable'} style={styles.field}>
                    <Hyperlink text={'You ' + (customEnable ? 'can' : 'can\'t') + ' click me.'}
                               enable={customEnable}
                               color={customEnable ? 'red' : 'darkRed'}
                               onPress={() => {this.setState({customCount: customCount + 1});}}
                    />
                </Field>
                <Text style={styles.text}>You click this hyperlink {customCount} times.</Text>

            </DemoTemplate>
        );
    }
}
