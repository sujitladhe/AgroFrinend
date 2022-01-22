import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, Image, View, Text, StyleSheet, LogBox } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard } from './src/screens/Dashboard';
import { Profile } from './src/screens/Profile';
import { LanguageSetting } from './src/screens/LanguageSetting';
import { Logout } from './src/screens/Logout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View style={{ backgroundColor: '#ffbb00', alignItems: 'center', paddingBottom: 30, marginTop: -5}}>
        <Image style={styles.drawerIcon} source={require('./assets/icon.png')} />
        </View>
      </View>
      <DrawerItemList {...props} />
      
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
      <Drawer.Navigator initialRouteName='Dashboard' drawerContent={(props) => <CustomDrawerContent {...props}/>}
        screenOptions={{headerStyle: {backgroundColor: '#ffbb00'}}}
      >
        <Drawer.Screen name="Dashboard" component={Dashboard} options={{drawerIcon: ({color})=> <Icon name='home' size={30} color={color}/> }}/>
        <Drawer.Screen name="Profile" component={Profile} options={{drawerIcon: ({color})=> <Icon name='account' size={30} color={color}/> }}/>
        <Drawer.Screen name="LanguageSetting" component={LanguageSetting} options={{drawerIcon: ({color})=> <Icon name='checkbox-marked-outline' size={30} color={color}/> }}/>
        <Drawer.Screen name="Logout" component={Logout} options={{drawerIcon: ({color})=> <Icon name='logout' size={30} color={color}/> }}/>
      </Drawer.Navigator>
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: 'orange',
    background: '#d9fff8',
    card: '#FFFFFF',
    text: 'black',
    // border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerIcon: {
    width: 110,
    height: 110,
    marginTop: 10,
},
});