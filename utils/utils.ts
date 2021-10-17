import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const { width: SCREEN_WIDTH } = Dimensions.get('screen');

export const { width: DEVICE_WIDTH } = Dimensions.get('window');

export const STATUSBAR_HEIGHT = getStatusBarHeight();
