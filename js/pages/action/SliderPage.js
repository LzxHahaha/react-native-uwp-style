import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from './../TestPage.style.js';

import DemoTemplate from '../DemoTemplate';

import Slider from '../../components/actions/Slider';

export default class ButtonPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <DemoTemplate title={'SLIDER DEMO'} document={[]}>
                <Slider style={styles.slider} />
            </DemoTemplate>
        );
    }
}
