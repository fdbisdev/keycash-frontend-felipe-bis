/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import Bullet from '../Bullet';

import {
  Container,
  ImageIndexes,
  HouseImageWrapper,
  HouseImage,
} from './styles';

interface Props {
  imagesUrl: {
    id: string;
    photo: string[];
  };
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

const ImageSlider = ({ imagesUrl }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.photo.map((item, index) => (
          <Bullet key={item} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesUrl.photo}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HouseImageWrapper>
            <HouseImage source={{ uri: item }} resizeMode="contain" />
          </HouseImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
};

export default ImageSlider;
