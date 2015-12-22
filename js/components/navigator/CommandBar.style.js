import {
    StyleSheet
} from 'react-native';

import Theme from '../../config/theme';

export var styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    },

    bar: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },

    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 65,
        height: 65
    },

    iconView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        paddingTop: -15
    },

    icon: {
        width: 20,
        resizeMode: 'contain'
    },

    iconText: {
        color: Theme.colors.foreground,
        fontSize: Theme.fontSize.Caption,
        textAlign: 'center',
        marginTop: -15
    },

    moreButton: {
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center'
    },

    subList: {
        backgroundColor: Theme.colors.backgroundLight,
        flex: 1
    },

    rowItem: {
        paddingVertical: 15,
        paddingHorizontal: 10
    },

    rowItemText: {
        color: Theme.colors.foreground
    }
});