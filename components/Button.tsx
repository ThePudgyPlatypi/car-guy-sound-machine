import { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

interface Props {
  file: string;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SoundButton({file, title}: Props) {
  const [sound, setSound] = useState();
  let asset = file;

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(asset);
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title={title} onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    lineHeight: 24,
    paddingBottom: 30,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    lineHeight: 32,
    textAlign: 'center',
    paddingBottom: 30
   },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
