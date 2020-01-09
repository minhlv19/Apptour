import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, Slider, TextInput, PanResponder, Alert} from "react-native";
import RangeSlider from 'rn-range-slider';
import {Logo, MenuButton} from "../../components/header";

class SearchScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()}/>,
            headerTitle: <Logo/>,
            headerBackTitle: "Home",
            headerStyle: {
                backgroundColor: 'red'
            },
            headerLayoutPreset: "center",
        };
    };

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    _GetonPressButton() {
        Alert.alert(
            'Warning',
            'Please select day',
        );
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{margin: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <View>
                                <Text style={{color: '#8e8e8e', fontSize: 16, marginLeft: 30}}>Check-In Date</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                this._GetonPressButton()
                            }} style={{flexDirection: 'row'}}>
                                <View style={{width: 20, height: 25, justifyContent: 'flex-end'}}>
                                    <Image style={{width: 20, height: 20,}}
                                           source={require('../../../accset/images/Icon/calendar_red.png')}/>
                                </View>
                                <View style={{marginLeft: 10,}}>
                                    <Text style={{borderBottomWidth: 1, width: 130, padding: 2}}>dd/mm/yyyy </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, marginLeft: 10}}>
                            <View><Text style={{color: '#8e8e8e', fontSize: 16, marginLeft: 30}}>Durations</Text></View>
                            <TouchableOpacity onPress={() => {
                                this._GetonPressButton()
                            }} style={{flexDirection: 'row'}}>
                                <View style={{width: 20, height: 25, justifyContent: 'flex-end'}}>
                                    <Image style={{width: 20, height: 20,}}
                                           source={require('../../../accset/images/Icon/ic_passage-of-time.png')}/>
                                </View>
                                <View style={{marginLeft: 10,}}>
                                    <Text style={{borderBottomWidth: 1, width: 130, padding: 2}}>0 night(s) </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                        <View>
                            <View><Text style={{color: '#8e8e8e', fontSize: 16, marginLeft: 30}}>Check-Out
                                Date</Text></View>
                            <TouchableOpacity onPress={() => {
                                this._GetonPressButton()
                            }} style={{flexDirection: 'row', flex: 1}}>
                                <View style={{width: 20, height: 25, justifyContent: 'flex-end'}}>
                                    <Image style={{width: 20, height: 20,}}
                                           source={require('../../../accset/images/Icon/calendar_red.png')}/>
                                </View>
                                <View style={{marginLeft: 10,}}>
                                    <Text style={{borderBottomWidth: 1, width: 130, padding: 2}}>dd/mm/yyyy </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, marginLeft: 10}}>
                            <View><Text style={{color: '#8e8e8e', fontSize: 16, marginLeft: 30}}>Tour
                                Guide</Text></View>
                            <TouchableOpacity onPress={() => {
                                this._GetonPressButton()
                            }} style={{flexDirection: 'row'}}>
                                <View style={{width: 20, height: 25, justifyContent: 'flex-end'}}>
                                    <Image style={{width: 20, height: 20,}}
                                           source={require('../../../accset/images/Icon/ic_slating-flag.png')}/>
                                </View>
                                <View style={{marginLeft: 10,}}>
                                    <Text style={{borderBottomWidth: 1, width: 130, padding: 2}}>No</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{flexDirection: 'row', marginTop: 5,}}>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <View style={{width: 20, height: 45, justifyContent: 'flex-end'}}>
                                <Image style={{width: 20, height: 20,}}
                                       source={require('../../../accset/images/Icon/ic_min.png')}/>
                            </View>
                            <View style={{marginLeft: 10,}}>
                                <Text style={{color: '#8e8e8e', fontSize: 16}}>Price</Text>
                                <View style={{borderWidth: 1, borderRadius: 20}}>
                                    <TextInput style={{width: 130, paddingLeft: 10, height: 40}}>0</TextInput>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <View style={{width: 20, height: 45, justifyContent: 'flex-end'}}>
                                <Image style={{width: 20, height: 20,justifyContent:'center'}}
                                       source={require('../../../accset/images/Icon/ic_max.png')}/>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={{color: '#8e8e8e', fontSize: 16}}> </Text>
                                <View style={{borderWidth: 1, borderRadius: 20}}>
                                    <TextInput style={{width: 130, paddingLeft: 10, height: 40}}>0</TextInput>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', margin: 10,}}>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <View style={{width: 20, height: 1, justifyContent: 'flex-end'}}>
                            </View>
                            <View style={{flex: 1, fadeDuration: 'row'}}>
                                <RangeSlider
                                    style={{width: 300, height: 55, marginTop: -25}}
                                    gravity={'center'}
                                    min={0}
                                    max={100000}
                                    step={1}
                                    selectionColor="#3df"
                                    blankColor="#FF0000"
                                    onValueChanged={(low, high, fromUser) => {
                                        this.setState({rangeLow: low, rangeHigh: high})
                                    }}/>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={{color: '#8e8e8e', fontSize: 16, marginLeft: 30}}>Guest</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            this._GetonPressButton()
                        }} style={{flexDirection: 'row', marginTop: 5,}}>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <View style={{width: 20, height: 25, justifyContent: 'flex-end'}}>
                                    <Image style={{width: 20, height: 20,}}
                                           source={require('../../../accset/images/Icon/ic_user.png')}/>
                                </View>
                                <View style={{marginLeft: 10,}}>
                                    <View style={{borderBottomWidth: 1, width: 300, flexDirection: 'row'}}>
                                        <Text style={{padding: 2, fontSize: 16}}>1 guest </Text>
                                        <Text style={{fontSize: 16, color: '#787878'}}>( 1 Adult - 0 Child - 0 Infant
                                            )</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10,}}>
                        <View>
                            <Text style={{color: '#8e8e8e', fontSize: 16, marginLeft:30}}>Localhost</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            this._GetonPressButton()
                        }} style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <View style={{width: 20, height: 25, justifyContent: 'flex-end'}}>
                                    <Image style={{width: 20, height: 20,}}
                                           source={require('../../../accset/images/Icon/ic_gps.png')}/>
                                </View>
                                <View style={{marginLeft: 10,}}>
                                    <View style={{borderBottomWidth: 1, width: 300, flexDirection: 'row'}}>
                                        <Text style={{padding: 2, fontSize: 16}}>Choose localhost </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <TouchableOpacity style={{backgroundColor: 'red', alignItems: 'center',}}>
                        <Text style={{fontSize: 18, padding: 10, color: '#fff',}}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default SearchScreen;
