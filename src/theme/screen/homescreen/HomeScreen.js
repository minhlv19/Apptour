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
    imagerm:'https://image.shutterstock.com/image-vector/sale-30-off-sign-over-260nw-434792326.jpg'
}, {
    id: 3,
    name: 'asdj',
    addserr: 'asd',
    imagerm: 'https://www.hobbs.com/on/demandware.static/-/Library-Sites-HBSharedLibrary/default/dwc66b6f72/images/meganav/sale/Extra10-off-sale.jpg'}];


class HomeScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()}/>,
            headerTitle: <Logo/>,
            headerBackTitle: "Home",
            headerLayoutPreset: "center",
            headerStyle: {
                backgroundColor: 'red'
            },


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
                               source={{uri: 'https://tour.dulichvietnam.com.vn/uploads/tour/du-lich-con-dao-1.JPG.jpg'}}/>
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
