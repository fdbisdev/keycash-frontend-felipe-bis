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
  HousePriceCurrency,
  HouseDetailsWrapper,
  HouseDetailsContainer,
  PriceContainer,
  InfoContainer,
  InfoTitle,
  InfoText,
  HouseAdressTitle,
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
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Container>
        <BackButtonWrappper onPress={handleReturnHome}>
          <BackButton />
        </BackButtonWrappper>

        <HouseBannerWrapper>
          <HouseBannerLarge source={{ uri: houseImages[0] }} />
        </HouseBannerWrapper>

        <HouseWrapper>
          <HouseInfoWrapper>
            <PriceContainer>
              <HousePriceCurrency>R$ </HousePriceCurrency>
              <HousePrice>{priceBrazilCurrency}</HousePrice>
            </PriceContainer>
            <HouseLatLong>{`(${houseAdress.geolocation.lat}, ${houseAdress.geolocation.lng})`}</HouseLatLong>
          </HouseInfoWrapper>
        </HouseWrapper>

        <HouseDetailsWrapper>
          <HouseDetailsContainer>
            <InfoContainer>
              <InfoText>{`${houseUsableArea} km²`}</InfoText>
              <InfoTitle>Área</InfoTitle>
            </InfoContainer>
            <InfoContainer>
              <InfoText>{houseBathrooms}</InfoText>
              <InfoTitle>Banheiros</InfoTitle>
            </InfoContainer>
            <InfoContainer>
              <InfoText>{houseBedrooms}</InfoText>
              <InfoTitle>Quartos</InfoTitle>
            </InfoContainer>
            <InfoContainer>
              <InfoText>{houseParkingSpaces}</InfoText>
              <InfoTitle>Vagas</InfoTitle>
            </InfoContainer>
          </HouseDetailsContainer>
        </HouseDetailsWrapper>

        <HouseDetailsWrapper>
          <HouseAdressTitle>{houseAdress.formattedAddress}</HouseAdressTitle>
        </HouseDetailsWrapper>
      </Container>
    </>
  );
};

export default Details;
