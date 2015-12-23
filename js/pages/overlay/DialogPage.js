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

        let note = 'If you want to use this component, put it add a root page, and call import the UWPDialog, ';
        note += 'then call the static function to show or hide the dialog.\n\n';
        note += 'Functions:\n';
        note += '\tshow(title, content, leftText=\'OK\', leftPress=()=>{}, rightText=\'Cancel\', rightPress=()=>{});\n';
        note += '\n\thide();';

        this.state = {
            note: note
        };
    }

    render() {
        return (
            <DemoTemplate title={'DIALOG PAGE'} note={this.state.note}>
                <Button text={'Click Me!'} onPress={() => {Dialog.show('Title', 'This is a dialog.')}} />
            </DemoTemplate>
        );
    }
}