const INITIAL_STATE = { all: [], contact: {} };

let idCounter = 0;
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_CONTACT":
    console.log("action: ", action)
    console.log("state in reducer: ", state)
    return Object.assign({}, state, {
      all: [
          ...state.all, {
            text: action.text,
            id: idCounter++
          }
        ]
    })

    default:
      return state;
  }
}
