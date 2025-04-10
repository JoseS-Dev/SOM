import { View, Text, Image } from "react-native";
import { StylesCalendar } from "../../Css/Calendar";
import {Calendar, DateData, LocaleConfig} from 'react-native-calendars'
import { useState } from "react";
import {LocaleConfigSpanish} from '../../Utils/CalendarUtils'

LocaleConfig.locales['es'] = LocaleConfigSpanish;
LocaleConfig.defaultLocale = 'es';
export function ContentCalendar(){
    const[day, setDay] = useState('');
    return(
        <View style={StylesCalendar.Container}>
            <View style={StylesCalendar.ContainerCalendar}>
                <View style={StylesCalendar.ContainerHeader}>
                    <Text style={StylesCalendar.TextHeader}>Calendario</Text>
                    <Image style={StylesCalendar.ImageHeader} source={require('../../assets/Calendar/Calendar.png')}/>
                </View>
                <Calendar
                    style={StylesCalendar.Calendar}
                    theme={{
                        calendarBackground: '#222',
                        textMonthFontSize: 18,
                        monthTextColor: '#ddd',
                        todayTextColor: '#03f',
                        arrowColor: '#03f',
                        selectedDayBackgroundColor: 'ddaa',
                        selectedDayTextColor: '#fff',
                        textDayStyle: {color: '#fff'},
                        textDisabledColor: '#555',
                    }}
                    minDate={new Date().toISOString()}
                    hideExtraDays={true}
                    onDayPress={setDay}
                    markedDates={
                        day && (
                            { [day.dateString]: { selected: true, marked: true, selectedColor: '#005' } }
                        )
                    }
                />
                <Text style={{color: '#fff', fontSize: 19, textAlign: 'center', marginTop: 10}}>
                    {day ? `Seleccionado: ${day.dateString}` : 'Seleccione una fecha'}</Text>
            </View>
        </View>
    )
}