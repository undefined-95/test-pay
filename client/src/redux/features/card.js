const initialState = {
  card: [],
  loading: false,
};
const local = "http://localhost:4000";

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add/card/pending":
      return {
        ...state,
        loading: true,
      };
    case "add/card/fulfilled":
      return {
        ...state,
        card: [...state.card, action.payload],
      };
    case "add/card/rejected":
      return {
        ...state,
        error: [action.payload, ...state.card],
      };
    default:
      return state;
  }
};

export const addCard = (number, date, cvv, amount) => {
  return async (dispatch) => {
    dispatch({ type: "add/card/pending" });
    const response = await fetch(`${local}/`, {
      method: "POST",
      body: JSON.stringify({
        number: number,
        date: date,
        cvv: cvv,
        amount: amount,
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "add/card/rejected", payload: json });
    } else {
      dispatch({
        type: "add/card/fulfilled",
        payload: json,
      });
    }
  };
};
