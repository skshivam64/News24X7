import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView} from 'react-native';

import Header from './Header';
import Footer from './Footer';

export default class ContactScreen extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return (
            <View style = {{flex: 1}}>
                <Header navigation = {this.props.navigation}/>
                <ScrollView>
                    <View style = {{ padding: 10}}>
                        <Text style = {Styles.Heading}>Contact Us</Text>
                        <Text style = {Styles.Body}>
                            Feel free to contact us if you have any query or if you want to give any feedback.
                        </Text>
                        <Text style = {Styles.Body}>
                            You can reach to us through our Facebook page or you can mail us to: 
                        </Text>
                        <Text style = {Styles.Body, {fontStyle: 'italic', color: '#20c997'}}>
                            engineeraccidental@gmail.com
                        </Text>
                    </View>
                </ScrollView>
                <Footer navigation = {this.props.navigation}/>
            </View>
        );
    }
}


const Styles = StyleSheet.create({
    Heading: {
        letterSpacing: 2,
        fontSize: 30,
        textAlign: 'center',
        margin: 3,
    },
    Body: {
        lineHeight: 25
    }
});


AppRegistry.registerComponent('ContactScreen', () => ContactScreen)
