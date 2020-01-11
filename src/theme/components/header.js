import React from 'react'
import {Image, TouchableOpacity, Dimensions, View, Text} from 'react-native';

const deviceWidth = Dimensions.get("window").width;

export class Logo extends React.Component {
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        return (
            <View style={{flex: 0.8, alignItems:'center'}}>
                {/*<Text style={{fontSize:20, color:'#fff', fontWeight:'bold'}}>App Tour</Text>*/}
                <Image
                    source={require('../../accset/images/Icon/logo.png')}
                    resizeMode="contain"
                    style={{
                        width: 160, height: 100,
                        alignSelf: 'center'
                    }}
                />
            </View>
        )
    }
}

export class MenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{ marginLeft:10}} onPress={this.props.onPress}>

                <Image
                    source={require('../../accset/images/Icon/menu.png')}
                    style={{width: 26, height:26}}
                />
            </TouchableOpacity>
        );
    }
}
