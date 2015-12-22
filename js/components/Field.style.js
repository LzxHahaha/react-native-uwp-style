import {
    StyleSheet
} from 'react-native';

import Theme from '../config/theme';

export var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    header: {
        marginRight: 10,
        color: Theme.colors.foreground,
        fontSize: Theme.fontSize.Base
    },

    content: {
    }
});