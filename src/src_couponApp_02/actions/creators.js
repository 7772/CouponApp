import {
  ADD_COUPON,
  LOAD_DATA,
  REVIEW_COUPON,
  ADD_MY_COUPON
} from './types';

import { Coupon } from './../data/Coupon';
import { MyCoupon } from './../data/Coupon';


export const addCoupon = (name, number, photoSource) => {
  return { type: ADD_COUPON, data: new Coupon(name, number, photoSource) };
}

export const addMyCoupon = (name, number, photoSource) => {
  return { type: ADD_MY_COUPON, data: new MyCoupon(name, number, photoSource) }
}

export const loadData = data => {
  return { type: LOAD_DATA, data: data };
}

// 개별 쿠폰리스트 보기.
export const reviewCoupon = couponID => {
  return { type: REVIEW_COUPON, data: { couponID: couponID }};
}

// MyCoupon 의 action 정의
// export const MyCoupon = couponID => {
//   return {
//     type: actions.MYCOUPON,
//     id: couponID
//   }
// }