import React, {
    Component,
    View,
    Text,
    ListView,
    TouchableOpacity
} from 'react-native';

import {styles} from './PagesIndex.style.js';
import {GlobalStyles} from '../global.style';

import Router from '../Router';
import NavPaneTitle from '../components/NavPaneTitle';
import Button from '../components/Button';

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
            <View style={GlobalStyles.line} />
        );
    }

    renderFooter() {
        return (
            <View>
                <Button text={'Go Back'} style={styles.button}
                        onPress={() => {
                            Router.goBack();
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