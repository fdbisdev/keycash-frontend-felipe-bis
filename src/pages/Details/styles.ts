import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import FA5Icon from 'react-native-vector-icons/FontAwesome5';

const SCREEN_WIDHT = Dimensions.get('screen').width;

export const Container = styled.ScrollView`
  flex: 1;
`;

export const BackButton = styled(FA5Icon).attrs({
  size: 26,
  color: '#F5F5F5',
  name: 'arrow-circle-left',
})``;

export const BackButtonWrappper = styled.TouchableOpacity`
  position: absolute;
  top: 42px;
  left: 8px;
  z-index: 2;
`;

export const HouseBannerWrapper = styled.View`
  flex: 1;
`;

export const HouseBannerLarge = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${SCREEN_WIDHT}px;
  height: 400px;
`;

export const HouseWrapper = styled.View.attrs({
  borderBottomColor: 'black',
  borderBottomWidth: 1,
})`
  padding: 10px;
  background-color: #f5f5f5;
`;

export const HouseInfoWrapper = styled.View`
  flex-direction: row;
  width: ${SCREEN_WIDHT}px;
  align-items: center;
  justify-content: space-evenly;
`;

export const HousePrice = styled.Text`
  color: #4e5260;
  font-size: 28px;
  font-weight: bold;
  padding: 4px;
  margin-right: 18px;
`;

export const HouseLatLong = styled.Text`
  color: #777;
  margin-left: 12px;
  font-size: 14px;
  align-self: flex-end;
  margin-bottom: 4px;
`;

export const HouseDetailsWrapper = styled.View.attrs({
  borderBottomColor: 'black',
  borderBottomWidth: 1,
})`
  background-color: #ffffff;
  padding: 14px;
`;

export const HouseDetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const InfoContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const HousePriceCurrency = styled.Text`
  color: #555;
  font-size: 18px;
  margin-top: 8px;
`;

export const InfoTitle = styled.Text`
  font-size: 14px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const HouseAdressTitle = styled.Text`
  color: #4e5260;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 18px;
`;
