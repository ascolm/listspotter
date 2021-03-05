// Type '{ external_urls: { spotify: string; }; href: string; id: string; name: string; type: string; uri: string; }[]' is not assignable to type 'Artist[]'.
//         Property 'genres' is missing in type '{ external_urls: { spotify: string; }; href: string; id: string; name: string; type: string; uri: string; }' but required in type 'Artist'.


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

export interface ArtistData{
  artists: {
    items: Artist[],
    next: string,
  }
}

export interface Artist{
  id: string,
  name: string,
  genres?: string[]
}

export interface Album{
  id: string,
  name: string
}