
const eventsReducerDefaultState = [];

export default (state = eventsReducerDefaultState, action) => {
  switch (action.type) {
    case 'REQUEST_GET_EVENTS':
      return [...state]
    case 'GET_EVENTS_SUCCESS':
      return action.events
    case 'GET_EVENTS_FAILURE':
      return {
        isFetching: false,
        errorMessage: action.message
      }
    case 'ADD_EVENT_SUCCESS':
      return [...state, {id: action.id, date: action.date, name: action.name, address: action.address, placeId: action.placeId}];
    case 'REMOVE_EVENT':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EVENT':
      return state.map( (event) => {
        if (event.id === action.id) {
          return {
            ...event,
            ...action.updates
          }
        } else {
          return event;
        }
      });
    default:
      return state;
  }
}
