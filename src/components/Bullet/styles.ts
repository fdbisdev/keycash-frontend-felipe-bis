import styled from 'styled-components/native';

interface Props {
  active: boolean;
}

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.View<Props>`
  background-color: ${props => (props.active ? '#f10074' : '#fff')};
  width: 8px;
  height: 8px;
  margin-left: 4px;
  border-radius: 4px;
  border: 0.3px solid #f10074;
`;
