export const addCard = ({ text, ListID }) => ({
  type: "ADD_CARD",
  payload: { text, ListID }
});
