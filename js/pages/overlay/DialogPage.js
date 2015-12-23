import React, {
    Component,
    View,
    Text
} from 'react-native';

import {styles} from '../TestPage.style';
import DemoTemplate from '../DemoTemplate';
import Button from '../../components/action/Button';
import Dialog from '../../components/overlays/UWPDialog';

export default class DialogPage extends Component {
    constructor(props) {
        super(props);

        let document = [];

        this.state = {
            document: document
        };
    }

    render() {
        return (
            <DemoTemplate document={this.state.document}>
                <Button text={'Click Me!'} onPress={() => {Dialog.show('Title', 'This is a dialog.')}} />
            </DemoTemplate>
        );
    }
}