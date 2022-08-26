import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';
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
      <Text>I couldnt built on real device. very annoying!</Text>
      <Text>Your player Id is {deviceState[0]}</Text>
      <StatusBar style="auto" />
      <View>
        <Button title="Left button" onPress={() => OneSignal.setExternalUserId('123457890')} />
        <Button title="Right button" onPress={() => OneSignal.setEmail('dengxinj@msu.edu')} />
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
