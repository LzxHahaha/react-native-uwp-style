import {
    StyleSheet
} from 'react-native';

import {GlobalColors, GlobalFontSize} from '../global.style';

export var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    header: {
        marginRight: 10,
        color: GlobalColors.black,
        fontSize: GlobalFontSize.Base
    },

    content: {
        //flex: 1
    }
});