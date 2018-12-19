import React, { Component } from 'react';
import {Button, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Text} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Examen2',
  };
 state = {
      name: ''   }
   handleName = (text) => {
      this.setState({ name: text })
   }
 login = (name) => {
      alert( name  )
   }
  render() {
    const {navigate} = this.props.navigation;
    return (


 <View style={styles.container}>
  <TextInput style = {styles.in}
               underlineColorAndroid = "transparent"
               placeholder = "Search"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText = {this.handleName}

               
               />
      <Button color="grey" title="Search" onPress={() => navigate('Job', {Name:this.state.name})}/>
      
      </View>
     

    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    height:50,

  },
  in: {
    flex: .1,
    backgroundColor: 'white',
    height:7

  }
});