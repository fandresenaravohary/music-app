import { FlatList, FlatListProps, View } from 'react-native'
import { TracksListItem } from './TrackListItem'
import { utilsStyles } from '@/styles'
import { Track } from 'react-native-track-player'

export type TrackListProps = Partial<FlatListProps<Track>> & {
	tracks: Track[]
}

const ItemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TracksList = ({ tracks, ...flatlistProps }: TrackListProps) => {
	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ListFooterComponent={ItemDivider}
			ItemSeparatorComponent={ItemDivider}
			renderItem={({ item: track }) => <TracksListItem track={track} />}
			{...flatlistProps}
		/>
	)
}
