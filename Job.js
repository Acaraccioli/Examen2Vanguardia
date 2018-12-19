import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import jobss from './jobs';
const KEYS_TO_FILTERS = ['jobname.name', 'descripcion'];
 
export default class Job extends Component<{}> {

 constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
  }


  busqueda() {
    const { navigation } = this.props;
  const itemId = navigation.getParam('Name');
  console.log(itemId);

    this.setState({ token: itemId })
  }
  render() {
    const { navigation } = this.props;
  const itemId = navigation.getParam('Name');

    const filteredjobs = jobss.filter(createFilter(itemId, KEYS_TO_FILTERS))
    return (
      <View style={styles.container} >
        <ScrollView onload="this.busqueda();" >

          {filteredjobs.map(jobs => {
            return (
              <TouchableOpacity onPress={()=>Alert.alert("Descripcion del Trabajo:",jobs.descripcion)} key={jobs.id} style={styles.jobsItem}>
                <View>
                  <Text>{jobs.jobname.name}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly'
  },
  jobsItem:{
    borderBottomWidth: 0.6,
    borderColor: 'black',
    padding: 9
  },
  
  searchInput:{
    padding: 10,
    borderColor: 'lightblue',
    borderWidth: 2
  }
});