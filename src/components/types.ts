export interface GeolocationProps {
  lat: number;
  lng: number;
}

export interface AdressProps {
  formattedAddress: string;
  geolocation: GeolocationProps;
}
