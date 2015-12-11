import {
    StyleSheet
} from 'react-native';

import {GlobalColors, GlobalFontSize} from '../global.style'

export var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        color: GlobalColors.black,
        fontSize: GlobalFontSize.options
    },

    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: GlobalColors.gray,
        paddingHorizontal: 2
    },

    clear: {
        marginHorizontal: 10
    },

    textInput: {
        flex: 1,
        paddingVertical: 1,
        paddingHorizontal: 2,
        marginHorizontal: 2
    }
});