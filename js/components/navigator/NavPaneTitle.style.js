import {
    StyleSheet
} from 'react-native';

import Theme from '../../config/theme';

export var styles = StyleSheet.create({
    container: {
    },
    title: {
        height: 50,
        marginLeft: 50,
        paddingLeft: 10,
        justifyContent: 'center',
        backgroundColor: Theme.colors.backgroundBasic
    },

    titleText: {
        fontSize: Theme.fontSize.Subtitle
    }
});