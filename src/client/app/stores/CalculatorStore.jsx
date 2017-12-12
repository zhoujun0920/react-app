import { EventEmitter } from "events";

import dispatcher from "../../dispatcher.jsx";

class CalculatorStore extends EventEmitter {
  constructor() {
    super()
    this.isTodo = this.isTodo.bind(this);
    this.setState = this.setState.bind(this);
    this.state = {
      finalResult: 0,
      currentInput: 0,
      todo: '',
      isCalculated: false,
      isFirstInput: false,
      isSecondInput: false,
    }
  }

  isTodo(input) {
    return input == '+' || input == '-' || input == 'x' || input == '÷';
  }

  setState(_finalResult, _currentInput, _todo, _isCalculated, _isFirstInput, _isSecondInput) {
    this.state = {
      finalResult: _finalResult,
      currentInput: _currentInput,
      todo: _todo,
      isCalculated: _isCalculated,
      isFirstInput: _isFirstInput,
      isSecondInput: _isSecondInput,
    }
  }

  getResult() {
    return this.state;
  }

  resetCalculator() {
    this.state = {
      finalResult:0,
      currentInput: 0,
      todo: '',
      isCalculated: false,
      isFirstInput: false,
      isSecondInput: false,
    };

    this.emit("change");
  }

  resetInput() {
    this.setState(this.state.finalResult, 0, this.state.todo, false, true, false);
  }

  calculateResult() {
    console.log('CalculatorStore calculate result ' + this.state.todo);
    switch(this.state.todo) {
      case "+": {
        this.setState(this.state.finalResult + this.state.currentInput,
          this.state.currentInput, this.state.todo, true, false, false)
        break;
      }
      case "-": {
        this.setState(this.state.finalResult - this.state.currentInput,
          this.state.currentInput, this.state.todo, true, false, false)
        break;
      }
      case "x": {
        this.setState(this.state.finalResult * this.state.currentInput,
          this.state.currentInput, this.state.todo, true, false, false)
        break;
      }
      case "÷": {
        this.setState(this.state.finalResult / this.state.currentInput,
          this.state.currentInput, this.state.todo, true, false, false)
        break;
      }
      case "+/-": {
        this.setState(this.state.finalResult,
          -this.state.currentInput, this.state.todo, true,
          this.state.isFirstInput, this.state.isSecondInput)
        break;
      }
    }
  }

  receiveInput(input) {
    if (this.isTodo(input)) {
      if (this.state.isSecondInput) {
        this.calculateResult();
        this.setState(this.state.finalResult, this.state.finalResult, input, false, true, false);
      } else {
        this.setState(this.state.finalResult, this.state.currentInput, input, false,
          true, false);
      }
      console.log('receive input change is second input to ' + this.state.isSecondInput);
    } else {
      if (this.state.isFirstInput) {
        if (this.state.isSecondInput) {
          this.setState(this.state.finalResult, this.state.currentInput * 10 + input,
            this.state.todo, false, true, true);
        } else {
          this.setState(this.state.finalResult, input, this.state.todo, false,
            true, true);
        }
      } else {
        if (this.state.finalResult == 0) {
          this.setState(input, input, '', false, true, false);
        } else {
          this.setState(this.state.finalResult, this.state.currentInput * 10 + input,
            this.state.todo, false, true, false);
        }
      }
    }
    console.log('CalculatorStore receive input ' + this.state.currentInput);
  }

  handleActions(action) {
    console.log('CalculatorStore handleActions ' + action.input);
    switch(action.type) {
      case "RESET_CALCULATOR": {
        this.resetCalculator();
        this.emit("change");
        break;
      }
      case "RESET_INPUT": {
        this.resetInput();
        this.emit("change");
        break;
      }
      case "RECEIVE_INPUT": {
        this.receiveInput(action.input);
        this.emit("change");
        break;
      }
      case "CALCULATE_RESULT": {
        this.calculateResult()
        this.emit("change")
        break;
      }
    }
  }

}

const calculatorStore = new CalculatorStore;
dispatcher.register(calculatorStore.handleActions.bind(calculatorStore));

export default calculatorStore;
