/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TextInput,
    Image,
    ScrollView
} from 'react-native';

class AwesomeProject extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Image source={require('./imgs/myicon.png')} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        );
    }
}



/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
