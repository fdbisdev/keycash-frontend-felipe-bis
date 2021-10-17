import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';

import Modal from 'react-native-modal';

import HousesList from '../../components/HousesList';

import getAllRealEstate from '../../services/api';

import {
  Container,
  Header,
  PageName,
  FilterIcon,
  FilterWrapper,
  LoadingWrapper,
} from './styles';

interface HouseSortProps {
  price: number;
}

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [realEstate, setRealEstate] = useState([]);

  const orderByPrice = (a: HouseSortProps, b: HouseSortProps) => {
    return a.price < b.price ? 1 : a.price > b.price ? -1 : 0;
  }

  const getRealEstate = useCallback(async () => {
    const allRealEstate: any = await getAllRealEstate();
    const allRealEstateFiltered = allRealEstate.data.sort(orderByPrice);
    setRealEstate(allRealEstateFiltered);
    setLoading(false);
  }, []);

  useEffect(() => {
    getRealEstate();
  }, []);

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#f10074"
      />

      <Container>

        <Header>
          <PageName>Página Inicial</PageName>
          <FilterWrapper>
            <FilterIcon name="sliders-h" />
          </FilterWrapper>
        </Header>

        {loading ? (
          <LoadingWrapper>
            <ActivityIndicator color="#444" size="large" />
          </LoadingWrapper>
        ) : (
          <HousesList list={realEstate} />
        )}

      </Container>
    </>
  );
};

export default Home;
