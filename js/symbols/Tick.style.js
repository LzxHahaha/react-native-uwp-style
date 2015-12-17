import {
    StyleSheet
} from 'react-native';

export var styles = StyleSheet.create({
    tick: {
        height: 15,
        width: 7,
        marginTop: -4,
        borderColor: 'white',
        borderRightWidth: 1.5,
        borderBottomWidth: 1.5,
        transform: [
            {rotate: '45deg'}
        ]
    }
});