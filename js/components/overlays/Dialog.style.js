import {
    StyleSheet,
    Dimensions
} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;

import Theme from '../../config/theme';

export const maxHeight = 180;

export var styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: SCREEN_WIDTH / 2 - 183,
        height: maxHeight,
        width: 366,
        justifyContent: 'space-between',
        padding: 25,
        backgroundColor: Theme.colors.backgroundBasic,
        borderColor: Theme.colors.highlight,
        borderWidth: 1
    },

    titleText: {
        fontSize: Theme.fontSize.Subtitle,
        color: Theme.colors.foreground
    },

    contentText: {
        fontSize: Theme.fontSize.Base,
        color: Theme.colors.foreground
    },

    buttonView: {
        flexDirection: 'row',
        width: 315,
        height: 30,
        justifyContent: 'space-between'
    },

    button: {
        width: 155,
        height: 30
    }
});