import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PageTitle: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>Animations</Text>
      <Text style={styles.subtitle}>Image transition between expo routes</Text>
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 32,
    color: '#38434D',
  },
});
