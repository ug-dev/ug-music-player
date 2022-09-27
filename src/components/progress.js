import React from 'react';
import {Text, View} from 'react-native';
import {useProgress} from 'react-native-track-player';
import {ProgressBar} from 'react-native-paper';

const Progress = () => {
  const progress = useProgress();

  return (
    <View>
      <Text>{progress.position}</Text>
      <ProgressBar progress={progress.position} color={'lightblue'} />
    </View>
  );
};
export default Progress;
