import { Song } from './song.model';

const getSong = (_, {id}) => {
	const song = await Song.findById(id).exec();
	if (!song) {
		throw new Error('Cannot find song with ID');
	}
	return song;
};

const allSongs = () => {
	return Song.find({}).exec();
};

export const songResolvers = {
	Query: {
		allSongs,
		Song: getSong
	}
}