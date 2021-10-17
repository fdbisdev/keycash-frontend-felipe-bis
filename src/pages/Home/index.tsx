import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

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

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [realEstate, setRealEstate] = useState([]);

  const getRealEstate = useCallback(async () => {
    const allRealEstate: any = await getAllRealEstate();
    setRealEstate(allRealEstate.data);
    console.log(realEstate);
    setLoading(false);
  }, []);

  useEffect(() => {
    getRealEstate();
  }, []);

  return (
    <>

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
