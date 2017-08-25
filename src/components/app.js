import React, { Component } from 'react';

import ClientForm from '../containers/client_form';
import ClientList from '../containers/client_list';
import ClientDetail from '../containers/client_detail';

class App extends Component {
  render() {
    return (
      <div>
        <ClientForm />
        <ClientList />
        <ClientDetail />
      </div>
    );
  }
}

export default App;
