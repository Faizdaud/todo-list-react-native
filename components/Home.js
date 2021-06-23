import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {

  
  const refresh = (value) => {
    console.log(value);
    setComments([...todos,value] )
  }

  const onDelete=  id => e => {
    setComments(todos.splice(todos.id));
  };


  const [todos, setComments] = useState([
    {
        "id": 1,
        "Name" : "Cook Food",
        "Info": "Cook Chicken Rice, feafaff fwafaf fwfa",
        "Place": "Home"
    },

    {
        "id": 2,
        "Name" : "Suzy",
        "Info": " I love how the presenter presents the topic.",
        "Place": "Brunei"
    },

    {   "id": 3,
        "Name" : "James",
        "Info": "Perfect!",
        "Place": "Laos"
    },


]);

    // const [name, setName] = useState("");
    // const [info, setInfo] = useState("");
    // const [place, setPlace] = useState("");

    // const [theArray, setTheArray] = useState([]);


    // const addItem = () => {
    //     setTheArray([...theArray, {

    //       id: theArray.length,
    //       name: setName,
    //       info: setInfo,
    //       place: setPlace
    //     }]);
    // };

  const renderItem = ({item, onDelete }) => (
      
    <TouchableOpacity style={styles.touch} onPress={()=> navigation.push("Detail", {'item':item})}>
    <View style={styles.flatListStyle} >

        <Text style={styles.listTitle}>{item.Name}</Text>
        <Text style={styles.listDesript}>- {item.Info}</Text>
        <Text style={styles.listPlace}>{item.Place}</Text>

                   
        <TouchableOpacity style={styles.button}  onPress={()=> onDelete(id)}>
          <Text style={styles.buttonText} >Delete</Text>
        </TouchableOpacity>
  
    </View>
</TouchableOpacity>

    )
  return (
    <View style={styles.container}>

      <Text style={styles.bigTitle}>Task List</Text>

      <FlatList  
        style={styles.trueFlatlist} 
        data= {todos} 
        keyExtractor={item=>item.id} 
        renderItem={renderItem}
        >        
      </FlatList>
        
        <Button style={styles.button} onPress={()=> navigation.push("Item",
         {
           onGoBack:refresh
         }
        )} title="Add"/>





      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

    inputStyle: {
        borderWidth:2,
        borderColor: "red",
        margin: 15,
    },

  container: {
    borderWidth: 3,
    // flex: 1,
    // flexShrink: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height:"100%",
    width: "100%",

  },

  bigTitle: {
    borderWidth:2,
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    width:"100%",
    padding: 0,
  },

  listTitle: {
    fontSize: 20,
    textDecorationLine: "underline",
    margin: 10,
 

  },

  listDesript:{
    textAlign: "left",
    margin: 5,
    fontFamily: "sans-serif",

  },

  listPlace: {
    fontVariant: "italic",
    fontFamily: "cursive",
    fontWeight: "bold",
  },

  trueFlatlist:{
    borderWidth: 3,
    backgroundColor: "green",
    width: "100%",
    flexDirection: "row",

  },

  touch: {
    borderWidth: 3,
    backgroundColor: "pink",
    margin: 10,
  },

  flatListStyle: {
    margin:0,
    borderWidth: 3,
    // flexWrap: "nowrap",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#ffff80',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15,
    width: "%",
  },

  button: {
    borderWidth: 3,
    flex: 1,
  },
});
