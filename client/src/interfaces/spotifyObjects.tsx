// Type '{ external_urls: { spotify: string; }; href: string; id: string; name: string; type: string; uri: string; }[]' is not assignable to type 'Artist[]'.
//         Property 'genres' is missing in type '{ external_urls: { spotify: string; }; href: string; id: string; name: string; type: string; uri: string; }' but required in type 'Artist'.


export interface Track {
  id: string,
  name: string,
  artists: SimplifiedArtist[],
  album: Album,
  uri: string
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
  genres: string[],
  images: Image[],
  selected?: boolean,
  userModified?: boolean  // REMOVE ? AFTER TESTING
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