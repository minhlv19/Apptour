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
                <Text style={{fontSize:28, color:'red', fontWeight:'bold'}}>App Tour</Text>
                {/*<Image*/}
                {/*    source={require('../../accset/images/Icon/home_click.png')}*/}
                {/*    resizeMode="contain"*/}
                {/*    style={{*/}
                {/*        width: 50, height: 50,*/}
                {/*        alignSelf: 'center'*/}
                {/*    }}*/}
                {/*/>*/}
            </View>
        )
    }
}

export class MenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{backgroundColor:'red', marginLeft:10}} onPress={this.props.onPress}>

                <Image
                    source={require('../../accset/images/Icon/menu.png')}
                    style={{width: 50, height: 50}}
                />
            </TouchableOpacity>
        );
    }
}
