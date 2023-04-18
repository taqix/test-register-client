import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react'
import ItemFlat from './ItemFlat';
export default function AdminScreen({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.0.1.48:4000/allData');
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ItemFlat count={item.count} login={item.login} time={item.time} />
      )}
      keyExtractor={(item) => item.count.toString()}
    />

  )
  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });