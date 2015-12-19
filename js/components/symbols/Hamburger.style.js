import {
    StyleSheet
} from 'react-native';

import {UWPGlobalColors} from '../../UWPGlobal.style.js';

export var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    line: {
        width: 20,
        height: 3,
        backgroundColor: UWPGlobalColors.black,
        marginVertical: 2
    }
});