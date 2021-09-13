import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';

function HomeScreen({ navigation }: {navigation: any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Call"
        onPress={() => navigation.navigate('DailyCallView')}
      />
    </View>
  );
}

function DailyCallScreen({ navigation }: {navigation: any}) {
  return (
     <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
      }}>
          <WebView
          source={{ uri: 'https://ios.daily.co/team-call' }}
          useWebKit={true}
          originWhitelist={['*']}
          allowsInlineMediaPlayback={true}
          style={{
              height: 600,
              width: 400,
          }}/>
      </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DailyCallView" component={DailyCallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
