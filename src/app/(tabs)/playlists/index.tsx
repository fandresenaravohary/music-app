import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

const PlaylistsScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<Text style={defaultStyles.text}>Playlists screen</Text>
		</View>
	)
}

export default PlaylistsScreen
