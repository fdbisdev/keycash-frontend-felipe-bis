import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  HouseDetails: {
    houseAdress: AdressProps;
    houseImages: Array<string>;
    priceBrazilCurrency: string;
    houseBathrooms: number;
    houseBedrooms: number;
    houseParkingSpaces: number;
    houseUsableArea: number;
  };
  HomeScreen: undefined;
};

export interface GeolocationProps {
  lat: number;
  lng: number;
}

export interface AdressProps {
  formattedAddress: string;
  geolocation: GeolocationProps;
}

export type HouseDetailsProps = NativeStackScreenProps<
  StackParamList,
  'HouseDetails'
>;
