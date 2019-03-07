import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView} from 'react-native';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

export default class TermsScreen extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return (
            <View style = {{flex: 1}}>
                <Header navigation = {this.props.navigation}/>
                <ScrollView>
                    <View style = {{ padding: 10}}>
                        <Text style = {Styles.Heading}>Terms of Use</Text>
                        <Text style = {Styles.Body}>
                            1. This app uses NewsApi.org api to fetch news from NewsApi.org. 
                            We are not responsible for any inapropriate content fetched through API.
                        </Text>
                        <Text style = {Styles.Body}>
                            2. We do not track you. In fact, we neither directly ask you for personal information nor do we indirectly log any sensitive information.
                        </Text>
                        <Text style = {Styles.Body}>
                            3. For any complaint, you can reach to us through email or Facebook.
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
        margin: 5,
        lineHeight: 25
    }
});


AppRegistry.registerComponent('TermsScreen', () => TermsScreen)
