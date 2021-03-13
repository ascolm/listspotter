import { TrackItem } from 'interfaces/spotifyObjects';

export function convertMsToMinsAndSecs(ms: number) {
    var minutes = Math.floor(ms / 60000);
    var seconds = parseInt(((ms % 60000) / 1000).toFixed(0));
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

export function joinArtistNames(trackItem: TrackItem) {
    const artistNames = trackItem.track.artists.map((artist) => artist.name);
    return artistNames.join(', ');
}
