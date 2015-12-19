import {
    StyleSheet
} from 'react-native';

import {GlobalColors} from '../../global.style';

export var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    line: {
        width: 20,
        height: 3,
        backgroundColor: GlobalColors.black,
        marginVertical: 2
    }
});