import {
    StyleSheet
} from 'react-native';

import {GlobalColors} from '../global.style';

export var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: GlobalColors.gray
    },

    text: {
        color: GlobalColors.black,
        marginHorizontal: 25,
        marginVertical: 5,
        alignSelf: 'center'
    }
});