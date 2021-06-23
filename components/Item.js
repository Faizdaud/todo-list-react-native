import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function About({navigation}) {



    // const name = navigation.getParam("name");
    // const info = navigation.getParam("info");
    // const place = navigation.getParam("place");
    // const array = navigation.getParam("theArray");

    const [name, setName] = useState("");
    const [info, setInfo] = useState("");
    const [place, setPlace] = useState("");


  return (
    <View style={styles.container}>
      <Text>Fill in the form</Text>

      <View style={styles.groupTitle}>
          <Text style={styles.subTitle}>Title:</Text>
          <TextInput placeholder="Enter Title"  placeholderTextColor="grey" keyboardType="text" style={styles.inputStyle} value={name} onChangeText={text => { setName(text); }}/> 
        </View>


        <View style={styles.groupDescription}>
          <Text style={styles.subTitle}>Description:</Text>
          <TextInput  style={styles.Desript} placeholder="Enter Description"  placeholderTextColor="grey" keyboardType="text" style={styles.inputStyle} value={info} onChangeText={text => { setInfo(text); }}/> 
        </View>

        <View style={styles.groupPlace}>
          <Text style={styles.subTitle}>Location:</Text>
          <TextInput style={styles.listPlace} placeholder="Enter Location"  placeholderTextColor="grey" keyboardType="text" style={styles.inputStyle} value={place} onChangeText={text => { setPlace(text); }}/> 
        </View>



      <Button  onPress={()=> {
        
        navigation.state.params.onGoBack({Name: name,Info: info, Place: place} ) ;         
        navigation.goBack();

        }
      } title="Save "></Button>


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

  Desript:{
    borderWidth: 8,
    backgroundColor: "yellow",
    textAlign: "left",
    margin: 20,
    fontFamily: "sans-serif",
    justifyContent: 'left',
    // borderWidth:2,
    borderRadius:10,
    padding: 10,
    minWidth: "80%",

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
