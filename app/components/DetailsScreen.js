import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

import Header from './Header';
import Footer from './Footer';
import Details from './Details';

export default class DetailsScreen extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return (
            <View style = {{flex: 1}}>
                <Header navigation = {this.props.navigation}/>
                <Details navigation = {this.props.navigation}/>
                <Footer navigation = {this.props.navigation}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('DetailsScreen', () => DetailsScreen)
