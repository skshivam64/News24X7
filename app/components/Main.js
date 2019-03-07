import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, FlatList, TouchableHighlight, ScrollView, TextInput, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Main extends Component{

    constructor() {
        super();
        this.state = {
            isLoading: true
        }
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c152a0120ef94f51b064948090936e79')
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                backup: response.articles,
                data: response.articles,
                isLoading: false
            });
        });
    }

    searchNews(query){
        this.setState({text: query});
        if(query != ''){
            fetch('https://newsapi.org/v2/everything?q=' + query + '&apiKey=c152a0120ef94f51b064948090936e79')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    data: response.articles
                });
            });
        }
        else this.setState({data: this.state.backup});
    }

    render(){
        if(this.state.isLoading){
            return (
                <ScrollView style = {Styles.Loader}><Text style = {Styles.LoaderText}>Loading......</Text></ScrollView>
            );
        }
        return (
            <ScrollView style = {{ padding: 5}}>
                <View style = {{flexDirection: 'column'}}>
                    <View style = {{ flex: 1, flexDirection: 'row', margin: 5}}>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1, flex: 5}}
                            onChangeText={(text) => this.searchNews(text)}
                            value={this.state.text}
                        />
                        <Text style = {{flex: 1, lineHeight: 40, textAlign: 'center', backgroundColor: '#20c997', color: 'white'}}>Search</Text>
                    </View>
                    <FlatList
                        data = {this.state.data}
                        renderItem = {({item}) => 
                                <TouchableHighlight onPress = {() => this.props.navigation.navigate('Details', {data: item})}>
                                    <View style = {Styles.Container}>
                                        <Text style={Styles.Headline}>{item.title}</Text>
                                    </View>
                                </TouchableHighlight>
                        }
                        style = {Styles.NewsList}
                    />
                </View>
            </ScrollView>
        );
    }
}

const Styles = StyleSheet.create({
    Loader:{

    },
    LoaderText: {
        textAlign: 'center',
        lineHeight: 480
    },
    Container:{
        backgroundColor: '#00c9ca',
        marginBottom: 2,
        padding: 4
    },
    Headline : {
        color: 'white',
        fontFamily: 'sans-serif',
    },
    NewsList : {
        flex: 1,
        padding: 5
    }
});


AppRegistry.registerComponent('Main', () => Main)
