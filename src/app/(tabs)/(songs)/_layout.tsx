import { StackScreenWithSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View, Text } from 'react-native'

const SongsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: 'Songs',
						headerStyle: {
							backgroundColor: '#000',
						},
						headerTintColor: '#fff',
					}}
				/>
			</Stack>
		</View>
	)
}

export default SongsScreenLayout
