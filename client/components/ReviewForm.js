import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createReview } from '../store/redux/reviews';
import { setSingleUser } from '../store/redux/users';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: '',
      // star: '',
      productId: '',
      userId: '',
      username: '',
      date: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
      productId: this.props.productId,
      userId: this.props.userId,
      username: this.props.user.user.username,
      date: new Date(),
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { feedback, productId, userId, username, date } = this.state;
    this.props.createReview(feedback, productId, userId, username, date);
    this.setState({ feedback: '' });
  }

  render() {
    const { feedback } = this.state;
    const { handleSubmit, handleChange } = this;
    console.log(this.props);
    return (
      <div>
        <form id="review-content" onSubmit={handleSubmit}>
          <div>
            <h4>Please leave a feedback about this product:</h4>
            <textarea
              className="review-input"
              type="text"
              name="feedback"
              value={feedback}
              onChange={handleChange}
            />
            {
              //rating would go here
            }
          </div>
          <div>
            <button type="submit">Submit a review!</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (user) => {
  return {
    user,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createReview: (feedback, productId, userId, username, date) =>
      dispatch(createReview(feedback, productId, userId, username, date)),
    getUser: () => dispatch(setSingleUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
