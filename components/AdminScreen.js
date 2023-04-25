import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react'
import ItemFlat from './ItemFlat';
import RegisterButton from './RegisterButton';
import { useNavigation } from '@react-navigation/native';
const settings = require('./Settings.json')
export default function AdminScreen(props) {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const backToLogin = () => {
    navigation.navigate("loginScreen")
  }
  const deleteItem = (itemCount) =>{
    fetch(settings.delete, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        count:itemCount
      }),
    })
      .then((response) => response.json())
      .then((data) => {setData(data.data)})
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(settings.allData);
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{flex:1}}>
      <View style={{justifyContent:"center",alignItems:"center"}}>
        <View><RegisterButton
          click={backToLogin}
          color="#1A237E"
          text="Back to login page"
        /></View></View>
      
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ItemFlat count={item.count} login={item.login} time={item.time} delete={deleteItem} />
      )}
      keyExtractor={(item) => item.count.toString()}
    /></View>

  )
  
}
