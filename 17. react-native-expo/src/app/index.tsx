import * as Device from 'expo-device';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.heroSection}>
        <AnimatedIcon />
        <Text style={cssStyles.title}>Welcome to Expo</Text>
        <Text style={cssStyles.subTitle}>Saylani BATCH 18</Text>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: "red",
    padding: 20
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});


const cssStyles = StyleSheet.create({
  title: {
    color: "white"
  },
  subTitle: {
    color: "white"
  }
})