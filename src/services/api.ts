import axios from 'axios';

const getAllRealEstate = async () => {
  const getRealEstateURL =
    'http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge';

  try {
    const realEstateResponse = await axios.get(getRealEstateURL);
    return realEstateResponse;
  } catch (error) {
    return error;
  }
};

export default getAllRealEstate;
