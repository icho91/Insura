export function selectClient(client) {
  // selectClient is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'CLIENT_SELECTED',
    payload: client
  };
}

export function submitForm(props) {
  console.log('Submit Form selected!');
  return;
}
