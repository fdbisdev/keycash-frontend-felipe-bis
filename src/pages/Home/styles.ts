import styled from 'styled-components/native';

import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize';

import { SCREEN_WIDTH, STATUSBAR_HEIGHT } from '../../../utils/utils';

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
  margin-top: ${STATUSBAR_HEIGHT + RFValue(10)}px;
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

export const SearchBarInputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchIconTouchable = styled.TouchableOpacity``;

export const SearchBarInput = styled.TextInput.attrs({
  placeholderTextColor: '#707070',
})`
  flex: 1;
  margin-left: 4px;
  font-size: 16px;
  color: #333;
`;

export const SearchBarInputContainer = styled.View`
  background-color: #fff;
  border-radius: 4px;
  padding: 0px 10px;
`;

export const SearchIcon = styled(FA5Icon).attrs({
  name: 'search',
  color: '#f10074',
  solid: true,
})`
  font-size: 16px;
  margin-right: 4px;
`;

export const HeaderWrapper = styled.View`
  padding: 12px 12px 0px 12px;
`;

export const SearchFilterWrapper = styled.View`
  justify-content: center;
  padding: 0px 10px;
`;

export const SearchFilterContainer = styled.ScrollView`
  margin-top: 4px;
  margin-bottom: 4px;
  width: ${SCREEN_WIDTH - 20}px;
`;
