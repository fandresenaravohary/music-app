import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SplashScreen } from 'expo-router'
import { useCallback } from 'react'

SplashScreen.preventAutoHideAsync()

const App = () => {

	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, [])

	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	})

	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar barStyle={'dark-content'} />
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	)
}

export default App
