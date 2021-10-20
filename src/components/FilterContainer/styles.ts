import styled from 'styled-components/native';

import { BulletProps } from '../../../utils/types';

export const FilterWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 2px;
`;

export const TouchableFilterBullet = styled.TouchableOpacity<BulletProps>`
  background-color: ${props => (props.active ? '#f10074' : '#ede8fc')};
  width: 12px;
  height: 12px;
  margin: 2px 4px 0px 0px;
  border-radius: 4px;
  border: 0.3px solid #f10074;
`;

export const TouchableFilterText = styled.Text<BulletProps>`
  margin-right: 8px;
  color: ${props => (props.active ? '#444' : '#999')};
`;
