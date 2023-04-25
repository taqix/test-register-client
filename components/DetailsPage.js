import { View, Text, Image } from 'react-native'
import React, {useEffect,useState} from 'react'

const DetailsPage = (props) => {
  const [dataLogin, setDataLogin] = useState("");
  useEffect(()=>{
    const date = new Date(props.route.params.time).toLocaleString();
    setDataLogin(date)
  })
  return (
    <View style={styles.container}>
      <Image
          source={{
            uri: "https://static.thenounproject.com/png/5034901-200.png",
          }}
          style={{ width: 300, height: 300 }}
        />
        <Text style={styles.header}>Login:</Text>
        <Text style={styles.dane}>{props.route.params.login}</Text>
        <Text style={styles.header}>Password:</Text>
        <Text style={styles.dane}>{props.route.params.password}</Text>
        <Text style={styles.header}>Registered:</Text>
        <Text style={styles.dane}>{dataLogin}</Text>
    </View>
  )
}
const styles = {
  
  container:{
    padding: 24,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 18,
     marginBottom: 5,
  },
  
  dane:{
    color:"#1A237E",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom:5,
  }
};

export default DetailsPage