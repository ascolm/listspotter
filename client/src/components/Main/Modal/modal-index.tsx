import Modal from 'react-modal';
import { PlaylistData } from 'interfaces/spotifyObjects';
import './modal-style.scss'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    'border-radius': '20px',
    'background-color': 'var(--spotify-black)',
    height: '35%',
    padding: 0,
    opacity: 1,
    width: '45%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {zIndex: 2}
};

export interface Props {
  isOpen: boolean,
  playlist: PlaylistData,
  onRequestClose: () => void;
}

const PlaylistCreatedModal: React.FC<Props> = ({ isOpen, playlist, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      {
        playlist.id &&
        <div className='modal-wrapper'>
          <div className='modal-container'>
            <div className='created-message'>
              <h1>Glorious Victory!</h1>
              <p>Your playlist is created and waiting for you in your Spotify account.</p>
              <a href={playlist.uri}>Open in Spotify</a>
              <a href={playlist.external_urls.spotify} target='_blank'>Open in browser</a>
            </div>
            <div className='playlist-info'>
              {playlist.cover && <img src={playlist.cover.url} alt="Playlist Image" className='cover-image'/>}
              <p>{playlist.name}</p>
            </div>
          </div>
        </div>
      }
    </Modal>
  );
}

export default PlaylistCreatedModal;