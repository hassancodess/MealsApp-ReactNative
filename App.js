import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
