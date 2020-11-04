import axios from 'axios';

const POST_REVIEW = 'POST_REVIEW';

export const _postReview = (productId, username) => {
  return {
    type: POST_REVIEW,
    productId,
    review,
    // username,
  };
};

export const postReview = (productId, username) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/reviews', {
        productId,
        review,
        // username,
      });
      dispatch(postReview(data));
    } catch (err) {
      console.error('failed to add a review', err);
    }
  };
};

export default function productReviewsReducer(state = [], action) {
  console.log(action);
  if (action.type === POST_REVIEW) {
    return [...state, action.review];
  }
  return state;
}
