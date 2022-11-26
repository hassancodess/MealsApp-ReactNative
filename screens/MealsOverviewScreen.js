import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import MealItem from '../components/MealItem'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params

  const displayedMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0
  )

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (item) => item.id === categoryId
    ).title

    navigation.setOptions({
      title: categoryTitle,
    })
  }, [categoryId, navigation])

  const renderMealItem = ({ item }) => {
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    }
    return <MealItem {...mealItemProps} />
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
