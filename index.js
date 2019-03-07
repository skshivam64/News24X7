import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './app/components/HomeScreen';
import DetailsScreen from './app/components/DetailsScreen';
import WebViewThatOpensLinksInNavigator from './app/components/WebViewThatOpensLinksInNavigator';
import AboutScreen from './app/components/AboutScreen';
import ContactScreen from './app/components/ContactScreen';
import TermsScreen from './app/components/TermsScreen';

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        About: AboutScreen,
        Contact: ContactScreen,
        Terms: TermsScreen,
        WebView: WebViewThatOpensLinksInNavigator
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class newsism extends Component{
    render(){
        return (
            <AppContainer navigation = {this.props.navigation}/>
        );
    }
}

AppRegistry.registerComponent('newsism', () => newsism)