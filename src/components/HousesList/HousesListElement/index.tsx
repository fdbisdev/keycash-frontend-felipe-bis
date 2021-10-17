import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { AdressProps, HouseDetailsProps } from '../../../../utils/types';

import {
  Container,
  HouseImage,
  InfoWrapper,
  HouseAdress,
  HouseLatLong,
  HousePrice,
  HousePriceWrapper,
  TouchableCard,
  HousePriceCurrency,
  HouseInfo,
  HouseInfoWrapper,
  HouseInfoContainer,
  InfoIcon,
} from './styles';

interface HouselistElementProps {
  houseAdress: AdressProps;
  houseImages: Array<string>;
  housePrice: number;
  houseBathrooms: number;
  houseBedrooms: number;
  houseParkingSpaces: number;
  houseUsableArea: number;
}

const HousesListElement = ({
  houseAdress,
  houseImages,
  housePrice,
  houseBathrooms,
  houseBedrooms,
  houseParkingSpaces,
  houseUsableArea,
}: HouselistElementProps) => {
  const navigation = useNavigation<HouseDetailsProps['navigation']>();

  const handlePressHouseCard = () => {
    navigation.navigate('HouseDetails', {
      houseAdress,
      houseImages,
      housePrice,
      houseBathrooms,
      houseBedrooms,
      houseParkingSpaces,
      houseUsableArea,
    });
  };

  return (
    <TouchableCard onPress={handlePressHouseCard}>
      <Container>
        <HouseImage source={{ uri: houseImages[0] }} />
        <InfoWrapper>
          <HouseAdress>{houseAdress.formattedAddress}</HouseAdress>
          <HouseLatLong>{`${houseAdress.geolocation.lat}, ${houseAdress.geolocation.lng}`}</HouseLatLong>
          <HouseInfoContainer>
            <HouseInfoWrapper>
              <InfoIcon name="bath" />
              <HouseInfo>{`${houseBathrooms}`}</HouseInfo>
            </HouseInfoWrapper>
            <HouseInfoWrapper>
              <InfoIcon name="bed" />
              <HouseInfo>{`${houseBedrooms}`}</HouseInfo>
            </HouseInfoWrapper>
            <HouseInfoWrapper>
              <InfoIcon name="car" />
              <HouseInfo>{`${houseParkingSpaces}`}</HouseInfo>
            </HouseInfoWrapper>
            <HouseInfoWrapper>
              <InfoIcon name="ruler-combined" />
              <HouseInfo>{`${houseUsableArea} km²`}</HouseInfo>
            </HouseInfoWrapper>
          </HouseInfoContainer>
          <HousePriceWrapper>
            <HousePriceCurrency>R$</HousePriceCurrency>
            <HousePrice>{housePrice}</HousePrice>
          </HousePriceWrapper>
        </InfoWrapper>
      </Container>
    </TouchableCard>
  );
};

export default HousesListElement;
