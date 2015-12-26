import {
    StyleSheet
} from 'react-native';

import Theme from '../../config/theme';

export var styles = StyleSheet.create({
    container: {
    },

    header: {
        color: Theme.colors.foreground,
        fontSize: Theme.fontSize.Base,
        marginBottom: 5
    },

    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    switcher: {
        width: 40,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: 'center',
        marginRight: 6
    },

    circle: {
        width: 12,
        height: 12,
        borderRadius: 6
    },

    on: {
        backgroundColor: 'white'
    },

    off: {
        backgroundColor: Theme.colors.foreground
    },

    circleDisable: {
        backgroundColor: Theme.colors.foregroundDisable
    },

    text: {
        color: Theme.colors.foreground,
        fontSize: Theme.fontSize.Base
    },

    textDisable: {
        color: Theme.colors.foregroundDisable,
        fontSize: Theme.fontSize.Base
    }
});