import {
    StyleSheet
} from 'react-native';

import Theme from '../../config/theme';

export var styles = StyleSheet.create({
    container: {
    },

    header: {
        color: Theme.colors.foreground,
        fontSize: Theme.fontSize.Base
    },

    radios: {
        flexWrap: 'wrap'
    },

    radio: {
        margin: 5
    }
});