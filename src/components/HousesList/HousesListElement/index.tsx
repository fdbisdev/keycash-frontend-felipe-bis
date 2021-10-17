import React, { useEffect, useState } from 'react';

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
  houseID: number;
  houseAdress: AdressProps;
  houseImages: Array<string>;
  housePrice: number;
  houseBathrooms: number;
  houseBedrooms: number;
  houseParkingSpaces: number;
  houseUsableArea: number;
}

const HousesListElement = ({
  houseID,
  houseAdress,
  houseImages,
  housePrice,
  houseBathrooms,
  houseBedrooms,
  houseParkingSpaces,
  houseUsableArea,
}: HouselistElementProps) => {
  const [priceBrazilCurrency, setPriceBrazilCurrency] = useState('');

  const navigation = useNavigation<HouseDetailsProps['navigation']>();

  const handlePressHouseCard = () => {
    navigation.navigate('HouseDetails', {
      houseID,
      houseAdress,
      houseImages,
      priceBrazilCurrency,
      houseBathrooms,
      houseBedrooms,
      houseParkingSpaces,
      houseUsableArea,
    });
  };

  const formatToBrazilCurrency = () => {
    var priceFormatted = housePrice + '';
    priceFormatted = priceFormatted.replace(/([0-9]{2})$/g, ",$1");
    if (priceFormatted.length > 6)
      priceFormatted = priceFormatted.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    setPriceBrazilCurrency(priceFormatted);
  };

  useEffect(() => {
    formatToBrazilCurrency();
  }, []);

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
            <HousePrice>{priceBrazilCurrency}</HousePrice>
          </HousePriceWrapper>
        </InfoWrapper>
      </Container>
    </TouchableCard>
  );
};

export default HousesListElement;
