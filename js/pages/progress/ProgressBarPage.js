import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from '../TestPage.style';

import DemoTemplate from '../DemoTemplate';
import ProgressBar from '../../components/progress/ProgressBar';
import Field from '../../components/Field';
import Button from '../../components/action/Button';

export default class ProgressPage extends Component {
    constructor(props) {
        super(props);

        let document = [
            {name: 'backgroundColor', type: 'string', description: ''},
            {name: 'color', type: 'string', description: ''},
            {name: 'max', type: 'number', description: ''},
            {name: 'onchangeValue', type: 'function', description: ''},
            {name: 'value', type: 'number', description: ''}
        ];

        this.state = {
            document: document,
            value: 30
        };
    }

    render() {
        const {value, document} = this.state;

        return (
            <DemoTemplate title={'PROGRESS BAR DEMO'} document={document}>
                <ProgressBar ref={'PROGRESS'} value={value} header={'Header'}
                             onChangeValue={(value) => {this.setState({value: value})}} />
                <Field header={'Current value: ' + value} style={styles.field} >
                    <Button text={'+30'} onPress={() => {
                            this.refs['PROGRESS'].changeValue(value + 30);
                        }}
                    />
                </Field>
            </DemoTemplate>
        );
    }
}