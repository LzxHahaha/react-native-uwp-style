import {
    StyleSheet
} from 'react-native';

import {SCREEN_HEIGHT, UWPGlobalFontSize, UWPGlobalColors} from '../../UWPGlobal.style.js';

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
        height: SCREEN_HEIGHT-50,
        backgroundColor: UWPGlobalColors.dark
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
        fontSize: UWPGlobalFontSize.Base,
        marginLeft: 10,
        color: 'white'
    },
    scene: {
        marginTop: 50
    }
});