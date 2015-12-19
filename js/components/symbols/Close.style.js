import {
    StyleSheet
} from 'react-native';

import {UWPGlobalColors, UWPGlobalFontSize} from '../../UWPGlobal.style.js'

export var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },

    left: {
        width: 1,
        height: 12,
        backgroundColor: UWPGlobalColors.black,
        transform: [
            {rotate: '45deg'}
        ]
    },

    right: {
        width: 1,
        height: 12,
        backgroundColor: UWPGlobalColors.black,
        marginLeft: -1,
        transform: [
            {rotate: '-45deg'}
        ]
    }
});