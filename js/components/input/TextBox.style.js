import {
    StyleSheet
} from 'react-native';

import Theme from '../../config/theme';

export var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        color: Theme.colors.foreground,
        fontSize: Theme.fontSize.Caption
    },

    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Theme.colors.border,
        paddingHorizontal: 2
    },

    boxIcon: {
        width: 14,
        height: 14,
        marginHorizontal: 5,
        resizeMode: 'contain'
    },

    textInput: {
        flex: 1,
        paddingVertical: 1,
        paddingHorizontal: 2,
        marginHorizontal: 2,
        color: Theme.colors.foreground
    }
});