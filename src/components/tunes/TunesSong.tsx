import './TunesSong.scss'

import React from 'react'
import { Song } from '../../types'
import { truncate } from 'lodash-es'

interface TunesSongProps {
	song: Song
}

const TunesSong: React.FC<TunesSongProps> = props => {
	const { song } = props

	const songify = (song: Song): string => {
		const newTitle = song.artist + ' - ' + song.title
		return shorten(newTitle, 100)
	}

	const shorten = (str: string, len = 55): string => {
		return truncate(str, { length: len })
	}

	return (
		<article className="song">
			<div className="inside">
				<div className="inside-box">
					<h2>{songify(song)}</h2>
					{song.artwork && (
						<img src={song.artwork} alt="album art" />
					)}
				</div>

				<div className="player">
					<audio controls src={song.audioFile} />
				</div>
			</div>

			<footer className="meta"><span>Album:&nbsp;</span> {shorten(song.album)}</footer>
		</article>
	)
}

export default TunesSong
