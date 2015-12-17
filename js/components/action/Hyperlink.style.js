import {
    StyleSheet
} from 'react-native';

import {GlobalColors} from '../../global.style.js';

export var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    link: {
        color: GlobalColors.blue,
        textDecorationColor: GlobalColors.blue,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline'
    },

    disableLink: {
        color: GlobalColors.gray,
        textDecorationColor: GlobalColors.gray,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline'
    }
});