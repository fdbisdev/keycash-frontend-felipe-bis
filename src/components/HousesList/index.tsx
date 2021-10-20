import React from 'react';
import { FlatList } from 'react-native';
import { HouselistElementProps } from '../../../utils/types';

import HousesListElement from './HousesListElement';

import { Container, EmptyMessage } from './styles';

interface HouseListProps {
  list: HouselistElementProps[] | null | undefined;
}

const HousesList = ({ list }: HouseListProps) => {
  const HouseListElement = ({ item }: { item: HouselistElementProps }) => {
    return (
      <>
        {item.publish && (
          <HousesListElement
            houseID={item.id}
            houseAdress={item.address}
            houseImages={item.images}
            housePrice={item.price}
            houseBathrooms={item.bathrooms}
            houseBedrooms={item.bedrooms}
            houseParkingSpaces={item.parkingSpaces}
            houseUsableArea={item.usableArea}
          />
        )}
      </>
    );
  };

  return (
    <Container>
      {list?.length === 0 ? (
        <EmptyMessage>Sem resultados.</EmptyMessage>
      ) : (
        <FlatList
          data={list}
          keyExtractor={item => String(item.id)}
          renderItem={HouseListElement}
        />
      )}
    </Container>
  );
};

export default HousesList;
