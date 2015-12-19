import {
    StyleSheet
} from 'react-native';

import {UWPGlobalColors, UWPGlobalFontSize} from '../UWPGlobal.style.js';

export var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    header: {
        marginRight: 10,
        color: UWPGlobalColors.black,
        fontSize: UWPGlobalFontSize.Base
    },

    content: {
        //flex: 1
    }
});