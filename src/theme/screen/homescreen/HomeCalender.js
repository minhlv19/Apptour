import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

class HomeCalender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            selectedEndDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date, type) {
        if (type === 'END_DATE') {
            this.setState({
                selectedEndDate: date,
            });
        } else {
            this.setState({
                selectedStartDate: date,
                selectedEndDate: null,
            });
        }
    }

    render() {
        const {selectedStartDate, selectedEndDate} = this.state;
        const minDate = new Date(2018, 1, 1); // Min date
        const maxDate = new Date(2020, 6, 3); // Max date
        // const startDate = selectedStartDate ? selectedStartDate.toString() : ''; //Start date
        // const endDate = selectedEndDate ? selectedEndDate.toString() : ''; //End date
        return (
            <TouchableOpacity>
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minDate={minDate}
                    maxDate={maxDate}
                    weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
                    months={[
                        'January',
                        'Febraury',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ]}
                    previousTitle="Previous"
                    nextTitle="Next"
                    todayBackgroundColor="#e6ffe6"
                    selectedDayColor="#66ff33"
                    selectedDayTextColor="#000000"
                    scaleFactor={375}
                    textStyle={{
                        fontFamily: 'Cochin',
                        color: '#000000',
                    }}
                    onDateChange={this.onDateChange}
                />
            </TouchableOpacity>
        );
    }
}

export default HomeCalender;
