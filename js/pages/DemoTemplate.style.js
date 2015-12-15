import {
    StyleSheet
} from 'react-native';

import {GlobalColors, GlobalFontSize} from '../global.style';

export var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    scrollContainer: {
        padding: 10
    },

    title: {
        fontSize: GlobalFontSize.Subtitle,
        fontWeight: 'bold',
        marginVertical: 5
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
        color: 'black',
        fontWeight: 'bold'
    },

    propType: {
        fontSize: GlobalFontSize.Caption
    },

    propDescription: {
        marginTop: 10
    },

    line: {
        height: 1,
        backgroundColor: 'darkGray'
    },

    backButton: {
        marginVertical: 20
    }
});