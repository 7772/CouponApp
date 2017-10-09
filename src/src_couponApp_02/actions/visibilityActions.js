import * as actions from './types';

export function showAllCoupon() {
  return {
    type: actions.SET_VISIBILITY_FILTER,
    filter: actions.COUPON_STATUS.ALL
  };
}

export function showMyCoupon() {
  return {
    type: actions.SET_VISIBILITY_FILTER,
    filter: actions.COUPON_STATUS.MYCOUPON
  };
}

// 만료 쿠폰 스크린 구현 할 때 사용 할 것.
// export function showIncomplete() {
//   return {
//     type: actions.SET_VISIBILITY_FILTER,
//     filter: actions.VisibilityFilters.INCOMPLETE
//   };
// }
