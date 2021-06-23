import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function Detail({navigation}) {

  let item = navigation.getParam('item');
  return (
    <View style={styles.container}>
 

        <View style={styles.groupTitle}>
          <Text style={styles.subTitle}>Title:</Text>
          <Text style={styles.listTitle}>{item.Name}</Text>
        </View>

        <View style={styles.groupDescription}>
          <Text style={styles.subTitle}>Description:</Text>
          <Text style={styles.listDesript}>{item.Info}</Text>
        </View>

        <View style={styles.groupPlace}>
          <Text style={styles.subTitle}>Location:</Text>
          <Text style={styles.listPlace}>{item.Place}</Text>
        </View>

    
        <TouchableOpacity style={styles.button}  onPress={()=> navigation.goBack()}>
          <Text style={styles.buttonText} >Go Back</Text>
      </TouchableOpacity>
 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    minWidth: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    borderWidth: 3,
    margin:"*",
    borderWidth: 3,
    padding: 0,

    
  },

  subTitle: {
    // borderWidth: 3,
    width: "100%",
    fontWeight: "bold",
  },


  groupTitle: {
    // borderWidth: 8,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    backgroundColor: "red",
    maxHeight:"100px",
    padding: 20,
   
  },

  
  groupDescription: {
    // borderWidth: 8,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    maxHeight:"300px",
    padding: 20,
  },

  
  groupPlace: {
    // borderWidth: 8,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    padding: 20,
    backgroundColor: "red",
    maxHeight:"100px",
   
  },


  listTitle: {
    // borderWidth: 3,
    fontSize: 20,
    margin: 0,
    padding: 10,

  },

  listDesript:{
    // borderWidth: 3,
    textAlign: "left",
    margin: 20,
    fontFamily: "sans-serif",
    justifyContent: 'left',
    // borderWidth:2,
    borderRadius:10,
    padding: 10,
    width: "80%",

  },

  listPlace: {
    margin: 20,
    fontVariant: "italic",
    fontFamily: "cursive",
    fontWeight: "bold",
  },

  button: {

    margin:20,
    width:"100px",
    borderRadius: 15,
    borderWidth:2,
    backgroundColor: "#00ccff",
 
    padding:20,
  },

  buttonText: {
    fontWeight: "bold",
  }
});
