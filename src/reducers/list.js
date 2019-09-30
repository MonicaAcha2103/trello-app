let listID = 2;
let cardID = 6;
const listReducerDefaultState = [];
export default (state = listReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_LIST": {
      const newList = {
        title: action.payload,
        cards: [],
        id: `list=${listID}`
      };
      listID++;
      return [...state, newList];
    }
    case "ADD_CARD": {
      const newCard = {
        id: `card=${cardID}`,
        title: action.payload.text
      };
      cardID++;

      const newState = state.map(list => {
        if (list.id === action.payload.ListID) {
          return { ...list, cards: [...list.cards, newCard] };
        } else {
          return list;
        }
      });

      return newState;
    }

    case "DRAG_HAPPENED": {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload;

      const newState = [...state];
      //same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      //other list
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find(list => droppableIdStart === list.id);
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = state.find(list => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;
    }
    case "DELETE_LIST": {
      return state.filter(({ id }) => id !== action.payload);
    }
    case "EDIT_LIST": {
      let newState = state;
      const { ListID, newTitle } = action.payload;

      let index = newState.findIndex(item => item.id === ListID);

      state[index].title = newTitle;

      return state;
    }
    case "DELETE_CARD": {
      const { ListID } = action.payload;
      const CardID = action.payload.id;
      let newState = [...state];

      let index = newState.findIndex(item => item.id === action.payload.ListID);
      newState[index].cards = newState[index].cards.filter(
        ({ id }) => id !== CardID
      );

      return newState;
    }
    case "EDIT_CARD": {
      const { text, ListID, id } = action.payload;

      let newState = [...state];

      let cardid = id;
      return state.map(item => {
        if (item.id === ListID) {
          return {
            ...item,
            cards: item.cards.map(card => {
              if (card.id === cardid) {
                return Object.assign({}, card, { title: text });
                // card.title = text;
              }
              return card;
            })
          };
        }

        return item;
      });
    }
    default:
      return state;
  }
};
