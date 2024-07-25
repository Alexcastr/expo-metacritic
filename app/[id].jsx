import { useState, useEffect } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import { Screen } from '../components/Screen';
import {Stack} from 'expo-router';
import { getGameDetails } from '../lib/metacritic';
import { ScrollView } from 'react-native';
import { Score } from '../components/Score';


export default function Detail() {
  const { id } = useLocalSearchParams();

  const [gameInfo, setGameInfo] = useState(null);


  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          headerTitle: 'Zelda game',
          headerLeft: () => {},
          headerRight: () => {}
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={'#fff'} size={'large'} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image source={{ uri: gameInfo.img }} className="mb-4 rounded" style={{width: 224, height:294}} />
            <Score  score={gameInfo.score} maxScore={100} />
            <Text className="text-white font-bold text-2xl">
              {gameInfo.title}
            </Text>
            <Text className="text-white/70 mt-4 text-left font-bold mb-8 text-base">
              {gameInfo.description}
            </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
