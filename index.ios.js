/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component, PropTypes } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TextInput,
    Image,
    ScrollView,
    ListView,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    LayoutAnimation,
    NavigatorIOS
} from 'react-native';

/*class Child extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text>{this.props.name}</Text>
                </View>
                <View style={styles.item}>
                    <Text></Text>
                </View>
                <View style={styles.item}>
                    <Text></Text>
                </View>
            </View>
        );
    }
}*/
/*
var dates = ['aa', 'bb', 'cc'];

class Parent extends Component {
    show = (title) => {
        alert(title);
    };
    render() {
        var news =[];
        for (var i in this.props.news){
            var text = (
                <Text
                    onPress={this.show.bind(this, this.props.news[i])}
                    numberOfLines={2}
                    style = {styles.new_item}>
                    {this.props.news[i]}
                </Text>
            );
            news.push(text);
        }
        return (
            <View >
            {news}
            </View>
        )
    }
}
class AwesomeProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Parent news={['aa', 'bb', 'cc']} />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        borderWidth:1,
        borderColor:'red',
        flexDirection: 'row'
    },
    new_item: {
        borderColor: 'black',
        width: 20,
        height: 20,
        borderWidth:1,

    },
    item: {
        flex:1,
        height: 80,
        borderColor: 'blue',
        borderWidth: 1
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
*/
/*example2*/
class List extends Component {
    render(){
        return (
            <ScrollView style={styles.flex}>
                <Text style={styles.list_item} onPress={this.goTo}>一日游</Text>
                <Text style={styles.list_item} onPress={this.goTo}>二日游</Text>
                <Text style={styles.list_item} onPress={this.goTo}>三日游</Text>
            </ScrollView>
        )
    };
    goTo = () => {
        this.props.navigator.push({
            component: Detail,
            title: '游轮详情',
            rightButtonTitle: 'shopping car',
            onRightButtonPress: function () {
                alert('access my shopping car');
            }
        });
    }
}
class Detail extends Component {
    render() {
        return (
            <ScrollView>
                <Text>详情页</Text>
            </ScrollView>
        )
    }
}
class AwesomeProject extends Component {
    render() {
        return (
            <NavigatorIOS
                style={{flex: 1}}
                initialRoute={{
                    component: List,
                    title: '游轮',
                    passProps: {}
                }}>

            </NavigatorIOS>
        )
    }
}
var styles = StyleSheet.create({
    flex: {
        flex:1
    },
    list_item: {
       height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flex: 1,
        lineHeight: 40
    }

});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
