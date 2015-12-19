import {
    StyleSheet
} from 'react-native';

import {UWPGlobalColors} from '../../UWPGlobal.style.js';

export var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: UWPGlobalColors.gray
    },

    text: {
        marginHorizontal: 25,
        marginVertical: 5,
        alignSelf: 'center'
    },

    content: {
        justifyContent: 'center',
    }
});