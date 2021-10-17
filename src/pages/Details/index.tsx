import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'react-native';
import { AdressProps } from '../../../utils/types';

import {
  Container,
  BackButtonWrappper,
  BackButton,
  HouseBannerWrapper,
  HouseBannerLarge,
  HouseWrapper,
  HouseInfoWrapper,
  HousePrice,
  HouseLatLong,
} from './styles';

interface Houses {
  houseAdress: AdressProps;
  houseImages: Array<string>;
  priceBrazilCurrency: string;
  houseBathrooms: number;
  houseBedrooms: number;
  houseParkingSpaces: number;
  houseUsableArea: number;
}

const Details = ({
  houseAdress,
  houseImages,
  priceBrazilCurrency,
  houseBathrooms,
  houseBedrooms,
  houseParkingSpaces,
  houseUsableArea,
}: Houses) => {
  const navigation = useNavigation();

  const handleReturnHome = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <Container>
        <BackButtonWrappper onPress={handleReturnHome}>
          <BackButton />
        </BackButtonWrappper>
        <HouseBannerWrapper>
          <HouseBannerLarge source={{ uri: houseImages[0] }} />
        </HouseBannerWrapper>
        <HouseWrapper>
          <HouseInfoWrapper>
            <HousePrice>{`R$ ${priceBrazilCurrency}`}</HousePrice>
            <HouseLatLong>{`${houseAdress.geolocation.lat}, ${houseAdress.geolocation.lng}`}</HouseLatLong>
          </HouseInfoWrapper>
        </HouseWrapper>
      </Container>
    </>
  );
};

export default Details;
