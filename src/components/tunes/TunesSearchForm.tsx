import './TunesSearchForm.scss'

import React, { useRef, FormEvent, ChangeEvent, FC } from 'react'
import { debounce } from 'lodash-es'

interface TunesSearchFormProps {
	onSearch: (query: string) => void
}

const TunesSearchForm: FC<TunesSearchFormProps> = props => {

	const searchInput = useRef<HTMLInputElement>(null)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		searchForMusic()
	}

	const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
		searchForMusic()
	}, 500)

	const searchForMusic = () => {
		let searchString = searchInput.current?.value
		if (searchString) props.onSearch(searchString)
	}

	return (
			<form onSubmit={handleSubmit}>
				<input
					autoFocus
					type="text"
					ref={searchInput}
					onChange={handleInput}
					className="search"
				/>
			</form>
	)
}

export default TunesSearchForm
