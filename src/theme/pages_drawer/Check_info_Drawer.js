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
                        <View style={styles.view_a}>
                            <View style={{ marginBottom: 5}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Kham Pha Anh Quoc</Text>
                                <Text style={{color: '#ff6c3c'}}>Red River Tour</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Text>Pricing :</Text>
                                    <Text>Duration :</Text>
                                </View>
                                <View style={{marginLeft: 10, marginBottom: 10}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'#c8151b',fontWeight:'bold'}}> 350 $</Text>
                                        <Text> (250 $)</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'#c8151b',fontWeight:'bold'}}> 4 days</Text>
                                        <Text> (2 Days)</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{borderBottomWidth: 1,flexDirection: 'row',borderColor: '#969696',paddingBottom: 10}}>
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
                            <View>
                                <Timeline
                                    style={styles.list}
                                    data={this.data}
                                    circleSize={15}
                                    circleColor="rgb(45,156,219)"
                                    lineColor="rgb(45,156,219)"
                                    timeContainerStyle={{minWidth: 30}}
                                    timeStyle={styles.timeTine_a}
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
    timeTine_a:{
        textAlign: 'center',
        backgroundColor: '#ff9797',
        color: 'white',
        padding: 5,
        borderRadius: 100,
    },
    view_a:{
        flex: 2,
        backgroundColor: '#fff',
        marginLeft: 15,
        marginRight: 15,
        marginTop: -80,
        borderRadius: 10,
        elevation: 7,
        padding: 10,
        marginBottom:20
    },
    view_moutain: {
        width: '23%',
        padding: 3,
        borderRadius: 20
    },
    text_moutain: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 12
    },
});
