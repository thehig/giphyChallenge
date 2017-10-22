import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

export class Feature extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.shape({
      fetchGiphyError: PropTypes.error
    }).isRequired
  };

  render() {
    const fetchGiphyError = this.props.data.get('fetchGiphyError');
    // console.log(fetchGiphyError);
    return (
      <div>
        { fetchGiphyError && <div>`${fetchGiphyError.stack}`</div>}
        <button onClick={this.props.actions.fetchGiphy}>Fetch Giphy</button>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    data: state.get('feature'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feature);
