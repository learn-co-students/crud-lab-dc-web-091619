import React, { Component } from 'react';

class ReviewInput extends Component {

  // <ReviewInput addReview={addReview} restaurantId={restaurant.id}/>

  state = {
    text: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({text: ''})
  }

  handleOnChange = (e) => {
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Write a New Review</label>
          <input type="text" value={this.state.text} onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
