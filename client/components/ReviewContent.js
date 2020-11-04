import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postReview } from '../store/redux/reviews';

class ReviewContent extends Component {
  constructor() {
    super();
    this.state = {
      feedback: '',
      star: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.postReview({ ...this.state });
  }

  render() {
    const { feedback } = this.state;

    return (
      <div>
        <form className="review-content" onSubmit={this.handleSubmit}>
          <div>
            <h4>Please leave a feedback about this product:</h4>
            <input
              type="text"
              name="feedback"
              value={feedback}
              onChange={this.handleChange}
            />
            {
              //rating would go here
            }
            <button type="submit">Submit a review!</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postReview: (formSubmission, productId, username) =>
      dispatch(postReview(formSubmission, productId, username)),
  };
};

export default connect(null, mapDispatchToProps)(ReviewContent);
