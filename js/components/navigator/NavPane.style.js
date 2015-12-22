import {
    StyleSheet,
    Dimensions
} from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;

import Theme from '../../config/theme';

export var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    button: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    pane: {
        position: 'absolute',
        top: 50,
        bottom: 0,
        height: SCREEN_HEIGHT - 50,
        backgroundColor: Theme.colors.backgroundLight
    },

    paneList: {
        height: SCREEN_HEIGHT - 50
    },

    paneButton: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50
    },

    iconView: {
        width: 50,
        height: 50
    },

    paneButtonIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    paneButtonText: {
        fontSize: Theme.fontSize.Base,
        marginLeft: 10,
        color: Theme.colors.foreground
    },
    scene: {
        marginTop: 50
    }
});