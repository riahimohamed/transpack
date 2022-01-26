import * as Font from 'expo-font';

export default useFonts = async () => {
  
      await Font.loadAsync({
        Roboto: require('../assets/fonts/Roboto-Black.ttf'),
        'Roboto-Medum': {
          uri: require('../assets/fonts/Roboto-Medium.ttf'),
          display: Font.FontDisplay.FALLBACK,
        },
        'Roboto-Light': {
          uri: require('../assets/fonts/Roboto-Light.ttf'),
          display: Font.FontDisplay.FALLBACK,
        },
      });
      this.setState({ fontsLoaded: true });

}