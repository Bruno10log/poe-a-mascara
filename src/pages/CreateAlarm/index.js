import React, { useState } from 'react';
import { Form, TitleInput, DaysOfWeek, HourInput, WeekDayButton, WeekDay, DaysOfWeekTitle } from './style';
import { Text } from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTheme } from 'react-native-paper';

export default function CreateAlarm() {
 
    const[title, setTitle] = useState('');
    const[hour, setHour] = useState(new Date());
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [show, setShow] = useState(false);

    const { colors } = useTheme();

    function showTimepicker() {
        setShow(true);
    };

    function onChange(event, selectedDate) {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setHour(selectedDate);         
    };



    return(
        <Form>

            {show && (
                <DateTimePicker 
                    testID="dateTimePicker"
                    value={hour}
                    mode='time'
                    is24Hour={true}
                    display="spinner"
                    onChange={onChange}
                />
            )}
          
            <TitleInput mode="outlined"
                        label="Titulo"
                        onChangeText={title => setTitle(title)}
                        value={title}
            />

            <HourInput 
                       backgroundColor={colors.surface}
                       onPress={() => showTimepicker()}
            > 
                { moment(hour).format('HH:mm') }
            </HourInput>

            <DaysOfWeekTitle>
                Dias que deseja ser avisado    
            </DaysOfWeekTitle>            
            
            <DaysOfWeek>
                <WeekDay>Segunda</WeekDay>
                <WeekDayButton
                    value={isSwitchOn} 
                    onValueChange={onToggleSwitch}
                />      
                <WeekDay>Terça</WeekDay>
                <WeekDayButton
                    value={isSwitchOn} 
                    onValueChange={onToggleSwitch}
                />     
                <WeekDay>Quarta</WeekDay>
                <WeekDayButton
                    value={isSwitchOn} 
                    onValueChange={onToggleSwitch}
                />             
                <WeekDay>Quinta</WeekDay>
                <WeekDayButton
                    value={isSwitchOn} 
                    onValueChange={onToggleSwitch}
                />              
            </DaysOfWeek>
            
            <DaysOfWeek style={{justifyContent: 'center'}}>
                <WeekDay>Sexta</WeekDay>
                <WeekDayButton
                    value={isSwitchOn} 
                    onValueChange={onToggleSwitch}
                /> 
                <WeekDay>Sábado</WeekDay>
                <WeekDayButton
                    value={isSwitchOn} 
                    onValueChange={onToggleSwitch}
                /> 
                <WeekDay>Domingo</WeekDay>
                <WeekDayButton
                    value={isSwitchOn} 
                    onValueChange={onToggleSwitch}
                /> 
            </DaysOfWeek>

        </Form>
    );
}