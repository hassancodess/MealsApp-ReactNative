import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import { MEALS } from '../data/dummy-data'
import IconButton from '../components/IconButton'

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  const handleOnPress = () => {
    console.log('Pressed')
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={handleOnPress} icon='star' color='white' />
      },
    })
  }, [navigation])

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        {/* {selectedMeal.ingredients.map((ingredient, index) => (
        <Text key={index}>{ingredient}</Text>
      ))} */}
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
        {/* {selectedMeal.steps.map((step, index) => (
        <Text key={index}>{step}</Text>
      ))} */}
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  listContainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 30,
  },
})
