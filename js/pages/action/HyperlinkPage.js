import React, {
    Component,
    View,
    Text
} from 'react-native';

import NavPaneTitle from '../../components/NavPaneTitle';
import Hyperlink from '../../components/Hyperlink';
import Field from '../../components/Field';

import {styles} from './../TestPage.style.js';

export default class HyperlinkPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultCount: 0,
            customEnable: false,
            customCount: 0
        };
    }

    render() {
        const {defaultCount, customEnable, customCount} = this.state;

        return (
            <View style={styles.container}>
                <NavPaneTitle title={this.props.title} />

                <Field header={'Default Enable'} style={styles.field}>
                    <Hyperlink text={'Click me!'}
                               enable={true}
                               onPress={() => {this.setState({defaultCount: defaultCount + 1});}}
                    />
                </Field>
                <Text>You click the this hyperlink {defaultCount} times.</Text>

                <Field header={'Default Disable'} style={styles.field}>
                    <Hyperlink text={'You can\'t click me.'}
                               enable={false}
                    />
                </Field>
                <Text>This hyperlink is disable.</Text>


                <Field header={'Custom Enable'} style={styles.field}>
                    <Hyperlink text={'Click to ' + (!customEnable ? 'enable' : 'disable') + ' next hyperlink!'}
                               enable={true}
                               onPress={() => {this.setState({customEnable: !customEnable});}}
                               color={'red'}
                    />
                </Field>y

                <Text>Next hyperlink is {customEnable ? 'enable' : 'disable'}.</Text>

                <Field header={'Custom Disable'} style={styles.field}>
                    <Hyperlink text={'You ' + (customEnable ? 'can' : 'can\'t') + ' click me.'}
                               enable={customEnable}
                               color={customEnable ? 'red' : 'darkRed'}
                               onPress={() => {this.setState({customCount: customCount + 1});}}
                    />
                </Field>
                <Text>You click this hyperlink {customCount} times.</Text>
            </View>
        );
    }
}
