import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OneSignal from 'react-native-onesignal';

export default function App() {
  OneSignal.setAppId("4a3d23c8-8d8a-4f84-acf9-23146df6b98e");
  OneSignal.promptForPushNotificationsWithUserResponse(response => {
    console.log("Prompt response:", response);
  });
  return (
    <View style={styles.container}>
      <Text>the ios bundle mismatch. I dont know why~
      </Text>
      <StatusBar style="auto" />
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
