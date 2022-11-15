import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert,Image,ScrollView } from 'react-native';
import OneSignal from 'react-native-onesignal';




export default function App() {
  OneSignal.setAppId("4a3d23c8-8d8a-4f84-acf9-23146df6b98e");
  OneSignal.setLogLevel(6, 0);
  const deviceState = OneSignal.getDeviceState();
  
  OneSignal.promptForPushNotificationsWithUserResponse(response => {
    console.log("Prompt response:", response);
    console.log(deviceState);
  });
  return (
    <View style={styles.container}>
      <ScrollView horizaontal={true}> 
      <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
      <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
       </ScrollView>
      <Text>I receive ios notification! it is cool!::</Text>
      <Text>Your player Id is {deviceState[0]}</Text>
      <StatusBar style="auto" />
      <View>
        <Button title="set external user id" onPress={() => OneSignal.setExternalUserId('123457890')} />
        <Button title="set email" onPress={() => OneSignal.setEmail('dengxinju@msu.edu')} />
        <Button title="Tag User" onPress={() => OneSignal.sendTag("hello","world")} />
      </View>
      <View style={{ flex: 1}}>
    <Image
     source={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
      style={{ width: 100, height: 100 }}
    />
  </View>

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
});
