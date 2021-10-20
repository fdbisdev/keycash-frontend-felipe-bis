import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  HouseDetails: {
    houseID: number;
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

export interface BulletProps {
  // eslint-disable-next-line react/require-default-props
  active?: boolean;
}

export interface HouselistElementProps {
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
