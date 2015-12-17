import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from './../TestPage.style.js';

import DemoTemplate from '../DemoTemplate';

import Slider from '../../components/action/Slider';
import Field from '../../components/Field';

export default class ButtonPage extends Component {
    constructor(props) {
        super(props);

        let document = [
            {name: 'color', type: 'string', description: 'Active part and the slider\'s color.'},
            {name: 'max', type: 'number', description: ''},
            {name: 'onMove', type: 'function', description: 'You should update the value in the onMove function.'},
            {name: 'scrollBar color', type: 'string', description: 'The other side\'s color.'},
            {name: 'value', type: 'number', description: ''}
        ];
        let note = 'This component should be put at a single line, or will have some bug when move the slider.';

        this.state = {
            document: document,
            note: note,
            value: 30
        };
    }

    render() {
        return (
            <DemoTemplate title={'SLIDER DEMO'} document={this.state.document} note={this.state.note}>
                <Slider style={styles.slider} />
                <Slider style={styles.slider} value={50} header={'Control header'} enable={false} />
                <Slider style={styles.slider} value={this.state.value} header={'Value: ' + this.state.value}
                        onMove={(value) => {this.setState({value: value})}} />
            </DemoTemplate>
        );
    }
}
