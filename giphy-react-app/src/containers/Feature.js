import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

export class Feature extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <button onClick={this.props.actions.fetchGiphy}>Fetch Giphy</button>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    feature: state.feature,
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
