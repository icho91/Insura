import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClientDetail extends Component {
  render() {
    if (!this.props.client) {
      return <div>Please select a client.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Name: {this.props.client.name}</div>
        <div>ID: {this.props.client.id}</div>
        <div>Address: {this.props.client.address}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    client: state.activeClient
  };
}

export default connect(mapStateToProps)(ClientDetail);
