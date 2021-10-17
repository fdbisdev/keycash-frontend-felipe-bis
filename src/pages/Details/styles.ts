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
