import { TrackItem, ArtistData, Artist } from 'interfaces/spotifyObjects';
import { GenreDb } from 'interfaces/genreObjects';
import { getArtists } from 'apiService';
import { artistsMock } from 'dataMocks';

export function fetchArtistsWithOffset (code: string) {
  if (process.env.NEXT_PUBLIC_ENV === 'development') {
    return new Promise<Artist[]>(res => {
      setTimeout(() => {
        res(artistsMock);
      }, 1000);
    })
  }

    let nextUrl;
    let artists: Artist[] = [];

    async function fetchArtistsAsync (code: string, nextUrl: string | undefined): Promise<Artist[]> {
      const artistData: ArtistData = await getArtists(nextUrl);
      nextUrl = artistData.artists.next;

      const newArtists = artistData.artists.items.map((artistObj) => {
        return {...artistObj, selected: false}
      });

      artists = [...artists, ...newArtists];
      
      if (nextUrl) {
        return fetchArtistsAsync (code, nextUrl);
      } else {
        return artists;
      }
    };

    return fetchArtistsAsync(code, nextUrl);
}

export function generateGenres (artists: Artist[], genreDb: GenreDb = {}) {
  artists.forEach((artist) => {
    artist.genres.forEach((artistGenre) => {
      if (!genreDb[artistGenre]) {
        genreDb[artistGenre] = {artists: [artist], selected: false};
      } else if (!genreDb[artistGenre].artists.some(genreArtist => genreArtist.id === artist.id)) {
        genreDb[artistGenre].artists.push(artist);
      }
    })
  })
  return genreDb;
};

export function markGenreArtists (artists: Artist[], selectedGenres: GenreDb) {
  return artists.map((artist) => {
    for (let i = 0; i < artist.genres.length; i++) {
      if (Object.keys(selectedGenres).includes(artist.genres[i])) {
        artist.selected = true;
        return artist;
      }
    }
    artist.selected = false;
    return artist;
  })
};

export function filterSelectedGenres (list: GenreDb) {
  return Object.entries(list).filter(([key, value]) => value.selected)
  .reduce<GenreDb>((acc, [key, value]) => {
    acc[key] = value
    return acc;
  }, {});
};

export function artistToggleUpdate (artistId: string, artistList: Artist[]) {
  return artistList.map((artist) => {
    if (artist.id === artistId) {
      let updatedArtist = Object.assign({}, artist);
      updatedArtist.userDisabled = !updatedArtist.userDisabled;
      return updatedArtist;
    } else {
      return artist;
    }
  });
}

export function getSelectedTracks (artists: Artist[], tracks: TrackItem[]) {
  const selectedArtists = artists.filter((artist) => artist.selected && !artist.userDisabled);

  return tracks.filter((trackItem) => {
    return trackItem.track.artists.some((trackArtist) => selectedArtists.findIndex((artist) => artist.id === trackArtist.id) !== -1);
  })

}

export function identifyArtistsNotFollowed (artists: Artist[], tracks: TrackItem[]): string[] {
  const artistsNotFollowed: string[] = [];
  tracks.forEach(trackItem => {
    const trackArtistId = trackItem.track.artists[0].id;
    if (!artists.some(artist => artist.id === trackArtistId) && !artistsNotFollowed.some(artistId => artistId === trackArtistId)) {
      artistsNotFollowed.push(trackArtistId);
    }
  })
  return artistsNotFollowed;
}
