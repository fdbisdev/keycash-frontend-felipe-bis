import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { AdressProps } from '../../../utils/types';

import {
  Container,
  BackButtonWrappper,
  BackButton,
  HouseBannerWrapper,
  HouseBannerLarge,
} from './styles';

interface Houses {
  houseAdress: AdressProps;
  houseImages: Array<string>;
  housePrice: number;
  houseBathrooms: number;
  houseBedrooms: number;
  houseParkingSpaces: number;
  houseUsableArea: number;
}

const Details = ({
  houseAdress,
  houseImages,
  housePrice,
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
    <Container>
      <BackButtonWrappper onPress={handleReturnHome}>
        <BackButton />
      </BackButtonWrappper>
      <HouseBannerWrapper>
        <HouseBannerLarge source={{ uri: houseImages[0] }} />
      </HouseBannerWrapper>
    </Container>
  );
};

export default Details;
