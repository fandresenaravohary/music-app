import { TracksList } from '@/components/TracksList'
import { screenPadding } from '@/constants/token'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View, ScrollView } from 'react-native'

const SongsScreen = () => {
	return (
		<View style={[defaultStyles.container, { paddingTop: 65, paddingBottom: 60 }]}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
