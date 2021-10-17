import React from 'react';
import { FlatList } from 'react-native';
import { AdressProps } from '../types';

import HousesListElement from './HousesListElement';

import { Container } from './styles';

interface HouselistElementProps {
  id: number;
  address: AdressProps;
  images: Array<string>;
  price: number;
  bathrooms: number;
  bedrooms: number;
  parkingSpaces: number;
  usableArea: number;
  publish: boolean;
}

interface HouseListProps {
  list: HouselistElementProps[] | null | undefined;
}

const HousesList = ({ list }: HouseListProps) => {
  const HouseListElement = ({ item }: { item: HouselistElementProps }) => {
    return (
      <>
        {item.publish && (
          <HousesListElement
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
      <FlatList
        data={list}
        keyExtractor={item => String(item.id)}
        renderItem={HouseListElement}
      />
    </Container>
  );
};

export default HousesList;
