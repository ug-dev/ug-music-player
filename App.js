import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import Progress from './src/components/progress';
import {
  AddQueue,
  GetDuration,
  PauseSong,
  PlaySong,
  SetupPlayer,
} from './src/player';

const App = () => {
  const [isInitComplete, setIsInitComplete] = useState(false);

  useEffect(() => {
    setIsInitComplete(SetupPlayer() && AddQueue());
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <Text>Hello ReactNative!</Text>
        {/* <Text>{TrackPlayer.getDuration()}</Text> */}
        <Button
          title="Play"
          disabled={!isInitComplete}
          onPress={() => PlaySong()}
        />
        <Button
          title="Pause"
          disabled={!isInitComplete}
          onPress={() => PauseSong()}
        />
        <Button
          title="Duration"
          disabled={!isInitComplete}
          onPress={() => GetDuration()}
        />
        <Progress />
      </View>
    </SafeAreaView>
  );
};

export default App;
