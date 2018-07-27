import { Playlist } from './playlist.model';

const getPlaylist = (_, {id}) => {
	const playlist = await Playlist.findById(id).exec();
	if (!playlist) {
		throw new Error('Did not find playlist with id');
	}
	return playlist;
}

const allPlaylists = () => {
	return Playlist.find({}).exec();
}

export const playlistResolvers = {
	allPlaylists,
	Playlist: getPlaylist
}