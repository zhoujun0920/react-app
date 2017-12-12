import dispatcher from "../../dispatcher.jsx";

export function resetCalculator() {
  dispatcher.dispatch({
    type: "RESET_CALCULATOR",
    input: 0,
  });
}

export function resetInput() {
  dispatcher.dispatch({
    type: "RESET_INPUT",
  })
}

export function receiveInput(input) {
  dispatcher.dispatch({
    type: "RECEIVE_INPUT",
    input,
  });
}

export function calculateResult() {
  dispatcher.dispatch({
    type: "CALCULATE_RESULT",
  });
}
