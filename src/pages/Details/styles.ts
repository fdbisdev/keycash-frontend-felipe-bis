import styled from 'styled-components/native';

import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';

const SCREEN_WIDHT = Dimensions.get('screen').width;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #ede8fc;
`;

export const BackButton = styled(FA5Icon).attrs({
  size: 26,
  color: '#F5F5F5',
  name: 'arrow-circle-left',
})``;

export const BackButtonWrappper = styled.TouchableOpacity`
  position: absolute;
  top: 12px;
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

export const HouseWrapper = styled.View`
  padding: 10px;
  background-color: #f5f5f5;
`;

export const HouseInfoWrapper = styled.View`
  flex-direction: row;
  width: ${SCREEN_WIDHT}px;
  align-items: center;
  justify-content: space-around;
`;

export const HousePrice = styled.Text`
  color: #4e5260;
  font-size: 28px;
  font-weight: bold;
  padding: 4px;
  margin-right: 32px;
`;

export const HouseLatLong = styled.Text`
  color: #a0a0a0;
  margin-left: 12px;
  font-size: 14px;
  align-self: flex-end;
  margin-bottom: 4px;
`;
