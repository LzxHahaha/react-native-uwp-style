import {
    StyleSheet
} from 'react-native';

import {UWPGlobalFontSize} from '../UWPGlobal.style.js';

export var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon: {
        margin: 30,
        resizeMode: 'contain'
    },

    text: {
        color: 'black',
        fontSize: UWPGlobalFontSize.Base
    }
});