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
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    }, {
        time: '3',
        title: 'Event 3',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    }, {
        time: '4',
        title: 'Event 4',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
];

class TourDetailDrawer extends Component {
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
                        <View style={styles.view_touchableOpacity}>
                            <TouchableOpacity style={styles.touchableOpacity_img}>
                                <Image style={{
                                    width: 25,
                                    height: 25,
                                    justifyContent: 'center',
                                }}
                                       source={require('../../accset/images/Icon/pen.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex: 1,
                            marginTop: 15,
                            marginLeft: 15,
                            padding: 10,
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#fff',
                                width: 50,
                                marginBottom: 5,
                                borderRadius: 10,
                                alignItems: 'center'
                            }}>
                                <Text style={{color: 'red', fontWeight: 'bold'}}>230 $</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                width: 100,
                                alignItems: 'center'
                            }}>
                                <Text>22/5 - 03/06</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view_redriver}>
                            <View style={{paddingBottom: 5}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Kham Pha Anh Quoc</Text>
                                <Text style={{color: '#ff6c3c'}}>Red River Tour</Text>
                                <Text style={{color: '#656565'}}>2 Days -(Chuong trinh mua thu Anh - Scotland)</Text>
                                <View style={{flexDirection: 'row', marginBottom: 5, marginTop: 5}}>
                                    <Image style={{width: 10, height: 10, marginLeft: 5}}
                                           source={require('../../accset/images/Icon/favourites.png')}/>
                                    <Image style={{width: 10, height: 10, marginLeft: 5}}
                                           source={require('../../accset/images/Icon/favourites.png')}/>
                                    <Image style={{width: 10, height: 10, marginLeft: 5}}
                                           source={require('../../accset/images/Icon/favourites.png')}/>
                                    <Image style={{width: 10, height: 10, marginLeft: 5}}
                                           source={require('../../accset/images/Icon/favourites.png')}/>
                                    <Image style={{width: 10, height: 10, marginLeft: 5}}
                                           source={require('../../accset/images/Icon/favourites.png')}/>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                    <View style={[styles.view_moutain, {backgroundColor: '#e7181f'}]}>
                                        <Text style={styles.text_moutain}>Moutain</Text>
                                    </View>
                                    <View style={[styles.view_moutain, {backgroundColor: '#e7181f', marginLeft: 10,}]}>
                                        <Text style={styles.text_moutain}>Beach</Text>
                                    </View>
                                    <View style={[styles.view_moutain, {backgroundColor: '#e7c010', marginLeft: 10,}]}>
                                        <Text style={styles.text_moutain}>Palace</Text>
                                    </View>
                                    <View style={[styles.view_moutain, {backgroundColor: '#e7c010', marginLeft: 10,}]}>
                                        <Text style={styles.text_moutain}>Museum</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.view_redriver}>
                            <View style={{paddingBottom: 5}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Information</Text>
                                <FlatList data={this.data} renderItem={({item}) => (<View>
                                        <Text style={{color: '#ff6c3c'}}>{item.title}</Text>
                                        <Text style={{color: '#656565'}}>{item.description}</Text>
                                    </View>
                                )}/>

                            </View>
                        </View>
                        <View style={styles.view_redriver}>
                            <View style={{paddingBottom: 5}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Rate & Review</Text>
                                <FlatList data={this.data} renderItem={({item}) => (<View>
                                        <Text style={{color: '#656565'}}>{item.description}</Text>
                                    </View>
                                )}/>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color: 'red'}}>Thang tran :</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        marginBottom: 5, marginTop: 5
                                    }}>
                                        <Image style={{width: 10, height: 10, marginLeft: 5}}
                                               source={require('../../accset/images/Icon/favourites.png')}/>
                                        <Image style={{width: 10, height: 10, marginLeft: 5}}
                                               source={require('../../accset/images/Icon/favourites.png')}/>
                                        <Image style={{width: 10, height: 10, marginLeft: 5}}
                                               source={require('../../accset/images/Icon/favourites.png')}/>
                                        <Image style={{width: 10, height: 10, marginLeft: 5}}
                                               source={require('../../accset/images/Icon/favourites.png')}/>
                                        <Image style={{width: 10, height: 10, marginLeft: 5}}
                                               source={require('../../accset/images/Icon/favourites.png')}/>
                                    </View>

                                </View>
                            </View>
                        </View>


                    </View>
                </ScrollView>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{flex: 1, borderRadius: 10, borderWidth: 1, borderColor: '#c8151b', margin: 10}}>
                        <Text style={{color: '#e7181f', textAlign: 'center', padding: 10}}>Lịch Trình</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, backgroundColor: '#e7181f', borderRadius: 10, margin: 10}}>
                        <Text style={{color: '#fff', textAlign: 'center', padding: 10}}>Book Tour</Text>
                    </TouchableOpacity>

                </View>
            </View>

        );
    }
}

export default TourDetailDrawer;
const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginTop: 20,
    },
    text_moutain: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 12
    },
    view_moutain: {
        width: '23%',
        padding: 3,
        borderRadius: 20
    },
    view_redriver: {
        flex: 2,
        backgroundColor: '#fff',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        elevation: 7,
        padding: 10,
        marginBottom: 20
    },
    touchableOpacity_img: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        marginBottom: 5,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    view_touchableOpacity: {
        flex: 1,
        margin: 10,
        marginTop: -180,
        padding: 10,
        alignItems: 'flex-end',
        elevation: 20,
    }
});
