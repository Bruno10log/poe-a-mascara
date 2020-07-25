import React, { useState } from 'react';
import { Container, ButtonTimer, AlarmList, AlarmItem, AlarmItemText, AlarmItemButton, AlarmEditButton } from './style';
import {useTheme} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

    const [date, setDate] = useState(new Date());

    const [alarms, setAlarms] = useState([{key: '1', alarm: '09:00'},
                                          {key: '2', alarm: '16:00'},
                                          {key: '3', alarm: '21:00'}]);

    const { colors } = useTheme();
    const navigator = useNavigation();   

  

    function removeItem(key) {
        setAlarms(alarms => {
            console.log(alarms);
            const alteredAlarms = alarms.filter(item=> item.key !== key);
            return alteredAlarms;
        })    
    } 
    
    function onPressEditButton(selectedDate) {
        //setDate(selectedDate);
        showTimepicker();
    }

    return(
        <Container backgroundColor={colors.background}>


            <AlarmList
                data={alarms}
                keyExtractor={(item)=> item.key}
                renderItem={({item}) => {
                    return (
                        <AlarmItem backgroundColor={colors.surface}> 
                            <AlarmEditButton onPress={onPressEditButton}>
                                <AlarmItemText color={colors.text}> { item.alarm } </AlarmItemText>
                            </AlarmEditButton>
                            <AlarmItemButton  
                                icon="delete-outline"
                                backgroundColor={colors.primary}
                                color={colors.surface}
                                onPress={() => {removeItem(item.key)}}
                                size={35} />
                        </AlarmItem>
                    )}}
            />
                
            <ButtonTimer onPress={() => navigator.navigate('create')}
                         icon="plus"
                         color={colors.surface}
                          >
            </ButtonTimer>
            
        </Container>
    );

}