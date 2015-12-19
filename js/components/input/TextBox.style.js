import {
    StyleSheet
} from 'react-native';

import {UWPGlobalColors, UWPGlobalFontSize} from '../../UWPGlobal.style.js'

export var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        color: UWPGlobalColors.black,
        fontSize: UWPGlobalFontSize.options
    },

    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: UWPGlobalColors.gray,
        paddingHorizontal: 2
    },

    boxIcon: {
        width: 14,
        height: 14,
        marginHorizontal: 5,
        resizeMode: 'contain'
    },

    textInput: {
        flex: 1,
        paddingVertical: 1,
        paddingHorizontal: 2,
        marginHorizontal: 2
    }
});