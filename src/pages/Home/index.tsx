import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, StatusBar } from 'react-native';
import { HouselistElementProps } from '../../../utils/types';
import FilterContainer from '../../components/FilterContainer';

import HousesList from '../../components/HousesList';

import getAllRealEstate from '../../services/api';

import {
  Container,
  Header,
  PageName,
  LoadingWrapper,
  SearchIcon,
  SearchBarInputWrapper,
  SearchBarInputContainer,
  SearchBarInput,
  HeaderWrapper,
  SearchFilterContainer,
  SearchIconTouchable,
  SearchFilterWrapper,
} from './styles';

interface HouseSortProps {
  price: number;
}

interface FilterProps {
  adress: boolean;
  price: boolean;
  area: boolean;
  parking: boolean;
  bathroom: boolean;
  bedroom: boolean;
}

const filterInitialState: FilterProps = {
  adress: true,
  price: false,
  area: false,
  parking: false,
  bathroom: false,
  bedroom: false,
}

enum filterOptionsEnum {
  ADRESS,
  PRICE,
  AREA,
  PARKING,
  BATHROOM,
  BEDROOM,
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [realEstate, setRealEstate] = useState<HouselistElementProps[]>([]);
  const [realEstateAux, setRealEstateAux] = useState<HouselistElementProps[]>([]);
  const [filterOptions, setFilterOptions] = useState(filterInitialState);
  const [searchInputValue, setSearchInputValue] = useState('');

  const orderByPrice = (a: HouseSortProps, b: HouseSortProps) => {
    return a.price < b.price ? 1 : a.price > b.price ? -1 : 0;
  }

  const getRealEstate = useCallback(async () => {
    const allRealEstate: any = await getAllRealEstate();
    const allRealEstateFiltered = allRealEstate.data.sort(orderByPrice);
    setRealEstateAux(allRealEstateFiltered);
    setRealEstate(allRealEstateFiltered);
  }, [setRealEstate]);

  const handlePressSearchIcon = async () => {
    setLoading(true);

    if (searchInputValue === '') {
      setRealEstateAux(realEstate);
      setLoading(false);
      return;
    }

    const newRealState: HouselistElementProps[] = [];

    if (filterOptions.adress) {
      realEstate.map((element: HouselistElementProps) => {
        if (element.address.formattedAddress.includes(searchInputValue)) {
          newRealState.push(element);
        }
      })
      setRealEstateAux(newRealState);
      setLoading(false);
      return;
    }

    if (filterOptions.bathroom) {
      realEstate.map((element: HouselistElementProps) => {
        if (element.publish && (element.bathrooms === Number(searchInputValue))) {
          newRealState.push(element);
        }
      })
      setRealEstateAux(newRealState);
      setLoading(false);
      return;
    }

    if (filterOptions.bedroom) {
      realEstate.map((element: HouselistElementProps) => {
        if (element.publish && (element.bedrooms === Number(searchInputValue))) {
          newRealState.push(element);
        }
      })
      setRealEstateAux(newRealState);
      setLoading(false);
      return;
    }

    if (filterOptions.parking) {
      realEstate.map((element: HouselistElementProps) => {
        if (element.publish && (element.parkingSpaces === Number(searchInputValue))) {
          newRealState.push(element);
        }
      })
      setRealEstateAux(newRealState);
      setLoading(false);
      return;
    }

    if (filterOptions.area) {
      realEstate.map((element: HouselistElementProps) => {
        if (element.publish && (element.usableArea === Number(searchInputValue))) {
          newRealState.push(element);
        }
      })
      setRealEstateAux(newRealState);
      setLoading(false);
      return;
    }

    if (filterOptions.price) {
      realEstate.map((element: HouselistElementProps) => {
        if (element.publish && (element.price === Number(searchInputValue))) {
          newRealState.push(element);
        }
      })
      setRealEstateAux(newRealState);
      setLoading(false);
      return;
    }
  }

  const handlePressBullet = (bulletElemnt: Number) => {
    switch (bulletElemnt) {
      case filterOptionsEnum.ADRESS:
        setFilterOptions({
          adress: true,
          price: false,
          area: false,
          parking: false,
          bathroom: false,
          bedroom: false,
        })
        break;

      case filterOptionsEnum.PRICE:
        setFilterOptions({
          adress: false,
          price: true,
          area: false,
          parking: false,
          bathroom: false,
          bedroom: false,
        })
        break;

      case filterOptionsEnum.AREA:
        setFilterOptions({
          adress: false,
          price: false,
          area: true,
          parking: false,
          bathroom: false,
          bedroom: false,
        })
        break;

      case filterOptionsEnum.PARKING:
        setFilterOptions({
          adress: false,
          price: false,
          area: false,
          parking: true,
          bathroom: false,
          bedroom: false,
        })
        break;

      case filterOptionsEnum.BATHROOM:
        setFilterOptions({
          adress: false,
          price: false,
          area: false,
          parking: false,
          bathroom: true,
          bedroom: false,
        })
        break;

      case filterOptionsEnum.BEDROOM:
        setFilterOptions({
          adress: false,
          price: false,
          area: false,
          parking: false,
          bathroom: false,
          bedroom: true,
        })
        break;
    }
  }

  useEffect(() => {
  }, [realEstate]);

  useEffect(() => {
    getRealEstate();
    setLoading(false);
  }, []);

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#f10074"
      />

      <Header>
        <PageName>Página Inicial</PageName>
      </Header>

      <KeyboardAvoidingView>
        <HeaderWrapper>
          <SearchBarInputContainer>
            <SearchBarInputWrapper>
              <SearchBarInput placeholder="Buscar" value={searchInputValue} onChangeText={text => setSearchInputValue(text)} />
              <SearchIconTouchable onPress={handlePressSearchIcon}>
                <SearchIcon />
              </SearchIconTouchable>
            </SearchBarInputWrapper>
          </SearchBarInputContainer>
        </HeaderWrapper>

        <SearchFilterWrapper>
          <SearchFilterContainer
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            <FilterContainer pressBullet={() => handlePressBullet(filterOptionsEnum.ADRESS)} active={filterOptions.adress} filterText="Endereço" />
            <FilterContainer pressBullet={() => handlePressBullet(filterOptionsEnum.PRICE)} active={filterOptions.price} filterText="Preço" />
            <FilterContainer pressBullet={() => handlePressBullet(filterOptionsEnum.AREA)} active={filterOptions.area} filterText="Área" />
            <FilterContainer pressBullet={() => handlePressBullet(filterOptionsEnum.PARKING)} active={filterOptions.parking} filterText="Vagas" />
            <FilterContainer pressBullet={() => handlePressBullet(filterOptionsEnum.BATHROOM)} active={filterOptions.bathroom} filterText="Banheiros" />
            <FilterContainer pressBullet={() => handlePressBullet(filterOptionsEnum.BEDROOM)} active={filterOptions.bedroom} filterText="Quartos" />

          </SearchFilterContainer>
        </SearchFilterWrapper>
      </KeyboardAvoidingView>

      {loading ? (
        <LoadingWrapper>
          <ActivityIndicator color="#444" size="large" />
        </LoadingWrapper>
      ) : (
        <HousesList list={realEstateAux} />
      )}

    </Container>

  );
};

export default Home;
