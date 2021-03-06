import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const UWPGlobalColors = {
    black: 'black',
    white: 'white',

    dark: '#2b2b2b',

    blue: '#0078d7',
    darkBlue: '#0063B1',

    gray: '#c2c2c2',
    darkGray: '#555'
};

export const UWPGlobalFontSize = {
    Header: 46,
    Subheader: 34,
    Title: 24,
    Subtitle: 20,
    Base: 15,
    Caption: 12
};

export const UWPGlobalStyles = {
    symbol: {
        height: 10,
        width: 10,
        resizeMode: 'contain'
    },

    line: {
        height: 1,
        backgroundColor: 'lightgray',
        marginHorizontal: 10
    }
};
