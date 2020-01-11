import React, {Component} from 'react';
import {View,Text} from 'react-native'
import {Logo, MenuButton} from "../../components/header";

class AccountScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()}/>,
            headerTitle: <Logo/>,
            headerBackTitle: "Home",
            headerLayoutPreset: "center",
            headerStyle: {
                backgroundColor: '#cbcbcb'
            },
        };
    };
    render() {
        return (
            <View>
                <Text>Account Screen</Text>
            </View>
        );
    }
}

export default AccountScreen;
