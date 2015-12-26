import {
    StyleSheet
} from 'react-native';

import Theme from '../config/theme';

export var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.pageBackground
    },

    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon: {
        margin: 30,
        resizeMode: 'contain'
    },

    text: {
        color: Theme.colors.foreground,
        fontSize: Theme.fontSize.Base
    }
});