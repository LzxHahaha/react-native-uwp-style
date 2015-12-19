import {
    StyleSheet
} from 'react-native';

import {UWPGlobalFontSize} from '../../UWPGlobal.style.js';

export var styles = StyleSheet.create({
    container: {
    },
    title: {
        height: 50,
        marginLeft: 50,
        paddingLeft: 10,
        justifyContent: 'center',
        backgroundColor: 'lightgray'
    },

    titleText: {
        fontSize: UWPGlobalFontSize.Subtitle
    }
});