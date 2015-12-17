import {
    StyleSheet
} from 'react-native';

import {GlobalColors, GlobalFontSize} from '../../global.style';

export var styles = StyleSheet.create({
    container: {
    },

    header: {
        color: 'black',
        fontSize: GlobalFontSize.Base
    },

    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    switcher: {
        width: 40,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: 'center',
        marginRight: 6
    },

    circle: {
        width: 12,
        height: 12,
        borderRadius: 6
    },

    on: {
        backgroundColor: 'white'
    },

    off: {
        backgroundColor: 'black'
    },

    circleDisable: {
        backgroundColor: 'gray'
    },

    text: {
        color: 'black',
        fontSize: GlobalFontSize.Base
    },

    textDisable: {
        color: 'gray',
        fontSize: GlobalFontSize.Base
    }
});