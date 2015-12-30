import React, {
    Component,
    PropTypes,
    Text,
    View
} from 'react-native';

import {styles} from './RadioGroup.style';
import Theme from '../../config/theme';

import RadioButton from './RadioButton';

propTypes = {
    color: PropTypes.string,
    direction: PropTypes.string,
    header: PropTypes.string,
    value: PropTypes.number,
    onSelectChange: PropTypes.func
};

defaultProps = {
    color: Theme.colors.highlight,
    direction: 'column',
    value: 0
};

export default class RadioGroup extends Component {
    constructor(props) {
        super(props);

        const {value} = this.props;

        this.state = {
            value: value
        };
    }

    render() {
        const {direction, header, style, buttons, color} = this.props;
        const {value} = this.state;

        return (
            <View style={[styles.container, style]}>
                {
                    header &&
                    <Text style={styles.header}>{header}</Text>
                }
                <View style={[styles.radios, {flexDirection: direction}]}>
                    {
                        buttons.map((el, index) => {
                            return (
                                <RadioButton key={index} ref={'Radio' + index} text={el} isSelected={index === value}
                                             value={index} style={styles.radio} color={color}
                                             onSelectChange={(i) => {
                                if (i !== value) {
                                    if (value !== null) {
                                        this.refs['Radio' + value].cancel();
                                    }
                                    this.setState({value: i});
                                    this.props.onSelectChange && this.onSelectChange();
                                }
                                else {
                                    this.setState({value: null});
                                }
                             }}
                                />
                            );
                        })
                    }
                </View>
            </View>
        );
    }
}

RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
