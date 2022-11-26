import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import MealItem from '../components/MealItem'
import { MEALS } from '../data/dummy-data'

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params

  const displayedMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0
  )
  const renderMealItem = ({ item }) => {
    return <MealItem title={item.title} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
