import { FlatList, FlatListProps } from 'react-native'
import library from '@/assets/data/library.json'
import { TracksListItem } from './TrackListItem'

export type TrackListProps = Partial<FlatListProps<unknown>>

export const TracksList = ({ ...flatlistProps }: TrackListProps) => {
	return (
		<FlatList
			data={library}
			renderItem={({ item: track }) => (
				<TracksListItem
					track={{
						...track,
						image: track.artwork,
					}}
				/>
			)}
            {...flatlistProps}
		/>
	)
}
