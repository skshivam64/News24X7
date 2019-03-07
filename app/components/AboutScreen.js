import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';

import Header from './Header';
import Footer from './Footer';
import { ScrollView } from 'react-native-gesture-handler';

export default class AboutScreen extends Component{
    constructor(){
        super();
        this.state = {
            newsApi: 'https://newsapi.org/images/n-logo-border.png',
            dev: 'https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1350249-thumb.'
        }
    }
    static navigationOptions = {
        header: null
    }
    render(){
        return (
            <View style = {{flex: 1}}>
                <Header navigation = {this.props.navigation}/>
                <ScrollView>
                    <View style = {{ padding: 10}}>
                        <Text style = {Styles.Heading}>About</Text>
                        <Text style = {Styles.Body}>
                            NewsISM is a mobile application that serves news hosted on NewsApi.org. 
                            One can read headlines and search news on the home screen. 
                            Each headline when clicked gives details of the news with images if available.
                            There is also a link that allows you to visit the source of the news. 
                        </Text>
                        <Image
                            style={{height: 300, flex: 1, marginTop: 10}}
                            source={{uri: this.state.newsApi}}
                        />
                        <Text style = {Styles.Heading}>Developer</Text>
                        <Image
                            style={{height: 300, flex: 1, marginTop: 10}}
                            source={{uri: this.state.dev}}
                        />
                        <Text style = {{ padding: 3, fontSize: 16, textAlign: 'center'}}>Shivam Kumar</Text> 
                        <Text style = {{ padding: 2, fontSize: 12, textAlign: 'center' }}>IIT ISM Dhanbad</Text>
                        <Text style = {{ padding: 2, fontSize: 14, textAlign: 'center'}}>Follow me on Facebook: Shivam.Samar.ISM</Text>
                        <Text style = {{ padding: 2, fontSize: 14, textAlign: 'center'}}>Follow me on GitHub: skshivam64</Text>
                        <Text style = {{ padding: 2, fontSize: 14, textAlign: 'center'}}>Follow me on LinkedIn: shivam-kumar-iit-ism</Text>
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
        margin: 3
    }
});

AppRegistry.registerComponent('AboutScreen', () => AboutScreen)
