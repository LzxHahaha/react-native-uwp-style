import React, {
    Component,
    PropTypes,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import TextBox from './TextBox';

propTypes = {};

defaultProps = {};

export default class PasswordBox extends Component {
    render() {
        return (
            <TextBox secureTextEntry={true} {...this.props} />
        );
    }
}
