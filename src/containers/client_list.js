import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectClient } from '../actions/index';
import { bindActionCreators } from 'redux';

class ClientList extends Component {
  renderList() {
    return this.props.clients.map((client) => {
      return(
        <li
          key={client.name}
          onClick={() => this.props.selectClient(client)}
          className="list-group-item">
          {client.name}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of ClientList
  return{
    clients: state.clients
  };
}

// Anything returned from this function will end up as props on the
// ClientList container
function mapDispatchToProps(dispatch) {
  // Whenever selectClient is called, the result should be passed to
  // all of our reducers
  return bindActionCreators({ selectClient: selectClient }, dispatch);
}

// Promote ClientList from a component to a container - it needs to know
// about this new dispatch method, selectClient. Make it available as a
// prop.
export default connect(mapStateToProps, mapDispatchToProps)(ClientList);
