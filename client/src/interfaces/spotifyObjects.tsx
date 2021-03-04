export interface Track {
  id: string,
  name: string,
  artists: Artist[],
  album: Album
}

export interface TrackItem {
  added_at: string,
  track: Track
}

export interface TrackData {
  total: number,
  items: TrackItem[],
  next: string | null
}

export interface Artist{
  id: string,
  name: string,
  genres: string[]
}

export interface Album{
  id: string,
  name: string
}