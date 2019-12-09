import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const {reviews, deleteReview, restaurantId} = this.props
    const reviewsOfRestaurant = reviews.filter(rev => rev.restaurantId === restaurantId)

    return (
      <ul>
        {reviewsOfRestaurant.map(rev => <Review key={rev.id} review={rev} deleteReview={deleteReview}/>)}
      </ul>
    );
  }
};

export default Reviews;