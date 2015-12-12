import React, {
    Component,
    View,
    Text
} from 'react-native';

import TextBox from '../../components/TextBox';
import PasswordBox from '../../components/PasswordBox';
import Close from '../../symbols/Close';

import {styles} from './../TestPage.style.js';

export default class ButtonPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextBox style={styles.textbox} placeholder={'text'} />
                <TextBox style={styles.textbox} placeholder={'text'} header={'header'} />
                <TextBox style={styles.textbox} placeholder={'text'} header={'uneditable'}
                         editable={false} value='lala' />

                <PasswordBox style={styles.textbox} header={'Password'} placeholder={'Password'} />

                <TextBox style={styles.textbox} placeholder={'text'} header={'AutoFocus'}
                         autoFocus={false}
                         onChangeText={(text) => {
                            this.setState({test: text})
                         }} />

                <Text>  AutoFocus Box's Text: {this.state.test}</Text>
            </View>
        )
    }

}