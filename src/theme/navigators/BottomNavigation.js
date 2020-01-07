import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';
import {createAppContainer,} from 'react-navigation';
import {HomeScreenStack, SearchScreenStack} from "./screen-stack-navigators";


const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreenStack,
            navigationOptions: {
                tabBarLable: 'Home'
            }
        },
        Search: {
            screen: SearchScreenStack,
            navigationOptions: {
                tabBarLable: 'Search'
            }
        }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({

                tabBarIcon: ({focused, horizontal, tintColor}) => {
                    const {routeName} = navigation.state;

                    if (routeName === 'Home') {
                        return (
                            <Image
                                source={
                                    focused
                                        ? require('../../accset/images/Icon/home_click.png')
                                        : require('../../accset/images/Icon/home.png')
                                }
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        );
                    }else if (routeName === 'Search'){
                        return (
                            <Image
                                source={
                                    focused
                                        ? require('../../accset/images/Icon/zoom_click.png')
                                        : require('../../accset/images/Icon/zoom.png')
                                }
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        );
                    }
                }
            }
        )
    }
);
// const BOTTOM1 = createAppContainer(BottomTabNavigator);
export default BottomTabNavigator;
