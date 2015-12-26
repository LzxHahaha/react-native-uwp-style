import {
    StyleSheet
} from 'react-native';

import Theme from '../config/theme';

export var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.pageBackground
    },

    header: {
        justifyContent: 'flex-end',
        paddingTop: 15,
        borderBottomWidth: 1,
        borderColor: Theme.colors.border,
        marginHorizontal: 10
    },

    headerText: {
        color: Theme.colors.foreground,
        fontWeight: 'bold'
    },

    rowTitle: {
        color: Theme.colors.foreground,
        fontSize: Theme.fontSize.Base,
        margin: 10
    },

    button: {
        margin: 10,
        paddingVertical: 5
    }
});