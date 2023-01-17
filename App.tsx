/* eslint-disable camelcase */
import { Home } from './src/screens/Home'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import {
  UseFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { useFonts } from '@expo-google-fonts/inter/useFonts'

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })
  return (
    <View style={{ backgroundColor: '#0D0D0D' }}>
      {fontsLoaded ? (
        <>
          <Home />
        </>
      ) : (
        <ActivityIndicator
          style={{ alignItems: 'center', justifyContent: 'center' }}
        />
      )}
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
    </View>
  )
}
