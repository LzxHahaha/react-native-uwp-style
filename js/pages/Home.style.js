import {
    StyleSheet
} from 'react-native';

import {GlobalFontSize} from '../global.style';

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
        fontSize: GlobalFontSize.Base
    }
});