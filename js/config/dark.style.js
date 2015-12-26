import {
    StyleSheet
} from 'react-native';

export const colors = {
    pageBackground: 'black',

    backgroundBasic: '#1E1F1E',
    backgroundLight: '#2B2B2B',

    border: '#838484',

    foreground: 'white',
    placeholder: '#888',
    foregroundDisable: '#555',

    buttonBackground: '#323232',
    buttonPress: '#787878',

    highlight: '#0078D6',
    highlightPress: '#0063B1',
    select: '#115992'
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

export const isDarkStyle = true;
