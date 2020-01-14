import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList} from 'react-native'
import {Logo, MenuButton} from "../../theme/components/header";
import Timeline from 'react-native-timeline-flatlist';

const items = [
    {
        time: '1',
        title: 'Event 1',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        circleColor: '#009688',
        lineColor: '#009688',
    },
    {
        time: '2',
        title: 'Event 2',
        description:
            'Lorem Ipsum is simply dummy tex',
    },
    {
        time: '3',
        title: 'Event 3',
        description:
            'Lorem Ipsum is simply dummy tex',
    },
];

class CheckinfoDrawer extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <Image
                    source={require('../../accset/images/back.png')}
                    style={{width: 20, height: 20, marginLeft: 10}}
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

    constructor() {
        super();
        this.data = items;
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1}}>
                            <Image style={{width: '100%', height: 200}}
                                   source={{uri: 'https://tour.dulichvietnam.com.vn/uploads/tour/du-lich-con-dao-1.JPG.jpg'}}/>
                        </View>
                        <View style={{
                            flex: 2,
                            backgroundColor: '#fff',
                            margin: 15,
                            marginTop: -60,
                            borderRadius: 10,
                            elevation: 7,
                            padding: 10
                        }}>
                            <View style={{borderColor: '#969696', paddingBottom: 10}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Kham Pha Anh Quoc</Text>
                                <Text style={{color: '#ff6c3c'}}>Red River Tour</Text>
                                <View style={{borderWidth: 1, marginTop: 5, borderColor: '#cbcbcb'}}>
                                    <View style={{
                                        flex: 1,
                                        height: 40,
                                        backgroundColor: '#e1e1e1',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <Text style={{flex: 1, paddingLeft: 10}}>Số ngày </Text>
                                        <View style={{
                                            width: 30,
                                            height: 30,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#e7181f',
                                            marginRight: 10,
                                            borderRadius: 50,
                                        }}>
                                            <Text style={{color: '#fff'}}>{items.length}</Text>
                                        </View>
                                    </View>
                                    <Text style={{margin: 5, fontSize: 15}}>Lịch trình</Text>
                                    <FlatList data={this.data} renderItem={({item}) => (
                                        <View style={{flexDirection: 'row', margin: 10}}>
                                            <View style={{
                                                flex: 1,
                                                backgroundColor: '#e7181f',
                                                borderRadius: 100,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text
                                                    style={{color: '#fff', padding: 6, fontSize: 15}}>{item.time}</Text>
                                            </View>
                                            <View
                                                style={{
                                                    flex: 6, marginLeft: 5, borderWidth: 1, borderColor: '#cbcbcb',
                                                    justifyContent: 'center'
                                                }}>
                                                <Text style={{padding: 5, fontSize: 15}}>{item.title} </Text>
                                            </View>
                                            <TouchableOpacity style={{
                                                flex: 1,
                                                alignItems: 'center',
                                                borderColor: '#cbcbcb',
                                                borderWidth: 1
                                            }}>
                                                <Text style={{fontSize: 28}}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}/>
                                    <TouchableOpacity style={{
                                        marginLeft:10,
                                        marginBottom:10,
                                        width:35,
                                        height:35,
                                        padding:10,
                                        backgroundColor: '#e7181f',
                                        borderRadius: 100,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{fontSize: 24, color:'#fff'}}>+</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={{backgroundColor: 'red', margin: 10}}>
                    <Text style={{
                        color: '#fff',
                        textAlign: 'center', padding: 10
                    }}>Preview & Check Pricing</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

export default CheckinfoDrawer;
const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginTop: 20,
    },
});
