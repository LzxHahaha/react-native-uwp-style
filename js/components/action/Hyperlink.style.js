import {
    StyleSheet
} from 'react-native';

import {UWPGlobalColors} from '../../UWPGlobal.style.js';

export var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    link: {
        color: UWPGlobalColors.blue,
        textDecorationColor: UWPGlobalColors.blue,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline'
    },

    disableLink: {
        color: UWPGlobalColors.gray,
        textDecorationColor: UWPGlobalColors.gray,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline'
    }
});