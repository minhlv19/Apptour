import React from "react";
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "../screen/homescreen/HomeScreen";
import SearchScreen from "../screen/searchscreen/SearchScreen";
import BoockingScreen from "../screen/bookingscreen/BoockingScreen";
import AccountScreen from "../screen/accountscreen/AccountScreen";
import Booking_Drewer from "../pages_drawer/Booking_Drewer";
import CheckinfoDrawer from "../pages_drawer/Check_info_Drawer";
import BookTourDrawer from "../pages_drawer/BookTour_Drawer";
import CustomizeTourDrawer from "../pages_drawer/CustomizeTour_Drawer";
import TourDetailDrawer from "../pages_drawer/TourDetail_Drawer";
import ListTourDrawer from "../pages_drawer/ListTour_Drawer";
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

export const BookingDrewerNavigator = createStackNavigator({
    Booking: {
        screen: Booking_Drewer
    }
});
export const CheckinfoDrawerNavigator = createStackNavigator({
    CheckinfoDrawer: {
        screen: CheckinfoDrawer
    }
});
export const BookTourDrawerNavigator = createStackNavigator({
    BookTourDrawer: {
        screen: BookTourDrawer
    }
});
export const CustomizeTourDrawerNavigator = createStackNavigator({
    CustomizeTourDrawer: {
        screen: CustomizeTourDrawer
    }
});
export const TourDetailDrawerDrawerNavigator = createStackNavigator({
    TourDetailDrawer: {
        screen: TourDetailDrawer
    }
});
export const ListTourDrawerDrawerNavigator = createStackNavigator({
    ListTourDrawer: {
        screen: ListTourDrawer
    }
});
export const AccountScreenStack = createStackNavigator({
    AccountScreen: {
        screen: AccountScreen
    }
});

