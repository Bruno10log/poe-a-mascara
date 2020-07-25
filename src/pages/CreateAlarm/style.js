import { TextInput, Switch } from 'react-native-paper';
import styled from 'styled-components/native';

export const Form = styled.View`
    flex:1;
    flex-direction: column;
    margin-top: 6px;
    margin-left: 6px;
    margin-right: 6px;
`;

export const CommonText = styled(TextInput)`
  
`;

export const TitleInput = styled(CommonText)`

`;

export const DaysOfWeekTitle = styled.Text`
    margin-top: 6px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`
export const DaysOfWeek = styled.View`
    flex-direction: row;
    margin-top: 20px;
`;

export const WeekDay = styled.Text`
    
`;

export const WeekDayButton = styled(Switch)`

`;

export const HourInput = styled.Text`
    margin-top: 6px;
    font-size: 40px;
    text-align: center;
    border-radius: 20px; 
    background-color: ${props=> props.backgroundColor}
`;
