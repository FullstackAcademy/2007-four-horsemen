import React from 'react';

const ReviewsList = (props) => {
  const { reviews, productId } = props;

  const productReview = reviews.filter(
    (review) => review.productId === productId * 1
  );
  console.log(productReview);

  return (
    <div>
      {productReview.map((review) => {
        const date = new Date(review.createdAt);
        const formattedDate =
          (date.getMonth() > 8
            ? date.getMonth() + 1
            : '0' + (date.getMonth() + 1)) +
          '/' +
          (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
          '/' +
          date.getFullYear();
        return (
          <ul>
            <li>{review.username}</li>
            <li>
              <small>{formattedDate}</small>
            </li>
            <li>{review.feedback}</li>
            <hr />
          </ul>
        );
      })}
    </div>
  );
};

export default ReviewsList;
