import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View, Text, Image } from 'react-native';
import Animated from 'react-native-reanimated';

export default function Details() {
  const { title, desc, image, id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* <Image source={{ uri: image as string }} style={{ ...styles.image }} /> */}
        <Animated.Image
          sharedTransitionTag={`image-${id}`}
          source={{ uri: image as string }}
          style={{ ...styles.image }}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{desc}.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
  image: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    width: '100%',
    height: 300,
    marginBottom: 24,
  },
});
