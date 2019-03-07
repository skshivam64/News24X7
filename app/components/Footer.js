import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Button, TouchableHighlight} from 'react-native';

export default class Footer extends Component{
    constructor(){
        super();
        this.state = {
            footerItems: ['About', 'Contact Us', 'Terms']
        };
    }
    render(){
        return (
            <View style = {styles.Footer}>
                <TouchableHighlight style = {styles.FooterLink} onPress = {() => this.props.navigation.navigate('About')}>
                    <View>
                        <Text style = {styles.FooterText}>{this.state.footerItems[0]}</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style = {styles.FooterLink} onPress = {() => this.props.navigation.navigate('Contact')}>
                    <View>
                        <Text style = {styles.FooterText}>{this.state.footerItems[1]}</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style = {styles.FooterLink} onPress = {() => this.props.navigation.navigate('Terms')}>
                    <View>
                        <Text style = {styles.FooterText}>{this.state.footerItems[2]}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Footer: {
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#20c997',
        borderWidth: 1,
        borderColor: 'white'
    },
    FooterLink: {
        flex: 1
    },
    FooterText: {
        color: 'white',
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('Footer', () => Footer)
