import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import FA5Icon from 'react-native-vector-icons/FontAwesome5';

const { width: DEVICE_WIDTH } = Dimensions.get('screen');

export const Container = styled.View.attrs({
  width: DEVICE_WIDTH - 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.4,
  shadowRadius: 7.5,
  flexBasis: 0,
  flexGrow: 1,
  elevation: 6,
})`
  background-color: #f5f5f5;
  min-height: 150px;
  margin: 6px 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const HouseImage = styled.ImageBackground`
  height: 100%;
  width: 180px;
`;

export const InfoWrapper = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
`;

export const HouseAdress = styled.Text`
  flex: 1;
  color: #444;
  font-size: 16px;
`;

export const HouseLatLong = styled.Text`
  color: #a1a1a1;
  margin-top: 8px;
`;

export const HouseInfo = styled.Text`
  color: #777777;
  margin-bottom: 4px;
`;

export const HouseInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HousePriceWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HousePriceCurrency = styled.Text`
  margin-top: 18px;
  color: #555;
  font-size: 12px;
`;

export const InfoIcon = styled(FA5Icon).attrs({
  color: '#443',
})`
  margin-right: 2px;
  margin-bottom: 4px;
`;

export const HouseInfoContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 12px;
`;

export const HousePrice = styled.Text`
  margin-top: 12px;
  margin-left: 4px;
  color: #4e5260;
  font-size: 24px;
  font-weight: bold;
`;

export const TouchableCard = styled.TouchableOpacity`
  margin-top: 4px;
`;
