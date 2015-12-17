import {
    StyleSheet
} from 'react-native';

import {GlobalColors} from '../../global.style.js';

export var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: GlobalColors.gray
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