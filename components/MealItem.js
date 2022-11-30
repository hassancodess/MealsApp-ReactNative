import React from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import MealDetails from './MealDetails'
import { useNavigation } from '@react-navigation/native'

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation()
  const handleClick = () => {
    navigation.navigate('MealDetail', { mealId: id })
  }
  return (
    <View style={styles.mealItem}>
      <Pressable onPress={handleClick}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
})
