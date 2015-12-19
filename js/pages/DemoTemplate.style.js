import {
    StyleSheet
} from 'react-native';

import {UWPGlobalColors, UWPGlobalFontSize} from '../UWPGlobal.style.js';

export var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    scrollContainer: {
        padding: 10,
        paddingTop: 0
    },

    title: {
        fontSize: UWPGlobalFontSize.Subtitle,
        fontWeight: 'bold',
        marginVertical: 5,
        marginTop: 15
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
        fontSize: UWPGlobalFontSize.Caption
    },

    propDescription: {
        marginTop: 10
    },

    line: {
        height: 1,
        backgroundColor: 'darkGray'
    },

    backButton: {
        marginVertical: 20,
        paddingVertical: 5
    }
});