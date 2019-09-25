var nextId = 0;

export const addBoard = ({ title = "" } = {}) => ({
  type: "ADD_BOARD",
  board: {
    id: ++nextId,
    title
  }
});

export const removeBoard = (id = "") => {
  return {
    type: "REMOVE_BOARD",
    id
  };
};
