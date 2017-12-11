import dispatcher from "../../dispatcher.jsx";

export function resetCalculator() {
  dispatcher.dispatch({
    type: "RESET_CALCULATOR",
    input: 0,
  });
}

export function receiveInput(input) {
  dispatcher.dispatch({
    type: "RECEIVE_INPUT",
    input,
  });
}

export function calculateResult(input, todo) {
  dispatcher.dispatch({
    type: "CALCULATE_RESULT",
    input,
    todo,
  });
}
