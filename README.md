# daily-react-native-expo-demo

## Introduction

Expo is a set of tools build on top of React Native to make it easier to build React Native apps. It makes project setup and collaboration and beta testing much easier. This demo intends how to build an app using React Native Expo that wraps the daily prebuilt ui in a React Native WebView. The main logic of the app can be found in the App.tsx file. In order to wrap the daily prebuilt ui we use the following code

```typescript
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

```

## How to run the iOS Simulator demo on Mac

Step 1. **Install Xcode** from the Mac [App Store](https://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12) 

Step 2. Install Node.js with [Homebrew](https://treehouse.github.io/installation-guides/mac/homebrew)

```bash
brew install node
```

Step 3. Install React Native Expo. On your terminal run

```bash
npm install --global expo-cli
```

Step 4. Clone the repository. On your terminal run 

```bash
git clone https://github.com/daily-co/react-native-expo-demo.git
```

Step 5,. Install NPM packages. On your terminal run

```bash
cd react-native-expo-demo ; npm install
```

Step 5. Pre open the iOS simulator (Optional)

```
open -a Simulator.app
```

Step 6. Start the iOS demo. On your terminal run 

```bash
expo start -ios
```

## References

1. ##### Stack Overflow - What is the difference between expo and react native https://stackoverflow.com/questions/39170622/what-is-the-difference-between-expo-and-react-native

2. ##### How to prevent full screen video mode in iOS https://stackoverflow.com/questions/53424750/react-native-how-to-prevent-full-screen-video-mode-in-ios