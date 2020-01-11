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
import DatePicker from 'react-native-datepicker';

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
                backgroundColor: '#cbcbcb'
            },
        };
    };
    constructor(props) {
        super(props);
        this.state = {
            data: items_n,
            isVisible: false,
            val: 1,
            date: '',
            date_min:'',
            date_max: '',
        }
    }
    componentDidMount() {
        const that = this;
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        that.setState({
            date:
                date + '/' + month + '/' + year
        });
        that.setState({
            date_min:
                date + '/' + month + '/' + year
        });
        that.setState({
            date_max:
                (1+date) + '/' + month + '/' + year
        });
    }
    _onPressButton() {
        Alert.alert(
            'Warning',
            'Please select day',
        );
    }
    render() {
        return (
            <ScrollView>
                <View style={{flex: 1}}>
                    {/*View*/}
                    <View style={{flex: 2}}>
                        <Image style={{width: '100%', height: 200}}
                               source={{uri: 'https://tour.dulichvietnam.com.vn/uploads/tour/du-lich-con-dao-1.JPG.jpg'}}/>
                    </View>
                    <View style={styles.view_row}>
                        <View style={{flexDirection: 'row',}}>
                            <View style={{flex: 1}}>
                                <Text style={styles.text_check}>Check-in date</Text>
                                <TouchableOpacity style={styles.view_check}>
                                    <DatePicker
                                        style={{ width: 140 }}
                                        date={this.state.date}
                                        mode="date"
                                        placeholder="select date"
                                        format="DD-MM-YYYY"
                                        minDate={this.state.date_min}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateInput: {
                                                marginLeft: 50,
                                            },
                                        }}
                                        onDateChange={date => {
                                            this.setState({ date: date });
                                        }}
                                    />
                                    <View>
                                        <Image style={{width: 20, height: 20,}}
                                               source={require('../../../accset/images/Icon/calendar.png')}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={styles.text_check}>Check-out date</Text>
                                <TouchableOpacity style={styles.view_check} onPress={() => {
                                    this.setState({isVisible: true})
                                }}>
                                    <DatePicker
                                        style={{ width: 140 }}
                                        date={this.state.date_max}
                                        mode="date"
                                        placeholder="select date"
                                        format="DD-MM-YYYY"
                                        minDate={this.state.date_min}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateInput: {
                                                marginLeft: 50,
                                            },
                                        }}
                                        onDateChange={date => {
                                            this.setState({ date_max: date });
                                        }}
                                    />
                                    <View>
                                        <Image style={{width: 20, height: 20,}}
                                               source={require('../../../accset/images/Icon/calendar.png')}/>
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
                                        selectedMinimum={20}
                                        selectedMaximum={40}
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
                                           source={require('../../../accset/images/Icon/searc.png')}/>
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
        height: 42,
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
