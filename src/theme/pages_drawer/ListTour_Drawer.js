import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList} from 'react-native'
import {Logo, MenuButton} from "../../theme/components/header";
import Timeline from 'react-native-timeline-flatlist';

const items = [
    {
        time: '1',
        title: 'Kham Pha Anh Quoc 1',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
        time: '2',
        title: 'Kham Pha Anh Quoc 2',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    }, {
        time: '3',
        title: 'Kham Pha Anh Quoc 3',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    }, {
        time: '4',
        title: 'Event 4',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
];

class ListTourDrawer extends Component {
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
            <ScrollView>
                <View style={{flex: 1}}>
                    <FlatList data={this.data} renderItem={({item}) => (<View style={{margin: 10}}>
                            <View style={{flex: 1}}>
                                <Image style={{width: '100%', height: 160}}
                                       source={{uri: 'https://tour.dulichvietnam.com.vn/uploads/tour/du-lich-con-dao-1.JPG.jpg'}}/>
                            </View>
                            <View>
                                <View style={styles.view_TouchableOpacity_a}>
                                    <TouchableOpacity style={styles.touchableOpacity_a}>
                                        <Image style={{
                                            width: 25,
                                            height: 25,
                                            justifyContent: 'center',
                                        }}
                                               source={require('../../accset/images/Icon/pen.png')}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.view_b}>
                                    <View style={styles.view_text_a}>
                                        <Text style={{color: 'red', fontWeight: 'bold'}}>230 $</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <View style={styles.view_text_b}>
                                            <Text>22/5 - 03/06</Text>
                                        </View>
                                        <TouchableOpacity style={{marginLeft:10,backgroundColor: '#fff',
                                            borderRadius: 10,
                                            width: 25,
                                            height: 23,
                                            justifyContent: 'center',
                                            alignItems: 'center'}}>
                                            <Image style={{width:15, height: 15}} source={require('../../accset/images/audio.png')} />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                            <View>
                                <Text style={{fontWeight: 'bold', fontSize: 16,color: '#565656'}}>{item.title}</Text>
                                <Text style={{color: '#565656'}}>2 day</Text>
                            </View>
                        </View>
                    )}/>
                    <FlatList horizontal data={this.data} renderItem={({item}) => (<View style={{margin: 10}}>
                            <View style={{flex: 1}}>
                                <Image style={{width: 250, height: 160}}
                                       source={{uri: 'https://tour.dulichvietnam.com.vn/uploads/tour/du-lich-con-dao-1.JPG.jpg'}}/>
                            </View>
                            <View>
                                <View style={styles.view_TouchableOpacity_a}>
                                    <TouchableOpacity style={styles.touchableOpacity_a}>
                                        <Image style={{
                                            width: 25,
                                            height: 25,
                                            justifyContent: 'center',
                                        }}
                                               source={require('../../accset/images/Icon/pen.png')}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.view_b}>
                                    <View style={styles.view_text_a}>
                                        <Text style={{color: 'red', fontWeight: 'bold'}}>230 $</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <View style={styles.view_text_b}>
                                            <Text>22/5 - 03/06</Text>
                                        </View>
                                        <TouchableOpacity style={{marginLeft:10,backgroundColor: '#fff',
                                            borderRadius: 10,
                                            width: 25,
                                            height: 23,
                                            justifyContent: 'center',
                                            alignItems: 'center'}}>
                                            <Image style={{width:15, height: 15}} source={require('../../accset/images/audio.png')} />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                            <View>
                                <Text style={{fontWeight: 'bold', fontSize: 16,color: '#565656'}}>{item.title}</Text>
                                <Text style={{color: '#565656'}}>2 day</Text>
                            </View>
                        </View>
                    )}/>

                </View>
            </ScrollView>
        );
    }
}

export default ListTourDrawer;
const styles = StyleSheet.create({
    view_TouchableOpacity_a: {
        flex: 1,
        marginTop: -150,
        padding: 10,
        alignItems: 'flex-end',
        elevation: 20,
    },
    touchableOpacity_a: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        marginBottom: 5,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    view_b: {
        flex: 1,
        marginTop: 20,
        padding: 10,
    },
    view_text_a: {
        backgroundColor: '#fff',
        width: 50,
        marginBottom: 5,
        borderRadius: 10,
        alignItems: 'center'
    },
    view_text_b: {
        padding:2,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 100,
        alignItems: 'center'
    }
});
