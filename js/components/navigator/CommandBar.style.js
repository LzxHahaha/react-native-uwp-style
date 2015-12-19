import {
    StyleSheet
} from 'react-native';

import {GlobalFontSize} from '../../global.style';

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
        justifyContent: 'flex-end',
        backgroundColor: 'lightGray'
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
        paddingTop: -10
    },

    icon: {
        width: 20,
        resizeMode: 'contain'
    },

    iconText: {
        color: 'black',
        fontSize: GlobalFontSize.Caption,
        textAlign: 'center',
        marginTop: -15
    },

    moreButton: {
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center'
    },

    moreText: {
        color: 'black',
        fontSize: GlobalFontSize.Base,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -20
    },

    subList: {
        backgroundColor: '#f1f1f1',
        flex: 1
    },

    rowItem: {
        paddingVertical: 15,
        paddingHorizontal: 10
    },

    rowItemText: {
        color: 'black'
    }
});