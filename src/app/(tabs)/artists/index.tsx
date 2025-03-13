import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

const ArtistsScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<Text style={defaultStyles.text}>Artists screen</Text>
		</View>
	)
}

export default ArtistsScreen
