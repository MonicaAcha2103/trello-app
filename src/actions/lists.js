export const addList = title => ({
  type: "ADD_LIST",
  payload: title
});

export const deleteList = id => ({
  type: "DELETE_LIST",
  payload: id
});

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId
) => {
  return {
    type: "DRAG_HAPPENED",
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId
    }
  };
};
