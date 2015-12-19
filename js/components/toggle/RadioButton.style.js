import {
    StyleSheet
} from 'react-native';

import {UWPGlobalColors, UWPGlobalFontSize} from '../../UWPGlobal.style.js';

export var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    box: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        marginRight: 5
    },

    boxActive: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: UWPGlobalColors.blue,
        borderRadius: 10,
        borderWidth: 2,
        marginRight: 5
    },

    circle: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
        borderRadius: 6
    },

    text: {
        color: 'black',
        fontSize: UWPGlobalFontSize.Base
    },

    textDisable: {
        fontSize: UWPGlobalFontSize.Base
    }
});