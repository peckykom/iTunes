import './TunesList.scss'

import React, { FC } from 'react'
import { Song } from '../../../../../Desktop/react-tunes-ts-[done]/src/types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import TunesSong from './TunesSong'

interface TunesListProps {
	songs: Song[]
}

const TunesList: FC<TunesListProps> = props => {
	const { songs } = props

	return (
		<TransitionGroup component="ul" className="tunes-list">
			{songs.map(song => (
				<CSSTransition key={song.id} timeout={200} classNames="song">
					<li key={song.id}>
						<TunesSong song={song} />
					</li>
				</CSSTransition>
			))}
		</TransitionGroup>
	)
}

export default TunesList
