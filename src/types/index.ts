
export interface Song {
	id: number
	artist: string
	audioFile: string
	artwork?: string
	title: string
	album: string
}

export interface User {
	firstName: string
	lastName: string
	favoriteSong?: Song
}

export interface SongFromITunes {
	trackId: number
	artistName: string
	previewUrl: string
	artworkUrl100?: string
	trackName: string
	collectionName: string
	kind?: string
}
