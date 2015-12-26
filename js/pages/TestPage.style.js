import {
    StyleSheet
} from 'react-native';

import Theme from '../config/theme';

export var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text: {
        color: Theme.colors.foreground
    },

    field: {
        marginVertical: 10
    },

    textbox: {
        margin: 10
    },

    slider: {
        margin: 10
    }
});