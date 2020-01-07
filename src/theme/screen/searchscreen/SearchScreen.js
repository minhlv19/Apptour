import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, Slider, TextInput} from "react-native";
import RangeSlider from 'rn-range-slider';

class SearchScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection:'column'}}>
                <View style={{flexDirection: 'row', margin: 10}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{width: 20, height: 45, justifyContent: 'flex-end'}}>
                            <Image style={{width: 20, height: 20,}}
                                   source={require('../../../accset/images/Icon/calendar.png')}/>
                        </View>
                        <View style={{marginLeft: 10,}}>
                            <Text style={{color: '#8e8e8e', fontSize: 16}}>Check-In Date</Text>
                            <Text style={{borderBottomWidth: 1, width: 130, padding: 2}}>dd/mm/yyyy </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{width: 20, height: 45, justifyContent: 'flex-end'}}>
                            <Image style={{width: 20, height: 20,}}
                                   source={require('../../../accset/images/Icon/calendar.png')}/>
                        </View>
                        <View style={{marginLeft: 10,}}>
                            <Text style={{color: '#8e8e8e', fontSize: 16}}>Durations</Text>
                            <Text style={{borderBottomWidth: 1, width: 130, padding: 2}}>dd/mm/yyyy </Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', margin: 10,}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{width: 20, height: 45, justifyContent: 'flex-end'}}>
                            <Image style={{width: 20, height: 20,}}
                                   source={require('../../../accset/images/Icon/calendar.png')}/>
                        </View>
                        <View style={{marginLeft: 10,}}>
                            <Text style={{color: '#8e8e8e', fontSize: 16}}>Check-Out Date</Text>
                            <Text style={{borderBottomWidth: 1, width: 130, padding: 2}}>dd/mm/yyyy </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{width: 20, height: 45, justifyContent: 'flex-end'}}>
                            <Image style={{width: 20, height: 20,}}
                                   source={require('../../../accset/images/Icon/calendar.png')}/>
                        </View>
                        <View style={{marginLeft: 10,}}>
                            <Text style={{color: '#8e8e8e', fontSize: 16}}>Tour Guide</Text>
                            <Text style={{borderBottomWidth: 1, width: 130, padding: 2}}>dd/mm/yyyy </Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', margin: 10,}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{width: 20, height: 50, justifyContent: 'flex-end'}}>
                            <Image style={{width: 20, height: 20,}}
                                   source={require('../../../accset/images/Icon/calendar.png')}/>
                        </View>
                        <View style={{marginLeft: 10,}}>
                            <Text style={{color: '#8e8e8e', fontSize: 16}}>Check-Out Date</Text>
                            <View style={{borderWidth: 1, borderRadius: 20}}>
                                <TextInput style={{ width: 130,paddingLeft:10, height:40 }}>0</TextInput>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{width: 20, height: 50, justifyContent: 'flex-end'}}>
                            <Image style={{width: 20, height: 20,}}
                                   source={require('../../../accset/images/Icon/calendar.png')}/>
                        </View>
                        <View style={{marginLeft: 10}}>
                            <Text style={{color: '#8e8e8e', fontSize: 16}}> </Text>
                            <View style={{borderWidth: 1, borderRadius: 20}}>
                                <TextInput style={{width: 130, paddingLeft: 10, height:40}}>0</TextInput>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', margin: 10,}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{width: 20, height: 1, justifyContent: 'flex-end'}}>
                        </View>
                        <View style={{flex:1, fadeDuration:'row'}}>
                            <RangeSlider
                                style={{width:300, height: 55, marginTop:-30}}
                                gravity={'center'}
                                min={0}
                                max={100000}
                                step={1}
                                selectionColor="#3df"
                                blankColor="#FF0000"
                                onValueChanged={(low, high, fromUser) => {
                                    this.setState({rangeLow: low, rangeHigh: high})
                                }}/>
                            {/*<View style={{height:1, backgroundColor:'#000'}}>*/}

                            {/*</View>*/}
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', margin: 10,}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{width: 20, height: 50, justifyContent: 'flex-end'}}>
                            <Image style={{width: 20, height: 20,}}
                                   source={require('../../../accset/images/Icon/calendar.png')}/>
                        </View>
                        <View style={{marginLeft: 10,}}>
                            <Text style={{color: '#8e8e8e', fontSize: 16}}>Guest</Text>
                            <View style={{borderBottomWidth: 1,width:300 , flexDirection:'row'}}>
                                <Text style={{ padding: 2,paddingLeft:10, fontSize:16 }}>1 guest </Text>
                                <Text style={{fontSize:16, color:'#787878'}}>( 1 Adult - 0 Child - 0 Infant )</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', margin: 10,}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{width: 20, height: 50, justifyContent: 'flex-end'}}>
                            <Image style={{width: 20, height: 20,}}
                                   source={require('../../../accset/images/Icon/calendar.png')}/>
                        </View>
                        <View style={{marginLeft: 10,}}>
                            <Text style={{color: '#8e8e8e', fontSize: 16}}>Localhost</Text>
                            <View style={{borderBottomWidth: 1,width:300 , flexDirection:'row'}}>
                                <Text style={{ padding: 2,paddingLeft:10, fontSize:16 }}>Choose localhost </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'flex-end'}}>
                    <TouchableOpacity style={{backgroundColor:'red',alignItems:'center', }}>
                        <Text style={{fontSize:18, padding:10, color:'#fff', }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default SearchScreen;
