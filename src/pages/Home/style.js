import styled from 'styled-components/native';
import { FAB, IconButton } from  'react-native-paper';
import { FlatList } from 'react-native';

export const Container = styled.View`
    flex:1;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.Text`
    font-size: 30px;
`;

export const ButtonTimer = styled(FAB)`
    position: absolute;
    margin: 16px;
    right: 0;
    bottom: 0;
`;

export const AlarmList = styled(FlatList)`
`;

export const AlarmItem = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    margin-top: 6px;
    background-color: ${props=> props.backgroundColor};
    height: 80px;
    margin-left: 6px;
    margin-right: 6px;
`;

export const AlarmItemText = styled.Text`
    font-size: 40px;   
    color: ${props=> props.color} 
`;

export const AlarmEditButton = styled.TouchableOpacity`
`;

export const AlarmItemButton = styled(IconButton)`
    background-color: ${props=> props.backgroundColor};
`;