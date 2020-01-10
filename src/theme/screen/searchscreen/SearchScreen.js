import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, Slider, TextInput, PanResponder, Alert, Picker, Modal} from "react-native";
import RangeSlider from 'rn-range-slider';
import {Logo, MenuButton} from "../../components/header";

class SearchScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()}/>,
            headerTitle: <Logo/>,
            headerBackTitle: "Home",
            headerLayoutPreset: "center",
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            choosenLabel: '',
            choosenindex: '',
            isVisible: false,
        };
    }

    _GetonPressButton() {
        Alert.alert(
            'Warning',
            'Please select day',
            // [
            //     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            //     {
            //         text: 'Cancel',
            //         onPress: () => console.log('Cancel Pressed'),
            //         style: 'cancel',
            //     },
            //     {text: 'OK', onPress: () => console.log('OK Pressed')},
            // ],
            // {cancelable: false},
        );
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
        })
    };

    _onPanResponderGrant(event, gestureState) {
        if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
            this.setState({isVisible: false});
        }
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.isVisible}
                    onRequestClose={() => {
                        this.setState({isVisible: false})
                    }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.3)'
                    }} {...this.panResponder.panHandlers}>
                        <View style={{
                            width: 400,
                            height: 340,
                            backgroundColor: '#fff', paddingLeft: 30, paddingRight: 30
                        }}>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <View style={{width: '33%', alignItems: 'center', justifyContent: 'center',}}>
                                    <Text>Adult</Text>
                                    <Text style={{color: '#9C9C9C'}}>Age 12+</Text>
                                </View>
                                <View style={{width: '33%', alignItems: 'center', justifyContent: 'center',}}>
                                    <Text>Child</Text>
                                    <Text style={{color: '#9C9C9C'}}>Age 2-11</Text>
                                </View>
                                <View style={{width: '33%', alignItems: 'center'}}>
                                    <Text>infant</Text>
                                    <Text style={{color: '#9C9C9C'}}>Bellow Age 2</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <View style={{width: '33%', alignItems: 'center', justifyContent: 'center',}}>
                                    <Text style={{color: '#9C9C9C', fontSize: 20}}>0</Text>
                                </View>
                                <View style={{width: '33%', alignItems: 'center', justifyContent: 'center',}}>
                                    <Text style={{color: '#9C9C9C', fontSize: 20}}>0</Text>
                                </View>
                                <View style={{width: '33%', alignItems: 'center'}}>
                                    <Text style={{color: '#9C9C9C', fontSize: 20}}>0</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <View style={{
                                    width: '33%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <Image style={{width: 25, height: 25,}}
                                           source={require('../../../accset/images/Icon/calendar.png')}/>
                                    <Text style={{color: '#9C9C9C', fontSize: 20, margin: 5, marginRight: 30}}>0</Text>
                                </View>
                                <View style={{
                                    width: '33%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                }}>
                                    <Image style={{width: 25, height: 25,}}
                                           source={require('../../../accset/images/Icon/calendar.png')}/>
                                    <Text style={{color: '#9C9C9C', fontSize: 20, margin: 5, marginRight: 30}}>0</Text>
                                </View>
                                <View style={{
                                    width: '33%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <Image style={{width: 25, height: 25,}}
                                           source={require('../../../accset/images/Icon/calendar.png')}/>
                                    <Text style={{color: '#9C9C9C', fontSize: 20, margin: 5, marginRight: 30}}>0</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <View style={{width: '33%', alignItems: 'center', justifyContent: 'center',}}>
                                    <Text style={{color: '#9C9C9C', fontSize: 20}}>0</Text>
                                </View>
                                <View style={{width: '33%', alignItems: 'center', justifyContent: 'center',}}>
                                    <Text style={{color: '#9C9C9C', fontSize: 20}}>0</Text>
                                </View>
                                <View style={{width: '33%', alignItems: 'center'}}>
                                    <Text style={{color: '#9C9C9C', fontSize: 20}}>0</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 30, borderTopWidth: 1}}>
                                <TouchableOpacity style={{
                                    width: '40%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor:'red',
                                    borderWidth: 1,
                                    margin: 20,
                                    borderRadius:5,
                                    borderBlockEndColor:'red'
                                }}>
                                    <Text style={{color: 'red' ,padding: 10,fontSize:18}}>Reset</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    width: '40%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderWidth: 1,
                                    borderColor:'red',
                                    margin: 20,
                                    borderRadius:5,
                                    backgroundColor:'red'}}>
                                    <Text style={{color: '#fff', padding: 10, fontSize:18}}>0</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
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
                                           source={require('../../../accset/images/Icon/calendar.png')}/>
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
                                           source={require('../../../accset/images/Icon/calendar.png')}/>
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
                                           source={require('../../../accset/images/Icon/calendar.png')}/>
                                </View>
                                <View style={{marginLeft: 10,}}>
                                    <Text style={{borderBottomWidth: 1, width: 130, padding: 2}}>dd/mm/yyyy </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, marginLeft: 10}}>
                            <View><Text style={{color: '#8e8e8e', fontSize: 16, marginLeft: 30}}>Tour
                                Guide</Text></View>
                            <TouchableOpacity style={{flexDirection: 'row'}}>
                                <View style={{width: 20, height: 25, justifyContent: 'flex-end'}}>
                                    <Image style={{width: 20, height: 20,}}
                                           source={require('../../../accset/images/Icon/calendar.png')}/>
                                </View>
                                <View style={{marginLeft: 10, borderBottomWidth: 1}}>
                                    <Picker
                                        style={{width: 130, height: 20}}
                                        selectedValue={this.state.choosenLabel}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({choosenLabel: itemValue, choosenindex: itemIndex})
                                        }>
                                        <Picker.Item label="Yes" value="yes"/>
                                        <Picker.Item label="No" value="no"/>
                                    </Picker>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 5,}}>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <View style={{width: 20, height: 45, justifyContent: 'flex-end'}}>
                                <Image style={{width: 20, height: 20,}}
                                       source={require('../../../accset/images/Icon/calendar.png')}/>
                            </View>
                            <View style={{marginLeft: 10,}}>
                                <Text style={{color: '#8e8e8e', fontSize: 16}}>Check-Out Date</Text>
                                <View style={{borderWidth: 1, borderRadius: 20}}>
                                    <TextInput style={{width: 130, paddingLeft: 10, borderColor: 'gray', height: 40}}
                                               keyboardType='numeric'
                                               maxLength={6}
                                    >0</TextInput>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <View style={{width: 20, height: 45, justifyContent: 'flex-end'}}>
                                <Image style={{width: 20, height: 20,}}
                                       source={require('../../../accset/images/Icon/calendar.png')}/>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={{color: '#8e8e8e', fontSize: 16}}> </Text>
                                <View style={{borderWidth: 1, borderRadius: 20}}>
                                    <TextInput style={{width: 130, paddingLeft: 10, borderColor: 'gray', height: 40}}
                                               keyboardType='numeric'
                                               maxLength={6}>0</TextInput>
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
                            this.setState({isVisible: true})
                        }} style={{flexDirection: 'row', marginTop: 5,}}>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <View style={{width: 20, height: 25, justifyContent: 'flex-end'}}>
                                    <Image style={{width: 20, height: 20,}}
                                           source={require('../../../accset/images/Icon/calendar.png')}/>
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
                    <View style={{marginTop: 10,}}>
                        <View>
                            <Text style={{color: '#8e8e8e', fontSize: 16, marginLeft: 30}}>Localhost</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            this._GetonPressButton()
                        }} style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <View style={{width: 20, height: 25, justifyContent: 'flex-end'}}>
                                    <Image style={{width: 20, height: 20,}}
                                           source={require('../../../accset/images/Icon/calendar.png')}/>
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

