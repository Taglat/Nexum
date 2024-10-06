import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from '@/navigation/Navigation';
import { AuthProvider } from '@/context/AuthContext';
import { Provider } from 'react-redux';
import store from '@/store';
  
export default function App() {
  return (
    <>
      <AuthProvider>
        <Provider store={store}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </Provider>
      </AuthProvider>
      
      <StatusBar style='light' />
    </>
  );
}