import React, { Component } from 'react';
import {AppRegistry, WebView, Linking, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class WebViewThatOpensLinksInNavigator extends Component {
  constructor(props){
      super(props);
      const url = this.props.navigation.getParam('url');
      this.state = {
          uri: url
      };
  }
  render() {
    return (
      <WebView
        source={{uri: this.state.uri}}
        style={{marginTop: 0}}
      />
    );
  }
}

AppRegistry.registerComponent('WebViewThatOpensLinksInNavigator', () => WebViewThatOpensLinksInNavigator)


/*
<WebView
        source={{uri: uri}}
        style={{marginTop: 0}}
      />
<WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri: uri}}
        onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />

      <WebView
        originWhitelist={['*']}
        source={{html: '<h1>Hello world</h1>'}}
      />
      */