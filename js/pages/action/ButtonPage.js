import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from './../TestPage.style.js';

import NavPaneTitle from '../../components/NavPaneTitle';
import Button from '../../components/Button';
import Field from '../../components/Field';

export default class ButtonPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {navigator} = this.props;

        return (
            <View style={styles.container}>
                <NavPaneTitle title={'Button DEMO'} />

                <Button text={'Go Back'} onPress={() => {
                    navigator.pop();
                }} />

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

                <Button text="Loooooooong Button"
                        style={{margin: 10}}
                        onPress={() => {}} />

                <Button text="Button"
                        style={{alignSelf: 'center'}}
                        onPress={() => {}} />
            </View>
        )
    }

}