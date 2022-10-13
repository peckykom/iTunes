import React, { FC, useState } from 'react'
import TunesSearchForm from './tunes/TunesSearchForm'
import TunesList from './tunes/TunesList'
import axios from 'axios'
import { Song, SongFromITunes } from '../types'

const Tunes: FC = () => {
	const [songs, setSongs] = useState([])

	const handleSearch = (query: string) => {
		axios
			.get(
				`https://itunes.apple.com/search
				?term=${encodeURI(query)}
				&entity=musicTrack
				&limit=5`
			)
			.then(response => {
				let iTunesSongs = response.data.results
					.filter((song: SongFromITunes) => song.kind === 'song')
					.map((song: SongFromITunes) => extractData(song))

				setSongs(iTunesSongs)
			})
	}

	//Only needed data from results
	const extractData = ({
							 trackId: id,
							 artistName: artist,
							 previewUrl: audioFile,
							 artworkUrl100: artwork,
							 trackName: title,
							 collectionName: album
						 }: SongFromITunes) => {
		return { id, artist, audioFile, artwork, title, album } as Song
	}

	return (
		<article className="tunes">
			<h1>My Tunes</h1>
			<TunesSearchForm onSearch={handleSearch} />
			<TunesList songs={songs} />
		</article>
	)
}

export default Tunes