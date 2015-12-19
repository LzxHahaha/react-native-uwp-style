import {
    StyleSheet
} from 'react-native';

import {GlobalFontSize} from '../../global.style';

export var styles = StyleSheet.create({
    progress: {
        flexDirection: 'row',
        height: 4
    },

    header: {
        color: 'black',
        fontSize: GlobalFontSize.Base,
        marginBottom: 5
    },

    active: {
        height: 4
    }
});