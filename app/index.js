import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaView } from './styles';
import List from './List';
import Status from './components/Status';
import Loading from './components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Tailwind-Regular': require('../assets/fonts/Tailwind-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <Status resp="online" />
        <List />
      </SafeAreaView>
    </>
  );
}