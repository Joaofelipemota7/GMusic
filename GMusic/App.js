import { StatusBar } from 'expo-status-bar';
import { 
  initialWindowMetrics,
  SafeAreProvider,
 } from 'react-native-safe-area-context';
import MusicPlayer from './screens/MusicPlayer';

export default function App() {
  return (
    <SafeAreProvider initialMetrics={initialWindowMetrics}>
      <StatusBar style="light" translucent />
      <MusicPlayer/>
    </SafeAreProvider>
  );
}

