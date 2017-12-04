import uuid from 'uuid';

// ADD_EVENT
export const addEvent = (
  {
    name = '',
    date=0,
    lat=0,
    lng=0,
    address=''
  } = {}) => (
    {
    type: 'ADD_EVENT',
    event: {
      id: uuid(),
      name,
      date,
      lat,
      lng,
      address
    }
});

// REMOVE_EVENT
export const removeEvent = ({ id }) => ({
  type: 'REMOVE_EVENT',
  id
});

// EDIT_EVENT
export const editEvent = (id, updates) => ({
  type: 'EDIT_EVENT',
  id,
  updates
})
