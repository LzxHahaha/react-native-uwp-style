import {
    StyleSheet
} from 'react-native';

import {GlobalFontSize} from '../global.style';

export var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        justifyContent: 'flex-end',
        paddingTop: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },

    rowTitle: {
        color: 'black',
        fontSize: GlobalFontSize.Base,
        margin: 10
    },

    button: {
        margin: 10,
        paddingVertical: 5
    }
});