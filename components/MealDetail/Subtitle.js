import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: 'black',
    borderBottomWidth: 4,
    marginHorizontal: 24,
    marginVertical: 4,
  },
})
