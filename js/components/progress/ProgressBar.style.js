import {
    StyleSheet
} from 'react-native';

import Theme from '../../config/theme';

export var styles = StyleSheet.create({
    progress: {
        flexDirection: 'row',
        height: 4
    },

    header: {
        color: Theme.colors.foreground,
        fontSize: Theme.fontSize.Base,
        marginBottom: 5
    },

    active: {
        height: 4
    }
});