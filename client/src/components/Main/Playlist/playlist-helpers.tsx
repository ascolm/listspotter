import { TrackItem } from 'interfaces/spotifyObjects';

export function trackToggleUpdate(trackId: string, trackList: TrackItem[]) {
  return trackList.map((trackItem) => {
    if (trackItem.track.id === trackId) {
      let updatedTrack = Object.assign({}, trackItem);
      updatedTrack.userDisabled = !updatedTrack.userDisabled;
      return updatedTrack;
    } else {
      return trackItem;
    }
  });
}
