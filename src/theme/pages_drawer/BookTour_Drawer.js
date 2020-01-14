import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
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

class BookTourDrawer extends Component {
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
                            flex: 1,
                            margin: 10,
                            marginTop: -180,
                            padding: 10,
                            alignItems: 'flex-end',
                            elevation: 20,
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#fff',
                                width: 40,
                                height: 40,
                                marginBottom: 5,
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                elevation: 10,
                            }}>
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
                        <View style={{
                            flex: 2,
                            backgroundColor: '#fff',
                            marginLeft: 15,
                            marginRight: 15,
                            borderRadius: 10,
                            elevation: 7,
                            padding: 10,
                            marginBottom:20
                        }}>
                            <View style={{borderBottomWidth: 1, borderColor: '#969696', paddingBottom: 10}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Kham Pha Anh Quoc</Text>
                                <Text style={{color: '#ff6c3c'}}>Red River Tour</Text>
                            </View>
                            <View>
                                <Timeline
                                    style={styles.list}
                                    data={this.data}
                                    circleSize={15}
                                    circleColor="rgb(45,156,219)"
                                    lineColor="rgb(45,156,219)"
                                    timeContainerStyle={{minWidth: 30}}
                                    timeStyle={{
                                        textAlign: 'center',
                                        backgroundColor: '#ff9797',
                                        color: 'white',
                                        padding: 5,
                                        borderRadius: 100,
                                    }}
                                    descriptionStyle={{color: 'gray'}}
                                    options={{
                                        style: {paddingTop: 0},
                                    }}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={{backgroundColor: 'red'}}>
                    <Text style={{
                        color: '#fff',
                        textAlign: 'center', padding: 10
                    }}>Book Tour</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

export default BookTourDrawer;
const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginTop: 20,
    },
});
