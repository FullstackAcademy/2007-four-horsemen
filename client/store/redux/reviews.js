import axios from 'axios';

const GET_REVIEWS = 'GET_REVIEWS';
const CREATE_REVIEW = 'CREATE_REVIEW';

export const _getReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews,
  };
};

export const _postReview = (feedback, productId, userId, username, date) => {
  return {
    type: CREATE_REVIEW,
    feedback,
    productId,
    userId,
    username,
    date,
  };
};

export const getReviews = (reviews) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/reviews');
      dispatch(_getReviews(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const createReview = (feedback, productId, userId, username, date) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/reviews', {
        feedback,
        productId,
        userId,
        username,
        date,
      });
      dispatch(_postReview(data));
    } catch (err) {
      console.error('failed to add a review', err);
    }
  };
};

export default function productReviewsReducer(state = [], action) {
  if (action.type === GET_REVIEWS) {
    return action.reviews;
  }
  if (action.type === CREATE_REVIEW) {
    return [
      ...state,
      action.feedback,
      action.productId,
      action.userId,
      action.username,
      action.date,
    ];
  }
  return state;
}
