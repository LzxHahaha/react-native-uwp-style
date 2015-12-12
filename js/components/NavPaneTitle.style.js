import {
    StyleSheet
} from 'react-native';

import {GlobalFontSize} from '../global.style';

export var styles = StyleSheet.create({
    container: {
    },
    title: {
        height: 50,
        marginLeft: 50,
        paddingLeft: 10,
        justifyContent: 'center',
        backgroundColor: 'lightgray'
    },

    titleText: {
        fontSize: GlobalFontSize.Subtitle
    }
});