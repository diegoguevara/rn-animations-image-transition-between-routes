import PageTitle from 'components/PageTitle';
import { items } from 'data/data';
import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ScrollView>
          <PageTitle />

          {items.map((item, index) => (
            <Link
              key={index}
              href={{
                pathname: '/details',
                params: {
                  id: item.id,
                  title: item.title,
                  desc: item.description,
                  image: item.image,
                },
              }}
              asChild>
              <TouchableOpacity>
                <View style={styles.items} key={`image-${item.id}`}>
                  {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
                  <Animated.Image
                    // This is the key to the shared transition
                    // It must be unique for each item
                    // It must be the same in the source and destination
                    sharedTransitionTag={`image-${item.id}`}
                    source={{ uri: item.image }}
                    style={styles.image}
                  />
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#364252',
  },
  subtitle: {
    color: '#38434D',
    fontSize: 16,
  },
  items: {
    flexDirection: 'row',
    padding: 16,
    gap: 10,
  },
  image: {
    borderRadius: 8,
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
  },
});
