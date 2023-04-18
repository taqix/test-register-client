import React from 'react';
import { View, Text, Modal, Button } from 'react-native';

const MyAlert = (props) => {
  return (
    <Modal visible={true} transparent={true}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <View style={{ backgroundColor: 'white', padding: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>ALERT</Text>
          <Text>{props.message}</Text>
          <Button title="OK" onPress={props.change} />
        </View>
      </View>
    </Modal>
  );
};
export default MyAlert;