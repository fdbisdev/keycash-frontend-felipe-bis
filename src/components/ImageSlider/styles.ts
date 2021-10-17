import styled from 'styled-components/native';

import FastImage from 'react-native-fast-image';

import { DEVICE_WIDTH } from '../../../utils/utils';

export const Container = styled.View`
  flex: 1;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 8px;
  position: absolute;
  z-index: 1;
  top: 8px;
`;

export const HouseImageWrapper = styled.View`
  width: ${DEVICE_WIDTH}px;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

export const HouseImage = styled(FastImage)`
  width: 100%;
  height: 300px;
  flex: 1;
`;
