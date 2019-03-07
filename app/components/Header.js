import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight} from 'react-native';

export default class Header extends Component{
    constructor(){
        super();
        this.state = {
            appName: 'NewsISM'
        };
    }
    render(){
        return (
            <View style = {styles.Header}>
                <TouchableHighlight onPress = {() => this.props.navigation.navigate('Home')}>
                    <Text style = {styles.Title}>{this.state.appName}</Text>
                </TouchableHighlight> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Header: {
        padding: 10,
        backgroundColor: '#20c997',
    },
    Title: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'impact'
    }
});

AppRegistry.registerComponent('Header', () => Header)
