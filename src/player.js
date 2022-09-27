import TrackPlayer from 'react-native-track-player';

export var Track1 = {
  url: require('./library/track1.mp3'),
  title: 'On & On',
  artist: 'unknown',
};

export const SetupPlayer = async () => {
  await TrackPlayer.setupPlayer();
  return true;
};

export const AddQueue = async () => {
  await TrackPlayer.add([Track1]);
  return true;
};

export const PlaySong = () => {
  TrackPlayer.play();
  console.log('🚀 ~ file: player.js ~ line 19 ~ PlaySong ~ Playing');
};

export const PauseSong = () => {
  TrackPlayer.pause();
  console.log('🚀 ~ file: player.js ~ line 24 ~ PauseSong ~ Paused');
};

export const GetDuration = () => {
  console.log(
    '🚀 ~ file: player.js ~ line 31 ~ GetDuration ~ TrackPlayer.getDuration()',
    TrackPlayer.getDuration(),
  );
};
