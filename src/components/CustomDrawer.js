import React from 'react';
import styled from 'styled-components/native';

const TabArea = styled.View`
    height: 60px;
    background-color: #22B573;
    flex-direction: row;

`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items:center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items:center;
    background-color: #FFFFFF;
    border-radius: 35px;
    border: 3px solid #22B573;
    margin-top: -20px;
`;

export default ({state, navigation}) => {
    
    const goTo = (screenName) =>{
        navigation.navigate(screenName);
    }
    
    return (
        <TabArea>
            <TabItem onPress={() => goTo('PrimeiraTela')}></TabItem>
            <TabItemCenter  onPress={() => goTo('SegundaTela')}></TabItemCenter>            
            <TabItem  onPress={() => goTo('TerceiraTela')}></TabItem>
        </TabArea>
    );
}