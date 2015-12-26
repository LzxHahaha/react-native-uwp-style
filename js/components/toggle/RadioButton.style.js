import {
    StyleSheet
} from 'react-native';

//import {UWPGlobalColors} from '../../UWPGlobal.style.js';
import Theme from '../../config/theme';

export var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    box: {
        width: 20,
        height: 20,
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        marginRight: 5
    },

    boxActive: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderColor: Theme.colors.highlight,
        borderRadius: 10,
        borderWidth: 2,
        marginRight: 5
    },

    circle: {
        width: 10,
        height: 10,
        backgroundColor: Theme.colors.foreground,
        borderRadius: 6
    },

    text: {
        color: Theme.colors.foreground,
        fontSize: Theme.fontSize.Base
    },

    textDisable: {
        color: Theme.colors.foregroundDisable,
        fontSize: Theme.fontSize.Base
    }
});