import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { STATUSBAR_HEIGHT } from '../../../utils/utils';

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
