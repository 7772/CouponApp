import { REVIEW_COUPON } from './../actions/types';

export const mkReviewState = ( couponID = null )  => {
    return { couponID };
};


function findCoupon(coupons, id) {
  return coupons.find(c => {
    return c.id ==id;
  });
}

function generateReviews(coupon) {
  return mkReviewState(coupon.id);
}

const reducer = (state = mkReviewState(), action, coupons) => {
  switch (action.type) {
    case REVIEW_COUPON:
      return generateReviews(findCoupon(coupons, action.data.couponID));
  }
  return state;
};

export default reducer;
