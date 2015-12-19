import {
    StyleSheet
} from 'react-native';

import {GlobalColors, GlobalFontSize} from '../../global.style'

export var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },

    left: {
        width: 1,
        height: 12,
        backgroundColor: GlobalColors.black,
        transform: [
            {rotate: '45deg'}
        ]
    },

    right: {
        width: 1,
        height: 12,
        backgroundColor: GlobalColors.black,
        marginLeft: -1,
        transform: [
            {rotate: '-45deg'}
        ]
    }
});