import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Button, TouchableHighlight, Image, ScrollView} from 'react-native';

export default class Details extends Component{
    constructor(props){
        super(props);
        const data = this.props.navigation.getParam('data');
        this.state = {
            navigation: this.props.navigation,
            heading: data.title,
            author: data.author,
            description: data.description,
            image: data.urlToImage,
            url: data.url
        };
    }
    render(){
        return (
            <ScrollView style = {Styles.NewsBox}>
                <View style = {Styles.NewsDetails}>
                    <Text style = {Styles.Heading}>{this.state.heading}</Text>
                    <Text style = {Styles.Author}>{this.state.author}</Text>
                    <Text style = {Styles.Body}>{this.state.description}</Text>
                    <Image
                        style={{height: 300, flex: 1, marginTop: 10}}
                        source={{uri: this.state.image}}
                    />
                    <View style = {{marginTop: 5, marginBottom: 5}}>
                        <TouchableHighlight style = {Styles.Back} onPress = {() => this.props.navigation.navigate('Home')}>
                            <View>
                                <Text style = {Styles.BackText}>Go Back</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style = {Styles.Back} onPress = {() => this.props.navigation.navigate('WebView', {url: this.state.url})}>
                            <View>
                                <Text style = {Styles.BackText}>More</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
            
        );
    }
}

const Styles = StyleSheet.create({
    Heading: {
        flex: 1,
        backgroundColor: 'white',
        padding: 4,
        marginBottom: 2
    },
    Author: {
        flex: 1,
        color: 'white',
        padding: 2,
        marginBottom: 3,
        fontStyle: 'italic',
        textAlign: 'right',
        fontSize: 12
    },
    Body: {
        flex: 1,
        backgroundColor: 'white',
        padding: 4,
        marginBottom: 3
    },
    Back: {
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 4,
        borderColor: '#20c997',
        marginTop: 5
    },
    BackText: {
        color: '#00c9ca',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 5
    },
    NewsDetails : {
        flexDirection: 'column',
        backgroundColor: '#00c9ca',
        padding: 5
    },
    NewsBox : {
        padding: 5
    }
});

AppRegistry.registerComponent('Details', () => Details)
