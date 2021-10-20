import React from 'react';
import { BulletProps } from '../../../utils/types';

import { Container } from './styles';

export default function Bullet({ active = false }: BulletProps) {
  return <Container active={active} />;
}
