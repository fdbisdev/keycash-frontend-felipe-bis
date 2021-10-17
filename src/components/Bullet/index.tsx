import React from 'react';

import { Container } from './styles';

interface Props {
  // eslint-disable-next-line react/require-default-props
  active?: boolean;
}

export default function Bullet({ active = false }: Props) {
  return <Container active={active} />;
}
