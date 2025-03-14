import { TracksList } from '@/components/TracksList'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const SongsScreen = () => {
	return (
		<View style={[defaultStyles.container, { flex: 1, paddingTop: 60 }]}>
			<TracksList />
		</View>
	)
}

export default SongsScreen
