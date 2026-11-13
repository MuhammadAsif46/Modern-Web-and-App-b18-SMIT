import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { Link } from "expo-router"
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function TabTwoScreen() {
    const safeAreaInsets = useSafeAreaInsets();
    const insets = {
        ...safeAreaInsets,
        bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
    };
    const theme = useTheme();

    const contentPlatformStyle = Platform.select({
        android: {
            paddingTop: insets.top,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            paddingBottom: insets.bottom,
        },
        web: {
            paddingTop: Spacing.six,
            paddingBottom: Spacing.four,
        },
    });

    return (
        <ScrollView
            style={[styles.scrollView, { backgroundColor: theme.background }]}
            contentInset={insets}
            contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}>
            <ThemedView style={styles.container}>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="subtitle">Dashboard</ThemedText>
                    <ThemedText style={styles.centerText} themeColor="textSecondary">
                        This starter app includes example{'\n'}code to help you get started.
                    </ThemedText>
                </ThemedView>
            </ThemedView>

            <View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container: {
        maxWidth: MaxContentWidth,
        flexGrow: 1,
    },
    titleContainer: {
        gap: Spacing.three,
        alignItems: 'center',
        paddingHorizontal: Spacing.four,
        paddingVertical: Spacing.six,
    },
    centerText: {
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.7,
    },
    linkButton: {
        flexDirection: 'row',
        paddingHorizontal: Spacing.four,
        paddingVertical: Spacing.two,
        borderRadius: Spacing.five,
        justifyContent: 'center',
        gap: Spacing.one,
        alignItems: 'center',
    },
    sectionsWrapper: {
        gap: Spacing.five,
        paddingHorizontal: Spacing.four,
        paddingTop: Spacing.three,
    },
    collapsibleContent: {
        alignItems: 'center',
    },
    imageTutorial: {
        width: '100%',
        aspectRatio: 296 / 171,
        borderRadius: Spacing.three,
        marginTop: Spacing.two,
    },
    imageReact: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
});
