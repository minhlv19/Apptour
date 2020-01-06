import React from "react";
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "../screen/homescreen/HomeScreen";
import SearchScreen from "../screen/searchscreen/SearchScreen";
import BoockingScreen from "../screen/bookingscreen/BoockingScreen";
import AccountScreen from "../screen/accountscreen/AccountScreen";

export const HomeScreenStack = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    }
});
export const SearchScreenStack = createStackNavigator({
    SearchScreen: {
        screen: SearchScreen
    }
});
export const BoockingScreenStack = createStackNavigator({
    BoockingScreen: {
        screen: BoockingScreen
    }
});
export const AccountScreenStack = createStackNavigator({
    AccountScreen: {
        screen: AccountScreen
    }
});

