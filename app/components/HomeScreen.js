import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

export default class HomeScreen extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return (
            <View style = {{flex: 1}}>
                <Header navigation = {this.props.navigation}/>
                <Main navigation = {this.props.navigation}/>
                <Footer navigation = {this.props.navigation}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('HomeScreen', () => HomeScreen)
