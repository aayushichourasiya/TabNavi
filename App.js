import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

//Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons'

//Screens
const Home = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.txt}>Home Screen</Text>
    </View>
  )
}

const Settings = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.txt}>Settings</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName = 'Home'
          screenOptions = {({route}) => ({
            tabBarIcon: ({focused,color,size}) => {
              let iconName;

              if(route.name === 'Home'){
                iconName = focused ? 'home' : 'home-outline'
              }
              else if(route.name === 'Settings'){
                iconName = focused ? 'settings' : 'settings-outline'
              }

              return <Ionicons
                name = {iconName}
                size = {size}
                color = {color}
              />
            }
          })}
          tabBarOptions={{
            activeTintColor: '#6A1B4D',
            inactiveTintColor: '#000'
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt:{
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20
  }
})