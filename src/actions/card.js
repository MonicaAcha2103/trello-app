export const addCard = ({ text, ListID }) => ({
  type: "ADD_CARD",
  payload: { text, ListID }
});

export const deleteCard = ({ id, ListID }) => ({
  type: "DELETE_CARD",
  payload: { id, ListID }
});
