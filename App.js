import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert,Image,ScrollView,TextInput,SafeAreaView } from 'react-native';
import OneSignal from 'react-native-onesignal';
import React from "react";




export default function App() {
  OneSignal.setAppId("4a3d23c8-8d8a-4f84-acf9-23146df6b98e");
  OneSignal.setLogLevel(6, 0);
  const deviceState = OneSignal.getDeviceState();
  
  OneSignal.promptForPushNotificationsWithUserResponse(response => {
    console.log("Prompt response:", response);
    //console.log(deviceState);
  });

  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);


  return (
    <View style={styles.container}>
     
    
    <Image
     source={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
      style={{ width: 100, height: 100 }}
    />

      <View style={{ width: 10, height: 10, backgroundColor: 'red' }} />
      <View style={{ width: 10, height: 10, backgroundColor: 'green' }} />
     
      <Text>I receive ios notification! it is cool!::</Text>
      <Text>Your player Id is {deviceState[0]}</Text>
      <StatusBar style="auto" />
      <View>
        <Button title="set external user id 1234567890" onPress={() => OneSignal.setExternalUserId('123457890')} />
        <Button title="set email dengxinj@msu.edu" onPress={() => OneSignal.setEmail('dengxinju@msu.edu')} />
        <Button title="Tag User hello world" onPress={() => OneSignal.sendTag("hello","world")} />
      </View>
     

  <SafeAreaView>

  <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button title="set external user id" onPress={() => OneSignal.setExternalUserId(text)} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button title="set email" onPress={() => OneSignal.setEmail(number)} />
      </SafeAreaView>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
