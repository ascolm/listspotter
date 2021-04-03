export interface Track {
  id: string,
  name: string,
  artists: SimplifiedArtist[],
  album: Album,
  uri: string,
  duration_ms: number
}

export interface PlaylistData {
  href: string,
  external_urls: {spotify: string},
  uri: string,
  name: string,
  id: string,
  cover?: PlaylistCover
}

export interface PlaylistCover {
  width: number,
  height: number,
  url: string
}

export interface TrackItem {
  added_at: string,
  track: Track,
  userDisabled?: boolean
}

export interface TrackData {
  total: number,
  items: TrackItem[],
  next: string | null
}

export interface ArtistData{
  artists: {
    items: Artist[],
    next: string,
  }
}

export interface Artist{
  id: string,
  name: string,
  genres: string[],
  images: Image[],
  selected?: boolean,
  userDisabled?: boolean
}

interface Image{
  height: number,
  url: string,
  width: number
}

export interface SimplifiedArtist{
  id: string,
  name: string
}

export interface Album{
  id: string,
  name: string
}