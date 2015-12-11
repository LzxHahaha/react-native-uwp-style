import React, {
    Component,
    View,
    Text,
    TouchableOpacity,
    ListView,
    Navigator
} from 'react-native';

import {styles} from './index.style';

import * as page from './config/pages';

export default class UWP extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Navigator
                initialRoute={{ name: 'home', component: Home }}
                configureScene={() => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    if (route.component) {
                        return <Component {...route.params} navigator={navigator} />
                    }
                }}
            />
        );
    }
}

class Home extends Component {
    constructor(props) {
        super(props);

        let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let buttons = [
            {text: 'Button Demo', page: page.Button},
            {text: 'Hyperlink Demo', page: page.Hyperlink},
            {text: 'TextBox Demo', page: page.TextBox}
        ];

        this.state = {
            buttons: dataSource.cloneWithRows(buttons)
        };
    }

    onPress(page) {
        const { navigator } = this.props;

        navigator.push(page);
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity onPress={() => {
                this.onPress(rowData.page)
            }}>
                <Text>{rowData.text}</Text>
            </TouchableOpacity>
        )
    }

    render() {

        return (
            <View>
                <ListView
                    dataSource={this.state.buttons}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}
