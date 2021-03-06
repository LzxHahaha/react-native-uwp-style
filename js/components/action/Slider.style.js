import {
    StyleSheet
} from 'react-native';

import Theme from '../../config/theme';

export var sliderWidth = 10;

export var styles = StyleSheet.create({
    container: {
    },

    sliderView: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    header: {
        color: Theme.colors.foreground,
        fontSize: Theme.fontSize.Base,
        marginBottom: 5
    },

    slider: {
        top: 0,
        bottom: 0,
        height: 30,
        width: sliderWidth,
        borderRadius: 6
    },

    scrollBar: {
        height: 4
    },

    scrollBarBottom: {
        position: 'absolute',
        top: 32,
        height: 4,
        flex: 1
    }
});