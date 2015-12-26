import {
    StyleSheet
} from 'react-native';

export const colors = {
    pageBackground: 'white',

    backgroundBasic: '#E6E6E6',
    backgroundLight: '#F1F1F1',

    border: '#9A9A9A',

    foreground: 'black',
    foregroundDisable: '#999',

    buttonBackground: '#CDCDCD',
    buttonPress: '#8B8B8B',

    highlight: '#0078D6',
    highlightPress: '#0063B1',
    select: '#92C1E6'
};

export const styles = StyleSheet.create({
    symbol: {
        height: 10,
        width: 10,
        resizeMode: 'contain'
    },

    line: {
        height: 1,
        backgroundColor: colors.backgroundLight,
        marginHorizontal: 10
    }
});

export const fontSize = {
    Header: 46,
    Subheader: 34,
    Title: 24,
    Subtitle: 20,
    Base: 15,
    Caption: 12
};

export const isDarkStyle = false;
