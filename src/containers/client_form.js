import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { submitForm } from '../actions/index';
import { bindActionCreators } from 'redux';

class ClientForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '' };
    this.onChange = (event) => this.setState({name: event.target.value});
  }

  render() {
    return(
    <form onSubmit={() => this.props.submitForm(this.state)}>
      <input value={this.state.name} onChange={this.onChange} placeholder='Enter name' />
      <button type="submit">Submit</button>
    </form>
    );
  }
}

function mapStateToProps(state) {
  return{
    clients: state.clients
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitForm: submitForm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientForm);
