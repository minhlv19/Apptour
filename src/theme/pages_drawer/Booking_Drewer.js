import React, {Component} from 'react';
import {View,Text , Image, TextInput,TouchableOpacity, ScrollView} from 'react-native'
import {Logo, MenuButton} from "../../theme/components/header";
class Booking_Drewer extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <Image
                    source={require('../../accset/images/back.png')}
                    style={{width:20,height:20,marginLeft:10}}
                />
            </TouchableOpacity>,
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
            <ScrollView>
                <View style={{flex:1}}>
                    <View style={{flex: 1}}>
                        <Image style={{width: '100%', height: 200}}
                               source={{uri: 'https://tour.dulichvietnam.com.vn/uploads/tour/du-lich-con-dao-1.JPG.jpg'}}/>
                    </View>
                    <View  style={{flex:2,
                        backgroundColor: '#fff' ,
                        margin:15,
                        marginTop:-60,
                        borderRadius:10,
                        elevation:7,
                        padding:10
                    }}>
                        <View style={{borderBottomWidth:1, borderColor:'#969696', paddingBottom:10}}>
                            <Text style={{fontWeight:'bold',fontSize:16}}>Kham Pha Anh Quoc</Text>
                            <Text style={{color:'#ff6c3c'}}>Red River Tour</Text>
                            <Text style={{color:'#656565'}}>2 Days -(Chuong trinh mua thu Anh - Scotland)</Text>
                            <View style={{flexDirection:'row'}}>
                                <View style={{backgroundColor: '#e7181f',padding:3, borderRadius:20}}>
                                    <Text style={{fontSize:12,color:'#fff', textAlign:'center',paddingLeft:5,paddingRight:5}}>250 $</Text>
                                </View>
                                <View style={{backgroundColor: '#e7181f', marginLeft:10,padding:3, borderRadius:20}}>
                                    <Text style={{color:'#fff' , textAlign:'center',paddingLeft:5,paddingRight:5}}>22/05 - 03/06</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text  style={{fontWeight:'bold',fontSize:15}}>Booking Information</Text>
                            <View style={{marginTop:10}}>
                                <Text>Name</Text>
                                <TextInput style={{width:'100%', height:40, borderWidth:1, borderColor:'#c0c0c0'}}/>
                            </View>
                            <View style={{marginTop:10}}>
                                <Text>Phone Number</Text>
                                <TextInput style={{width:'100%', height:40, borderWidth:1, borderColor:'#c0c0c0'}}/>
                            </View>
                            <View style={{marginTop:10}}>
                                <Text>Email</Text>
                                <TextInput style={{width:'100%', height:40, borderWidth:1, borderColor:'#c0c0c0'}}/>
                            </View>
                        </View>
                        <TouchableOpacity style={{backgroundColor: 'red', marginTop:10}}>
                            <Text style={{color:'#fff',textAlign:'center', padding:10}}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Booking_Drewer;
