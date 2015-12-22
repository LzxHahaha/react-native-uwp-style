import {
    StyleSheet
} from 'react-native';

import Theme from '../../config/theme';

export var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    box: {
        width: 20,
        height: 20,
        borderColor: Theme.colors.foreground,
        borderWidth: 2,
        marginRight: 5
    },

    boxActive: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderWidth: 2,
        marginRight: 5
    },

    text: {
        color: 'black',
        fontSize: Theme.fontSize.Base
    }
});