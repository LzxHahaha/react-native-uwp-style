import React, {
    Component,
    PropTypes,
    Text,
    View,
    ListView
} from 'react-native';

import {styles} from './DemoTemplate.style.js';
import {UWPGlobalStyles} from '../UWPGlobal.style.js';

import Router from '../components/navigator/Router';

import NavPaneTitle from '../components/navigator/NavPaneTitle';
import Button from '../components/action/Button';

propTypes = {};

defaultProps = {};

export default class DemoTemplate extends Component {
    constructor(props) {
        super(props);

        let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.document)
        };
    }

    renderHeader() {
        const {children} = this.props;

        return (
            <View>
                <Text style={styles.title}>DEMO</Text>

                <View style={styles.well}>
                    {children}
                </View>

                <Text style={styles.title}>PROPS</Text>
            </View>
        );
    }

    renderRow(rowData) {
        const {name, type, description} = rowData;

        return (
            <View style={styles.row}>
                <Text style={styles.propName}>{name}</Text>
                <Text style={styles.propType}>{type}</Text>
                {description ? <Text style={styles.propDescription}>{description}</Text> : null}
            </View>
        );
    }

    renderSeparator() {
        return (
            <View style={styles.line} />
        )
    }

    renderFooter() {
        let notePanel = null;
        const {note} = this.props;
        if (note) {
            notePanel = (
                <View>
                    <Text style={styles.title}>NOTE</Text>

                    <View style={styles.well}>
                        <Text>{note}</Text>
                    </View>
                </View>
            );
        }

        return (
            <View>
                {notePanel}
                <Button text={'Go Back'}
                        style={styles.backButton}
                        onPress={() => {
                                Router.goBack();
                            }}
                />
            </View>
        );
    }

    render() {
        const {title} = this.props;

        return (
            <View style={styles.container}>
                <NavPaneTitle title={title} />

                <ListView
                    style={styles.container}
                    contentContainerStyle={styles.scrollContainer}
                    dataSource={this.state.dataSource}
                    renderHeader={this.renderHeader.bind(this)}
                    renderRow={this.renderRow.bind(this)}

                    renderFooter={this.renderFooter.bind(this)}
                />
            </View>
        );
    }
}

DemoTemplate.propTypes = propTypes;
DemoTemplate.defaultProps = defaultProps;
