let listID = 2;
let cardID = 6;
const listReducerDefaultState = [
  {
    title: "title",
    id: `list=${0}`,
    cards: [
      {
        id: `card=${0}`,
        title: "card 1"
      },
      {
        id: `card=${1}`,
        title: "card 2"
      }
    ]
  },
  {
    title: "title",
    id: `list=${1}`,
    cards: [
      {
        id: `card=${2}`,
        title: "card 1"
      },
      {
        id: `card=${3}`,
        title: "card 2"
      },
      {
        id: `card=${4}`,
        title: "card 3"
      },
      {
        id: `card=${5}`,
        title: "card 4"
      }
    ]
  }
];
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
    case "DELETE_CARD": {
      //console.log(action.payload.id, action.payload.ListID);
      let newState = state;
      let index = newState.findIndex(item => item.id === action.payload.ListID);

      newState[index].cards = newState[index].cards.filter(
        ({ id }) => id !== action.payload.id
      );

      console.log(newState);
      return newState;
    }

    default:
      return state;
  }
};
