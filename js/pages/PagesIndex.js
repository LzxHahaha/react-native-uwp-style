import React, {
    Component,
    View,
    Text,
    ListView,
    TouchableOpacity
} from 'react-native';

import {styles} from './PagesIndex.style.js';
import {UWPGlobalStyles} from '../UWPGlobal.style.js';

import Pages from '../config/pages';

import Router from '../components/navigator/Router';
import NavPaneTitle from '../components/navigator/NavPaneTitle';
import Button from '../components/action/Button';

export default class PagesIndex extends Component {
    constructor(props) {
        super(props);

        let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.pages)
        };
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <Text>Components</Text>
            </View>
        );
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity onPress={() => {
                Router.goto(rowData.page);
            }} >
                <Text style={styles.rowTitle}>{'<' + rowData.text + '>'}</Text>
            </TouchableOpacity>
        )
    }

    renderSeparator() {
        return (
            <View style={UWPGlobalStyles.line} />
        );
    }

    renderFooter() {
        return (
            <View>
                <Button text={'Go Back'} style={styles.button}
                        onPress={() => {
                            Router.goto(Pages.Home);
                        }} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <NavPaneTitle title={this.props.title} />
                <ListView
                    dataSource={this.state.dataSource}
                    renderHeader={this.renderHeader.bind(this)}
                    renderRow={this.renderRow.bind(this)}
                    renderSeparator={this.renderSeparator.bind(this)}
                    renderFooter={this.renderFooter.bind(this)}
                />
            </View>
        );
    }
}