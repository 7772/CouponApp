import { AsyncStorage } from 'react-native';
import MyCoupon from './../data/Coupon';
export const COUPON_KEY = 'albongs:coupons';
import { MockCoupons } from './../data/Mocks';

async function read(key, deserializer) {
  try {
    let val = await AsyncStorage.getItem(key);
    if(val !== null) {
      let readValue = JSON.parse(val).map(serialized => {
        return deserializer(serialized);
      });
      return readValue;
    }
    else {
      console.info(`${key} not found on disk.`);
    }
  } catch (error) {
    console.warn('AsyncStorage error: ', error.message);
  }
}

async function write(key, item) {
  try {
    console.log('key type :: ');
    console.log(JSON.stringify(item));
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error('AsyncStorage error: ', error.message);
  }
}

export const readMyCoupons = () => {
  return read(COUPON_KEY, MyCoupon.fromObject);
};

export const writeMyCoupons = MyCoupons => {
  return write(COUPON_KEY, MyCoupons);
};

//const replaceData = writeCoupons(MockCoupons);
