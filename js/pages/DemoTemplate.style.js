import {
    StyleSheet
} from 'react-native';

import Theme from '../config/theme';

export var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.pageBackground
    },

    scrollContainer: {
        padding: 10,
        paddingTop: 0
    },

    title: {
        fontSize: Theme.fontSize.Subtitle,
        fontWeight: 'bold',
        marginVertical: 5,
        marginTop: 15,
        color: Theme.colors.foreground
    },

    well: {
        marginVertical: 5,
        padding: 10,
        borderColor: 'lightGray',
        borderWidth: 1
    },

    row: {
        marginTop: -1,
        padding: 10,
        borderColor: 'lightGray',
        borderWidth: 1
    },

    propName: {
        color: Theme.colors.foreground,
        fontWeight: 'bold'
    },

    propType: {
        color: Theme.colors.foreground,
        fontSize: Theme.fontSize.Caption
    },

    propDescription: {
        marginTop: 10,
        color: Theme.colors.foreground
    },

    line: {
        height: 1,
        backgroundColor: 'darkGray'
    },

    note: {
        color: Theme.colors.foreground
    },

    backButton: {
        marginVertical: 20,
        paddingVertical: 5
    }
});