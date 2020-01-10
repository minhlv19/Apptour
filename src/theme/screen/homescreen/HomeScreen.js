import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    StyleSheet,
    Modal,
    PanResponder,
    Alert
} from 'react-native';
import {Logo, MenuButton} from '../../components/header';
import RangeSlider from 'rn-range-slider';
import HomeCalender from "./HomeCalender";
import HomeMonth from "./HomeMonth";

const items_n = [{
    id: 2,
    name: 'asdj 2',
    addserr: 'asd 2',
    imagerm: 'data:image/jpeg;base64,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 '
}, {
    id: 3,
    name: 'asdj',
    addserr: 'asd',
    imagerm: 'data:image/jpeg;base64,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'
},];

class HomeScreen extends Component {
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
            data: items_n,
            isVisible: false,
            val: 1,
        }
        // this.setState({
        //     cards: cards.slice().filter(card => card.key !== key),
        // });
    }

    _onPressButton() {
        Alert.alert(
            'Warning',
            'Please select day',
        );
    }

    renderElement() {
        if (this.state.val === 1) {
            return <HomeCalender/>;
        } else {
            return <HomeMonth/>;
        }
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
            <ScrollView>
                <View style={{flex: 1}}>
                    <Modal
                        animationType={'slide'}
                        transparent={true}
                        visible={this.state.isVisible}
                        onRequestClose={() => {
                            this.setState({isVisible: false})
                        }}>
                        <View style={styles.view_modal} {...this.panResponder.panHandlers}>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={[styles.check_TouchableOpacity, {marginRight: 10}]}
                                                  onPress={() => this.setState({val: 1})}>
                                    <Text style={{color: 'red', textAlign: 'center'}}>Calender</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.check_TouchableOpacity}
                                                  onPress={() => this.setState({val: 2})}>
                                    <Text style={{color: 'red', textAlign: 'center'}}>Month</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modal}>
                                <View style={{marginLeft: 10, marginTop: 20, marginRight: 10}}>
                                    {this.renderElement()}
                                </View>

                            </View>
                        </View>
                    </Modal>
                    <View style={{flex: 2}}>
                        <Image style={{width: '100%', height: 200}}
                               source={{uri: 'data:image/png;base64,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'}}/>
                    </View>
                    <View style={styles.view_row}>
                        <View style={{flexDirection: 'row',}}>
                            <View style={{flex: 1}}>
                                <Text style={styles.text_check}>Check-in date</Text>
                                <TouchableOpacity style={styles.view_check} onPress={() => {
                                    this.setState({isVisible: true})
                                }}>
                                    <Text>dd/mm/yyyy</Text>
                                    <View style={{marginLeft: 20}}>
                                        <Image style={{width: 20, height: 20,}}
                                               source={require('../../../accset/images/Icon/home.png')}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={styles.text_check}>Check-out date</Text>
                                <TouchableOpacity style={styles.view_check} onPress={() => {
                                    this.setState({isVisible: true})
                                }}>
                                    <Text>dd/mm/yyyy</Text>
                                    <View style={{marginLeft: 20}}>
                                        <Image style={{width: 20, height: 20,}}
                                               source={require('../../../accset/images/Icon/home.png')}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text_Durations}>Durations</Text>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10}}>
                                <View style={styles.view_RangeSlider}>
                                    <RangeSlider
                                        style={{width: 190, height: 80, marginBottom: 40}}
                                        gravity={'center'}
                                        min={0}
                                        max={50}
                                        step={1}
                                        selectionColor="#3df"
                                        blankColor="#FF0000"
                                        onValueChanged={(low, high, fromUser) => {
                                            this.setState({rangeLow: low, rangeHigh: high})
                                        }}/>
                                    <Text style={{fontSize: 16, padding: 10}}>50</Text>
                                </View>
                                <TouchableOpacity style={styles.view_TouchableOpacity} onPress={() => {
                                    this._onPressButton()
                                }}>
                                    <Image style={{width: 20, height: 20,}}
                                           source={require('../../../accset/images/Icon/home.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 2, marginLeft: 10}}>
                        <Text style={styles.text_Destinations}>On- going Promotion </Text>
                        <FlatList horizontal data={this.state.data} renderItem={({item}) =>
                            <View style={{marginRight: 10, marginTop: 10}}>
                                {/*<Text>{item.name}</Text>*/}
                                <Image style={{width: 200, height: 140}} source={{uri: item.imagerm}}/>
                            </View>}/>
                    </View>
                    <View style={{flex: 2, marginLeft: 10, marginTop: 10}}>
                        <Text style={styles.text_Destinations}>Destinations </Text>
                        <Text style={{marginBottom: 10}}>Big Deals in hottest Destinations. Book NOW </Text>
                        <FlatList horizontal data={this.state.data} renderItem={({item}) =>
                            <View tyle={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                            }}>
                                <View>
                                    <Text>{item.name}</Text>
                                </View>
                                <View>
                                    <Image style={{width: 250, height: 300, marginRight: 10}}
                                           source={{uri: item.imagerm}}/>
                                </View>
                            </View>
                        }/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default HomeScreen;
const styles = StyleSheet.create({
    modal: {
        width: 380,
        height: 380,
        backgroundColor: '#fff',
    },
    view_modal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    view_row: {
        margin: 10,
        borderRadius: 10,
        marginTop: -50,
        flex: 2,
        padding: 10,
        elevation: 7,
        backgroundColor: '#fff'
    },
    view_check: {
        marginTop: 5,
        width: '95%',
        flexDirection: 'row',
        borderWidth: 1,
        height: 40,
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'flex-end'
    },
    text_check: {
        fontSize: 16,
        color: '#4a4a4a'
    },
    check_TouchableOpacity: {
        padding: 15,
        width: 100,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text_Durations: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        color: '#4a4a4a'
    },
    view_RangeSlider: {
        flex: 6,
        backgroundColor: '#cfcfcf',
        borderWidth: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 10,
    },
    view_TouchableOpacity: {
        marginLeft: 10,
        backgroundColor: 'red',
        width: 50,
        height: 50,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    text_Destinations: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    }
})
