import React from 'react';

import {
  FilterWrapper,
  TouchableFilterBullet,
  TouchableFilterText,
} from './styles';

interface FilterContainerProps {
  pressBullet: () => void;
  active: boolean;
  filterText: string;
}

const FilterContainer = ({
  pressBullet,
  active,
  filterText,
}: FilterContainerProps) => {
  return (
    <FilterWrapper>
      <TouchableFilterBullet onPress={pressBullet} active={active} />
      <TouchableFilterText active={active}>{filterText}</TouchableFilterText>
    </FilterWrapper>
  );
};

export default FilterContainer;
