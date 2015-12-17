import {
    StyleSheet
} from 'react-native';

import {GlobalFontSize} from '../../global.style';

export var styles = StyleSheet.create({
    progress: {
        flexDirection: 'row',
        height: 8
    },

    header: {
        color: 'black',
        fontSize: GlobalFontSize.Base
    },

    active: {
        height: 8
    }
});