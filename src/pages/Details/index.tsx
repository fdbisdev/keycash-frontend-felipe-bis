import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  useSharedValue,
} from 'react-native-reanimated';

import ImageSlider from '../../components/ImageSlider';

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
  HouseImages,
  HouseImageDetailsWrapper,
} from './styles';

interface Houses {
  houseID: number;
  houseAdress: AdressProps;
  houseImages: Array<string>;
  priceBrazilCurrency: string;
  houseBathrooms: number;
  houseBedrooms: number;
  houseParkingSpaces: number;
  houseUsableArea: number;
}

const Details = ({
  houseID,
  houseAdress,
  houseImages,
  priceBrazilCurrency,
  houseBathrooms,
  houseBedrooms,
  houseParkingSpaces,
  houseUsableArea,
}: Houses) => {
  const navigation = useNavigation();
  const scrollY = useSharedValue(0);

  const handleReturnHome = () => {
    navigation.goBack();
  };

  const sliderHouseStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

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
        <HouseImageDetailsWrapper>
          <Animated.View style={sliderHouseStyleAnimation}>
            <HouseImages>
              <ImageSlider
                imagesUrl={{ id: String(houseID), photo: houseImages }}
              />
            </HouseImages>
          </Animated.View>
        </HouseImageDetailsWrapper>
      </Container>
    </>
  );
};

export default Details;
