import styled from 'styled-components/native';

import FA5Icon from 'react-native-vector-icons/FontAwesome5';

import { RFValue } from 'react-native-responsive-fontsize';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #ede8fc;
`;

export const Header = styled.View`
  background-color: #f10074;
  width: 100%;
  height: 58px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + RFValue(10)}px;
`;

export const PageName = styled.Text`
  color: #fff;
  font-size: 18px;
  padding: 16px;
  font-weight: bold;
`;

export const LoadingWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FilterWrapper = styled.TouchableOpacity``;

export const FilterIcon = styled(FA5Icon).attrs({
  color: '#fff',
  solid: true,
  size: 18,
})`
  padding: 16px;
`;
