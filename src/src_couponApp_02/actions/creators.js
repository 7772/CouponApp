import {
  ADD_COUPON,
  LOAD_DATA,
  REVIEW_COUPON
} from './types';

import Coupon from './../data/Coupon';


export const addCoupon = (name, number, photoSource) => {
  return { type: ADD_COUPON, data: new Coupon(name, number, photoSource) };
}

export const loadData = data => {
  return { type: LOAD_DATA, data: data };
}

export const reviewCoupon = couponID => {
  return { type: REVIEW_COUPON, data: { couponID: couponID }};
}
