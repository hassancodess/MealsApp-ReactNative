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
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#404258' },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{ title: 'All Categories' }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            options={{ title: 'Meals Overview' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
