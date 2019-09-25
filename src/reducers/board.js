const boardReducerDefaultState = [];

export default (state = boardReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_BOARD": {
      if (action.board.title) {
        let index = state.findIndex(elem => elem.title === action.board.title);

        if (index === -1) {
          return [...state, action.board];
        }
      }
      return state;
    }

    case "REMOVE_BOARD":
      return state.filter(({ id }) => id !== action.id);

    default:
      return state;
  }
};
