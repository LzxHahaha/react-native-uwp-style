import {
    StyleSheet
} from 'react-native';

import {UWPGlobalFontSize} from '../../UWPGlobal.style.js';

export var styles = StyleSheet.create({
    progress: {
        flexDirection: 'row',
        height: 4
    },

    header: {
        color: 'black',
        fontSize: UWPGlobalFontSize.Base,
        marginBottom: 5
    },

    active: {
        height: 4
    }
});