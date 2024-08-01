import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SoundButton from '@/components/Button';
import { FlipInEasyX } from 'react-native-reanimated';

export default function Index() {
  return (
    <>
    <div style={styles.body}>
      <ThemedView style={styles.titleContainer}>
        <Image source={require('@/assets/images/jankydriftlogo.jpg')} style={{ alignSelf: 'center' }} />
        <ThemedText type="title">Sleep Sound Machine</ThemedText>
      </ThemedView>
        <SoundButton file={require('@/assets/sounds/ding.mp3')} title="Dos To Sleep"/>
        <SoundButton file={require('@/assets/sounds/ding.mp3')} title="Idle Eyes"/>
        <SoundButton file={require('@/assets/sounds/ding.mp3')} title="Wipers in the Wind"/>
        <SoundButton file={require('@/assets/sounds/ding.mp3')} title="Wipers in the Wind"/>
    </div>
    <div style={styles.footer}>
        <a style={styles.footerLink} href="">
            <img src="./assets/images/youtube.png" style={styles.linkImage}/>
        </a>
        <a style={styles.footerLink} href="">
            <img src="./assets/images/instagram.png" style={styles.linkImage}/>
        </a>
    </div>
</>
  );
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flexDirection: 'column',
        padding: 30,
    },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 30
  },
  footerLink: {
    width: 100,
    height: 50,
    textAlign: 'center'
  },
  linkImage: {
    width: 'auto',
    height: '100%',
  }
});
