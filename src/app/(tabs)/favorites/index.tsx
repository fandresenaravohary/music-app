import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

const FavoritesScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<Text style={defaultStyles.text}>Favorites screen</Text>
		</View>
	)
}

export default FavoritesScreen
