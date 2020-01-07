import React from 'react';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createAppContainer,} from 'react-navigation';
import BottomTabNavigator from './BottomNavigation';
import {
    HomeScreenStack
} from './screen-stack-navigators';
import {Text, View, SafeAreaView, ScrollView, Image, StatusBar, TouchableOpacity} from 'react-native';

const CustomDrawer = (props) => (
    <SafeAreaView style={{flex: 1,}}>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>

);
const DrawerNavigator = createDrawerNavigator({

    HomeScreen: BottomTabNavigator,
}, {
    contentComponent: CustomDrawer,
    drawerLockMode: 'unlocked'

});
const DrawerApp_Tour = createAppContainer(DrawerNavigator);
export default DrawerApp_Tour;
